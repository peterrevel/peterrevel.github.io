package main

import (
    "net/http"
    "fmt"
)

type Handler func(http.ResponseWriter, *http.Request)

func GET(handler Handler) Handler {
    return func(w http.ResponseWriter, r *http.Request) {
        if r.Method != "GET" {
            w.WriteHeader(405)
        } else {
            handler(w, r)
        }
    }
}

func POST(handler Handler) Handler {
    return func(w http.ResponseWriter, r *http.Request) {
        if r.Method != "POST" {
            w.WriteHeader(405)
        } else {
            handler(w, r)
        }
    }
}

func Log(handler Handler) Handler {
    return func(w http.ResponseWriter, r *http.Request) {
        fmt.Printf("%s: %s \n", r.Method, r.URL.Path)
        handler(w, r)
    }
}

func Rescuer(handler Handler) Handler {
    return func(w http.ResponseWriter, r *http.Request) {
        wait := make(chan int, 1)

        go func() {
            defer func() {
                r := recover()
                if r != nil {
                    w.WriteHeader(500)
                    fmt.Println(r)
                }
                wait <- 1
            }()
            handler(w, r)
        }()
        
        <- wait
    }
}

func Endpoint(handler Handler) Handler {
    return Log(handler)
    // return Log(Rescuer(handler))
}
