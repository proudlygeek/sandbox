package main

import (
    "net"
    "fmt"
)


func main() {
    broadcast := make(chan string)
    conns := []net.Conn{}

    ln, err := net.Listen("tcp", ":8080")
    if err != nil {
        // Handle error
    }

    fmt.Println("Running socket on localhost:8080")

    for {
        conn, err := ln.Accept()
        if err != nil {
            continue
        }

        go handleConnection(conn, conns, broadcast)
    }
}

func handleConnection(c net.Conn, conns []net.Conn, ch chan string) {
    fmt.Fprintln(c, "Hello dude")
    conns = append(conns, c)

    buf := make([]byte, 2048)

    go readMessages(conns, ch)

    for c != nil {

        readlen, err := c.Read(buf)

        if err != nil {
            // Handle error
            panic(err)
        }

        if readlen == 0 {
            break
        }

        ch <- string(buf)
    }
}

func readMessages(conns []net.Conn, ch chan string) {
    for {
        select {
            case msg := <-ch:
                fmt.Println("Broadcasting messages")

                for _, conn := range(conns) {
                    fmt.Fprintln(conn, msg)
                }
        }
    }
}
