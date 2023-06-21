# hooks

The order they are called is important. Never put them in a loop.

## What if you have state you dont want to update with a render?

1. You can put it outside of the component
2. refs. `useRef` is a hook for that.


## How to set state based on another piece of state?


## Use Effect
always clean up, to prevent a memory leak

## Use ref. It lives outside the normal rendering method.


## UseMemo
Only run a function if something changes. ONLY use it if it is expensive to change the function (like the fibonnacci)

## UseCallback 

Very similar to usememo. 