# What is redux?

> Notes from the [Frontend Masters Course: Redux fundamentals](https://frontendmasters.com/courses/redux-fundamentals/)

The redux library.
Redux can be used in something besides REACT.

Why use redux? Why not use the built in `useReducer`?
Redux has middleware built in.
Momoization.
It avoids re-rendering, if possible.

Difference between REDUCER and USECONTEXT?

USEREDUCER and REDUX USES the context API to give your component access to the datastore.

## Stores and Reducers

`createStore` Takes two objects: The state of the world, and something that happened.
It returns: the new STATE of the world.

## Dispatch

Actions: have 1 requirement: have a TYPE.
Could also have a payload, to make the action a little more versatile.

## What if the action needs to change?

The action is a function, and as the app scales, the action may need to change.

MOST OF REDUX IS JUST JAVASCRIPT.


HOW TO GET INITIAL STATE?

`const reducer = (state = initialState, action)`


## Deeply nested object.

How to update them?

Where I left off: <https://frontendmasters.com/courses/redux-fundamentals/subscribe-binding-action-creators/>
or, 38:24
