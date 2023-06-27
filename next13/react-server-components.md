# React Server COmponents

There is no such thing as hooks. Because there is no such thing as state- that is part of the client-side rendering cycle.

Server side doesnt keep track of state.

But, they do bring benefits.

Traditionally, the HTML comes in, it takes the JS, and HYDRATES the JS. Everything that comes back needs to be serialized.

Server components say get all data related, then STREAM it to the client; it will show the data as it is completed. Each component will render once the data is completed.

Render everything in Server component, until you need a client component.

Only put `useClient` on the part of the page, or component, that needs it.

## What if I am using a library?

You can wrap them in a `use Client` proxy.
How can we send less JS to the browser?

One way to minimize is to reduce the amount of state used in a component.






