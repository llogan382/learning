Workspaces are new; they can run multiple modules. 

Data types go after identifier. 

Variables hav `nil` by default. 

Constants can only be bool, string, or numbers


You can create variable with initialization. 

Variable initialization shortcut:

`otherTxt := "Bye!"`
This only works within functions. 

The linter is pretty intense, and may trigger errors immediately. 


Built in data types:
- tring
- integer values: int, int8, int16...uint, uint8...uint64
- floating point: float32, float 64
- bool: --, !=, <, >. The same as JS. 
- also POINTERS, like C++

For a GO file: 

Define name at the top

You can use the same name of a package in multiple files. 

The code sees contents, not files. 

the `main` package is used in every go project. 

there is no "global". just "package". 

`println` creates a new line. 

`fmt` format. 
You can import it. 

Does a function get exported? Is it public?
If its uppercase, PUBLIC. 
If not, it is camelCase, and private. 

Create a package that is in the name of the folder. 
In the main file (the parent), import the parent project name, and add the folder. 
`import "mywebsite.com/go/io/data"` if it is in the `data` directory. 

Variables and lamda functions can be:
Block scoped,
Function Scoped
Block Scoped. 

## Collections

Arrays: fixed length. [5]int
Slices: similar to a dynamic length, but they are chunks of arrays. 

Maps: They are key/value dictionaries. 
`map[keyType]valueType`
Generics are in 1.18

`len(Countries)` will get you the length of the array. 

## Functions

- receives args
- have default values
- last arg can be variable length
- Also: Functions can return multiple values at once.
Also , can return labeled values
They always receive arguments by value (Not by reference)
The Syntax is very much like TS. 
Or, you can tell the TYPES of values the function returns. 

an underscore can be used as a placeholder when you dont have a value in a function. 

Why use it? Maybe you are executing something where the type is required, but you only want to use 1 of the 2 params in the function. 

What if you want to pass a POINTER, instead of a value? 
Like, the age++ each time you call a function?
add the `*` before the type on the funciton. 

```go
func birthday(age *int){
    *age++
}
```

## Panic

There is no try catch; but there is a panic- it closes the app with a message. It is not error management. 

`defer` will execute at the end of the function call. 
Also, run something with a `defer` before a panic- so it will run before the program close. 

## Control Structures

- if else
- switch
- for

There is no while or do while. 

## Types

- new types
- alias


## MEthods

Like, if the function needs to be used in another function- it can be defined as a type

It makes it a little easier to pass variables when the function is being used- you need to put the args in the function definition. 

```go
func (miles distance) ToKm() distanceKm {
    return distanceKm(1.609 * miles)
}
```

Then, you can use it like this>

```go
func test() {
    d.ToKm()
    }
```

## Structures

They are the replacement of a class. 
If you merge a couple properties under one name. 
They have a constructure. 
You can add methods. 

```go
type User struct {
    id int
    name string
}

func main(){
    var u1 User
    u1 = User { id: 1, name: "Frontend Masters" }
}
```

If you want a TYPE to be used elsewhere, they need to be Title Case. Otherwise, it throws an error when you try and use it. 


## Factories

Keyword: 

`new` 
There are no STATIC METHODS
You create a factory function. 
So, for the function `Instructor`, change it to `NewInstructor`

## Web dev

- Use web assembly
- transpile to JS
- web server. Serve files and template
- create web services, like RESTFUL APIs, or microservices. 

