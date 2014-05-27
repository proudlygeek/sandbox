package main

import (
    "fmt"
    zmq "github.com/pebbe/zmq4"
)

func main() {
    fmt.Printf("Connecting to hello world server...")
    requester, _ := zmq.NewSocket(zmq.REQ)
    defer requester.Close()

    requester.Connect("tcp://localhost:5555")
    requester.Connect("tcp://localhost:6666")

    for i := 0; i < 10; i++ {
        msg := fmt.Sprintf("Hello %d", i)
        println("Sending", msg)
        requester.Send(msg, 0)

        reply, _ := requester.Recv(0)
        println("Received", reply)
    }
}
