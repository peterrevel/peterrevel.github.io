package main

import (
    "fmt"
    "net/http"
    "io/ioutil"
    "encoding/json"
    "strings"
    "os"
    "io"
    // "code.google.com/p/go-uuid/uuid"
)

const ADDR = ":8080"

// const ApiKey = "75199cxziny2hy"
// const SecretKey = "Tvk934KroAQeNtCV"
// const UserSecret = "a8fc48a3-535e-48fa-a555-8646db485f4a"
// const UserToken = "4e91712f-90e8-4a60-a2c8-0874c21ebb36"

// func auth_url(uuid, redirectUrl string) string {
//     return fmt.Sprintf("https://www.linkedin.com/uas/oauth2/authorization?response_type=code&client_id=%s&state=%s&redirect_uri=%s",
//         ApiKey, uuid, redirectUrl)
// }

// func loginHandler(w http.ResponseWriter, r *http.Request) {
//     w.Header()["Location"] = []string{auth_url(ApiKey, fmt.Sprintf("http://54.187.71.204:8080/v1/oauth-redirect"))}
//     w.WriteHeader(301)
// }

// func oauthRedirectHandler(w http.ResponseWriter, r *http.Request) {
//     fmt.Println("Accepted oauth redirect")
//     w.Header()["Location"] = []string{fmt.Sprintf("http://%s/", r.Host)}
//     w.WriteHeader(301)
// }


func indexHandler(w http.ResponseWriter, r *http.Request) {
    fmt.Fprint(w, "Hello World")
    w.WriteHeader(404)
}

func getStringAfterString(mainString string, seperaterString string) string {
    arguments := strings.SplitAfter(mainString, seperaterString)
    resultString := arguments[1]
    return resultString
}

func listAllJobs() []string {
    files, err := ioutil.ReadDir("data/job")
    if err != nil {
        panic(err)
    }
    
    names := make([]string, 0, 3102)
    for _, file := range files {
        names = append(names, file.Name())
    }
    return names
}

func getJobIndex(w http.ResponseWriter, r *http.Request) {
    names := listAllJobs()
    err := json.NewEncoder(w).Encode(names)
    if err != nil {
        panic(err)
    }
    w.WriteHeader(200)
}

func getSpecificJob(w http.ResponseWriter, r *http.Request){
    jobId := getStringAfterString(r.URL.Path, "/v1/job/")

    jobFile, err := os.Open(fmt.Sprintf("data/job/%s", jobId))

    if err != nil {
        fmt.Fprintf(w, "Not Found")
        w.WriteHeader(404)
        return
    }

    io.Copy(w, jobFile)
    w.WriteHeader(200)
}

func getIndustryIndex(w http.ResponseWriter, r *http.Request) {
    industryAbbreviation := getStringAfterString(r.URL.Path, "/v1/industry/")

    industry := new(Industry)
    parseJsonFile("data/industry/" + industryAbbreviation, industry)

    jobs := loadJobsForIndustry(industry)

    if err := json.NewEncoder(w).Encode(jobs); err != nil {
        panic(err)
    }

    w.WriteHeader(200)
}


func getAreaIndex(w http.ResponseWriter, r *http.Request) {
    area := getStringAfterString(r.URL.Path, "/v1/area/")

    jobs := loadJobsForArea(area)

    if err := json.NewEncoder(w).Encode(jobs); err != nil {
        panic(err)
    }

    w.WriteHeader(200)
}

func loadJobsForArea(area string) []Job {
    names := listAllJobs()
    jobs := make([]Job, 0)
    for _, name := range names {
        job := new(Job)
        parseJsonFile("data/job/"+name, job)
        if job.Area == area {
            jobs = append(jobs, *job)
        }
    }
    return jobs
}

func loadJobsForIndustry(industry *Industry) []Job {
    names := listAllJobs()
    jobs := make([]Job, 0)
    for _, name := range names {
        job := new(Job)
        parseJsonFile("data/job/"+name, job)
        if job.IndustryId == industry.Id {
            jobs = append(jobs, *job)
        }
    }
    return jobs
}

func parseJsonFile(filename string, response interface{}) {
    f, err := os.Open(filename)
    defer f.Close()
    if err != nil {
        panic(fmt.Errorf("could not open file: "+filename + " (" + err.Error() + ")"))
    }
    err = json.NewDecoder(f).Decode(response)
    if err != nil {
        panic(fmt.Errorf("could not read json file: "+filename + " (" + err.Error() + ")"))
    }
}

func main() {
    mux := http.NewServeMux()
    mux.HandleFunc("/", Endpoint(GET(indexHandler)))
    mux.HandleFunc("/v1/job/", Endpoint(GET(getSpecificJob)))
    mux.HandleFunc("/v1/jobs/", Endpoint(GET(getJobIndex)))
    mux.HandleFunc("/v1/industry/", Endpoint(GET(getIndustryIndex)))
    mux.HandleFunc("/v1/area/", Endpoint(GET(getAreaIndex)))
    fmt.Println("Listening on", ADDR)
    server := http.Server{Addr: ADDR, Handler: mux}
    err := server.ListenAndServe()
    if err != nil {
        panic(err)
    }
}
