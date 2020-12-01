# Query Type

Often called **Object types**
These are things the GQL srver is *expecting*. Other than that, it follows rules of every other type.

## creating queries

1. Create Query Type in the Schema using SDL
2. Add fields to the query type
3. Create resolvers.

# Resolvers
return VALUES on fields.

GraphQL doesnt use HTTP.
Everything in GQL is based on a RESPONSE.
There is only 1 endpoint. The only change is the QUERY that is sent up.

The QUERY determines the **RESOLVERS** that get sent.

You can write RESOLVERS for every FIELD on the type.

To create a SERVER, the DEVELOPER is responsible for creating NODES and how they connect with each other.

AND for creating RESOLVERS for those nodes.

the CLIENT determines how they want to access the SCHEMA.

A RESOLVER must *EXACTLY* match the QUERY
In this case, the *QUERY* `me` matches the resolver `me` :

```
const typeDefs = gql`
    type User {
        email: String!
        avatar: String
        friends: [User]!
    }

    type Query {
        me: User!
    }
`

const resolver = {
    Query: {
        me() {
            return{
            email: 'yoda@masters.com',
            avatar: 'http://yoda.png',
            fields: []
            }
        }
    }
}
```

Resolvers must return the same TYPE as the QUERY as well. And if it is required, it MUST return a value.

