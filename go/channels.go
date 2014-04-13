package main

import (
    "fmt"
)

func pong(ch string) {
    fmt.Println(ch)
}

func main() {

    var input string

    go pong("ciccio")
    go pong("bello")

    fmt.Scanln(&input)
}
