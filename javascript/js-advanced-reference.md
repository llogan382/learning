# Classes in JS

At its base, it is an object. You can create that object in JS:
```js
function userCreator (name, score){
  const newUser = Object.create(userFunctionStore);
  newUser.name = name;
  newUser.score = score;
  return newUser;
}

const userFunctionStore = {
  increment: function(){ this.score++; },
  login: function(){ console.log("You're loggedin"); }
}

const user1 = userCreator("Will", 3);
const user2 = userCreator("Tim", 5);
user1.increment();
```

What is going on here? We want to combine all the functionality in one place, so JS doesnt have to make copies each time we use the function. 

`Object.create` will create an object. 

In order to find a method on the object, JS will see if it is present on the Object itself; if not, it will look up the `prototype chain` to see if it is there, and then execute it.

`new` does 3 things:
1. Create object for us. 
2. Returns the new object for us. 
3. Points the `[[Prototype]]` to the constructor, if it exists. If not, it stays as a plain object with `Object.prototype`
4. Executes the constructor for us, and binds it to `this`




`this` has everything in JS stored on it. It is the Global Window. 

When using `this` in a function, it will refer to the item to the left of the dot where it was called. 

`user.changeName()`

the `changeName()` will refer to `user` 

## Call Stack
JS is single threaded- will execute line by line. 
When a function is returned, it is removed from the call stack. 

As you keep adding functions, it is added to the call stack. 

## Closure. 

Every time you run a function, it is removed from memory, and the data cannot be referenced again. 

Take a function, and return another function. 

Let's look at this code:
```js
function createFunction(){
  function multiplyBy2(num){
    return num*2;
  }
  return multiplyBy2;
}

const generatedFunc = createFunction();
const result = generatedFunc(3);
```
when running `createFunction()`, it simply returns the `multiplyBy2` function. It simply gets returned, and there is no more memory or reference to `multiplyBy2` function any more. The name of the function, `multiplyBy2`, is not saved in memory, but the function is saved. 

Even though it looks awkward when we read it, there is no reference between generatedFunc and createFunction. 
Invoking `createdFunction()` simply returns the inner function, `multiplyBy2`. 

Under the hood, if you look at it in the browsers console, you will see the `[[scope]]` hidden property. This is created when you run the function, and it looks at its local context, to access the value of the counter. 

## Terms
Persistant data. 
It references: Things in SCOPE.

Scope. Scope is what data is available to anything at any given moment. 

JS is a STATIC or LEXICALLY scoped language- so all the memory from the function, is saved in global, and can be reference from the function that calls it. 

"Closure" is a bit ambiguous. 

What if you have multiple instances of closure?
Each closure instance will re-initiate the internal values, with completely separate execution contexts, with brand new local memory. 
Every time you instantiate a new instance of the function, it will reset the local memory inside of it. 

Closure can help with memoizing values- so large, expensive functions dont have to be re-calculated. 

Iterators and generators: what if you could run through a function, and it remembers the last values? 

The module pattern- preserves state for the life of an application without polluting the global namespace. 

All of the "memory" associated with a variable in a function within a function- this is called the "closure"

## Iterator

Any time there is a "return next element" we call it an iterator. 
Iterators are returned as a "flow" of elements.
For loops- show the element of the item itself. 

## Async JS

- Promises
- async
- event loop
- microtask queue

Once a function runs, once the line of code is executed, it must be completed before proceeding. 

JS has 3 main parts:
- thread of execution
- memory, variable environment
- call stack

New things
- web browser
- promises
- event loop


## Call Stack

When you run a function in JS, it "Calls" it. It runs that function in a stack- and always runs the item on the top of the stack. "push" and "pop"

## Higher Order Functions

When you pass a function in to another function as a parameter, everywhere that parameter for the function is referenced, it is basically replaced wiht the value of the function it references. 