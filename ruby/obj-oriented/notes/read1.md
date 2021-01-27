# Overview
Objects OR classes, methods

An object is a collection of data and methods.

Methods return the object's data, or manipulate it

A String object has methods to get and set its state
 The syntax is like this: `object.method(arguments)`


**Even classes are objects**

Class names must start with an uppercase letter.

Camelcase. BookCollection
To instantiate a class, use `BookCollection.new`

the `@` is an **instance variable**
Each instance of a class will have its own instance of the variable.
**INSTANCE VARIABLES** are not visible by default.
**INSTANCE MTHODS** are available by default

In this first example, *VARIABLES* are set,a nd cannot be accessed:

## How to access variables?

you must write a method that returns the variable if you want to use it

### STATE (or INITIALIZE)

Objects need an initial state.
We want to create an INSTANCE and pass in ARGS using **INITIALIZE*
Inside the class, put this:
```
    def initialize(title:, author:, pub_year:)
        @title = title
        @author = author
        @pub_year = pub_year
    end
```

## Accessors
Writing all the args for a class can be a pain if there are too many of them, so you can use `attr_accessor` to provide read and write access

What if you only want READ access to certain args of the class?

Here is an example. Notice how a method using `self` has to be added in order to access local variables within a method


## SYNTAX
the colon BEFORE applies to ATTRIBUTE ACCESSORS of a new class
The colon AFTER applies to named args passed into the class