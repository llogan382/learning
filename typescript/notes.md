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


