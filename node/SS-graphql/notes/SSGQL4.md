# SCHEMA + RESOLVERS => SERVER

To create a server, we need:
1. A QUERY TYPE with a  field
2. a RESOLVER for that field

Everything in addition to this can OPTIMIZE.
For example. this could be the bare minimum:
```
const typeDefs = gql`
    type User {
        email: String!
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
            }
        }
    }
}
```
Basically, it has nothing to do with the DB, and everything to do with SATISFYNING THE GQL request (which is a GET request)


