package main

import (
    "fmt"
)

type Awesome interface {
    isAwesome() bool
}

type MyType struct {
    howAwesome int
}

func (m *MyType) isAwesome() bool {
    return m.howAwesome > 0
}

func PrintItOut(a Awesome) {
    if a.isAwesome() {
        fmt.Printf("%#v is awesome\n", a)
    } else {
        fmt.Printf("%#v is not awesome\n", a)
    }
}

func main() {
    PrintItOut(&MyType{0})
    PrintItOut(&MyType{10})
}