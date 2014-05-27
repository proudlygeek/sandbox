package main

import (
    "fmt"
    "opaque"
)

func main() {
    o := opaque.NewBasic(15)
    s := opaque.DoSomethingWithOpaque(o)
    fmt.Println("Doing something with an opaque i get:", s)
}