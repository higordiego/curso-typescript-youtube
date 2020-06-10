// boolean
let isOpen: boolean 
isOpen = true

// string
let message: string
message = "foo"

// number
let total: number
total = 20.3

// array type - number, boolean, float, hex, binary
let itens: string[]
itens = ["foo", "bar"]

// other type declaration
let totalArray: Array<number>

totalArray = [1,2,3,4]

// tuple
let title: [number, string]

title = [1, "foo"]

// enum
enum colors {
    white = '#fff',
    black = '#000',
}

// any
let coisa
coisa = [1]

// void (vazio)
function logger (): void {
    console.log('void')
}

// null | undefined
type bla = string | undefined


// never
function error(): never {
    throw new Error("Error")
}

// object
let cart: object
cart = {}
