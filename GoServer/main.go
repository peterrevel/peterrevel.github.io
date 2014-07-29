package main

import (
    "fmt"
    "net/http"
    //"io/ioutil"
    //"encoding/json"
    "strings"
    //"os"
    //"io"
    // "code.google.com/p/go-uuid/uuid"
)

const ADDR = ":8080"

func indexHandler(w http.ResponseWriter, r *http.Request) {
    fmt.Fprint(w, "Hello World! Muhaha!! I'm writing web servers now!!! - Peter")
    w.WriteHeader(404)
}

func getStringAfterString(mainString string, seperaterString string) string {
    arguments := strings.SplitAfter(mainString, seperaterString)
    resultString := arguments[1]
    return resultString
}

func main() {
    mux := http.NewServeMux()
    mux.HandleFunc("/api/", Endpoint(GET(indexHandler)))
    // mux.HandleFunc("/v1/job/", Endpoint(GET(getSpecificJob)))
    // mux.HandleFunc("/v1/jobs/", Endpoint(GET(getJobIndex)))
    // mux.HandleFunc("/v1/industry/", Endpoint(GET(getIndustryIndex)))
    // mux.HandleFunc("/v1/area/", Endpoint(GET(getAreaIndex)))
    fmt.Println("Listening on", ADDR)
    server := http.Server{Addr: ADDR, Handler: mux}
    err := server.ListenAndServe()
    if err != nil {
        panic(err)
    }
}
