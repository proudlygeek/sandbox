package main

import (
    "fmt"
    "net/http"
    "log"
)

type Handler interface {
    ServeHTTP(http.ResponseWriter, *http.Request)
}

type HandlerFunc func(http.ResponseWriter, *http.Request)

func (f HandlerFunc) ServeHTTP(w http.ResponseWriter, r *http.Request) {
    f(w, r)
}

func MyHandler(w http.ResponseWriter, r *http.Request) {
    // HandleFunc wraps this function
    fmt.Fprintf(w, "Easiest webserver ever")
}

func main() {
    // func (pattern string, handler Handler)
    http.Handle("/", HandlerFunc(MyHandler))
    log.Fatal(http.ListenAndServe(":8080", nil))    
}