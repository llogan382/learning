## Ts things to study:

- function overloads
- generics
- Classes in TS
- awaited
- implements. Used in classes to check if a class satisfies a particular interface
- public, private, protected: private only visible to subclasses, protected is not even visible to subclasses
- decorators. There are class decorators, method decorators, accessor decorators, property decorators, and parameter decorators


# Records.

Where you want to extend an object from the way the type was initialized.

Allows you to define SOME types, without ALL.

Generic w TWO params:

1. Possible values for KEYS of object: (string, iterator, number)
2. Possible Types: String, bool. number, function:



like this:

```
let x: Record<string, string | number> = {
    name: "Bruce Wayne"
    age: 53
}
```


Problem: An OBJECT passed in;
Object has 2 arrays passed in;
Returns an object w key, values;


DECORATORS.

In a class, if you want to use a function declared outside of the class, it is used as a DECORATOR. Simply use the `@functionName` syntax in the class, like this:
```ts
function first() {
  console.log("first(): factory evaluated");
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    console.log("first(): called");
  };
}
 
function second() {
  console.log("second(): factory evaluated");
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    console.log("second(): called");
  };
}
 
class ExampleClass {
  @first()
  @second()
  method() {}
}
```