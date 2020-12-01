# Complete intro to react


Here are the [course notes](https://btholt.github.io/complete-intro-to-react-v5/)
## Understand the Tools and the problems they are solving.

What is JSX? What does it do?

Create an "APP", which is like a stamp. It is only useful when it is USED (Not when it is created).
Here, we created an app with CreateElement, and it will create a STAMP with an h1 and an object every time it is used.



```
        const App = () => {
            return React.CreateElement(
                "div",
                {},
                React.CreateElement("h1", {}, "Adopt me!")
            );
        };
        const App = () => {
            return React.CreateElement(
                "div",
                {},
                React.CreateElement("h1", {}, "Adopt me!")
            );
        };
```

REACT just takes a component, and uses it. Components can be embedded in other components


what is `React.createElement()`?
It holds all of the ATTRIBUTES of the component.

## How to pass elements into the PET component?

PARCEL is a compiler, and it includes hot-refresh.

## REACT HOOKS

all hooks begin with **USE**

HOOKS never go in loops, or for statements, or conditions.
HOOKS keep track of the order where I create STATE.

## Effects

`useEffect` takes the place of some of the lifecycle methods: componentDidMount, componentWillMount, etc.

You want the page to show the user SOMETHING; The DOM is rendered BEFORE the `useEffect` function runs

With useEffect, you have to declare your dependencies.
Currently, it runs every time it is called.
it should  only run when DOG is selected.

## What is happening?

1. SearchParams is rendered. It sets all the HOOKS. In the file, these are set as CONST
2. It will set the function USE EFFECT
3. It will return the markup, and render it to the DOM.
4. Then, it runs the SCHEDULED EFFECT, a function called `useEffect` in our case. Under it, it has a function setBreeds, and setBreed.
5. When I update LOCATION, it will not run `useEffect`


## Run on Mount, but nothing else?
change this:
```
    useEffect(() => {
        setBreeds([]);
        setBreed("");

        pet.breeds(animal).then(({breeds}) => {
            const breedStrings = breeds.map(({name}) => name);
            setBreeds(breedStrings);
        }, console.error);
    }, [animal, setBreed, setBreeds]);
    ```

    To this (checkout the last line!)
    ```
        useEffect(() => {
        setBreeds([]);
        setBreed("");

        pet.breeds(animal).then(({breeds}) => {
            const breedStrings = breeds.map(({name}) => name);
            setBreeds(breedStrings);
        }, console.error);
    }, []);
```

To run EVERY TIME something updats, remove the `[]` entirely:
```
    }, );
```

## What about component lifecycles in HOOKS?

People think `effects` are easier.
UseEffect and useState are the two hooks that will most commonly be used.

## DEV TOOLS

use this while in dev:
`NODE_ENV=development`

You can make the whole application in STRICT mode. If used, you will get warnings about things that will be deprecated.
Here is the snippet to wrap around your code: `<React.StrictMode></React.StrictMode>`

in console, enter `$r` and it will show in REACT whatever is highlighted in the INSPECTOR


## ASYNC functions.
They return promises. They can wait until something completed, before useing `await` to show what is returned.
