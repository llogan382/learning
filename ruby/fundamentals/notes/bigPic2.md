# Summary of day 1:
1. Ruby is a scripting language
2. Gives you multiple ways to do the same thing.
3. Ruby is expressive.


# What is next?

Ruby is an OOP language.
Build the program using OBJECTS.
Objects are like pieces of data, only smarter.

Objects have **METHODS**
They also come from a **CLASS**
Each class is like a blueprint, and each **OBJECT** is like a building.

Functions inside a **CLASS** are called **METHODS**

`@liters` is a **FIELD** in the **CLASS**, or a piece of data inside the object.


the `#` used below is like a string literal, and the `@liters` value that is evaluated is displayed in the string:

` return "#{@liters} liters`

The class is **INITIALIZED** like this:
```
  def initialize()
```

These are the steps to enter in the terminal:

1. `require "./dispenser.rb"`
2. `Dispenser.new`
3. `office_dispenser.dispense()`


## EVERYTHING IS AN OBJECT

Using the word PURE, becuase as developers, we dont like surprises.

How consistent is RUBY in making everything an **OBJECT**?

Arrays are objects that have methods.
`array.size` will tell you the size of the array.

*Brackets on a method are optional*

A class is a method.
`puts` is a method

Even if you don't see an object, there is an IMPLICIT method.

even the word `require` is a method.
the number 2 is a class
Show all of the mthods on an object ` 5.methods`

Ruby is one of the most OBJECT ORIENTED LANGUAGES widely used today.


## Ruby tries not to surprise you
It is mostly OO, but has some functionaly features.
Most operations are methods.
RUBY tries to avoid surprises