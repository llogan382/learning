# What are the types of a React child?

Things to look at:
https://github.com/DefinitelyTyped/DefinitelyTyped/pull/56210
and the course website:
https://fem-react-typescript.vercel.app/Built-in%20helpers%20for%20typing%20children%20in%20React.md

If you want to find out what type something is, create the type, hover over it, and copy the VS code suggessted type.

1. `jsx.element` if you have 1 child.
2. `react.reactNode` works best.
3. `PropsWithChildren`


What id you want Children, and a SStyle prop?

`React.CssProperties`, then spread the style in the rest of the component:

`...styles`


```ts
import React, { PropsWithChildren } from 'react';

const Box = ({ children }: PropsWithChildren) => {
  return (
    <section
      className="m-4"
      style={{ padding: '1em', border: '5px solid purple', ...styles }}
    >
      {children}
    </section>
  );
};
```

Tip: Put the LOGIC outside of the component to make it easier to test. Testing a JS function is way easier than importing a component to test how a component uses a function to update state.

`event.target.valueAsNumber` or `event.target.eventAsDate`
