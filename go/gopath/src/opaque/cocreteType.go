package opaque

type internalBasicType int

// 
// Prevents the interface to be implemented
// *outside* the package, since is lowerCase (thus private).
// 
// This is best suited for API and things we don't
// wanna people to override.
// 
func (m *internalBasicType) implementsOpaque() {}

func (m *internalBasicType) GetNumber() int {
    return int(*m)
}

func NewBasic(number int) Opaque {
    // This is a pointer to an int
    o := internalBasicType(number)
    // Derefence the pointer
    return &o
}