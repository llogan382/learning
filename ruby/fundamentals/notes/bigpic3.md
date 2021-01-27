# Unlocking Ruby's hidden magic

## Design time


Design Time | Compilation | Runtime
------------ | ------------- | ------------
Write the code. Define classes and methods. They cannot be changed |  | Execute the code. It can create new OBJECTS and METHODS if needed.



Just like all Objects are CLASSES, you can create a new class and define new methods on it.

like, a `String` has certain methods. You can create custom methods on a STRING.

## Metaprogramming

RUBY uses this.
You can create methods that are generated at runtime. So, your CODE creates CODE.

More specifically, your code at DESIGN TIME creates new methods that can be executed at RUNTIME, like was illustrated in the movie DB example.

## Domain specific landuage (DSL's)




...flexible syntax | Metaprogramming
------------ | -------------
Bend the syntax to look like other languages | Pack some interesting tricks into a Ruby program

## Too much power?

You can change the default classes. Like, changing an `Integer` class with method `"+"` to  `"plus"`.
So, defaults can be edited, and that can create dangerous issues.
