package main

import (
    "fmt"
    "peanut"
)

func main() {
    stuff := &peanut.MyType{}

    stuff.PrettyName = "Ciao bello"

    fmt.Printf("%#v\n", stuff) 
}