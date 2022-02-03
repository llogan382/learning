# At this point:

We know the redux api.

Bind action creators. Uses compose.
Compose. Takes functions, and makes functions out of them.
CreateStore. The most important part of the API.

## Now, we apply the items above.

Redux is just Functions and Objects.
As the state grows, things can get complicated.


All actions will flow through EVERY combined reducer.

reducers **only have access to** certain parts of the state. Two reducers cannot access the same piece of state.
