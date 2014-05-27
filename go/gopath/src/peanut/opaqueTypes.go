package peanut

type Conn struct {
    address uint32
    port int
}

type MyType struct {
    doNotTouch Conn
    PrettyName string
}