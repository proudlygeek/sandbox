package main

import (
    "fmt"
    "code.google.com/p/go.net/websocket"
    "net/http"
)

func webHandler(ws *websocket.Conn) {
    var in []byte
    if err := websocket.Message.Receive(ws, &in); err != nil {
        // Handle error
    }
    fmt.Printf("Received: %s\n", string(in))
    websocket.Message.Send(ws, "Ciccio")
}

func main() {
    fmt.Println("Starting Websocket server: ")
    http.Handle("/echo", websocket.Handler(webHandler))
    err := http.ListenAndServe(":8080", nil)

    if err != nil {
        panic("ListenAndServe: " +err.Error())
    }
}

