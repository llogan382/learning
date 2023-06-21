# Use hooks

There are drawbacks to using hooks- like the ability to write tests.

The connect API take functional components, wrap in a higher-order component, which means you can separate the concerns easily.

Drawbacks? Wrapping components adds "noise" to dev tools.

it comes down to:

how old is the codebase?

THere are several ways to connect to the react codebase.

Take the components Wrap them in higher-order components that

1. pass in state from store
2. pass in functions that update redux store
