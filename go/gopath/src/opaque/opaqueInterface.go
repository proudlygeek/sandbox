package opaque

import "fmt"

type Opaque interface {     // Public
    GetNumber() int         // Public
    implementsOpaque()      // Private
}

func DoSomethingWithOpaque(o Opaque) string {
    return fmt.Sprintf("Hello opaque #%d", o.GetNumber())
}