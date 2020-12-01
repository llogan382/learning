## More

Schemas always NEEDS A QUERY.

By default, the name of the query is **query**

QUERIES have fields that resolve to VALUES.

Then, write RESOLVERS and crete a SERVER

Resolvers have to be the same as the type definitions- in this case, `Query`. The resolver below is just going to return the Query:

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

    }
}
```

The file at the bottom of this page is the basic of this course.

To use the script at the bottom, run `yarn add apollo-server` then run `yarn add graphql-tag`.

Then, just use NODE to run the file by entering `node demo.js`

Here is a simplified DEMO file with GQL, complete with a server setup:

```
const gql = require('graphql-tag')
const { ApolloServer } = require('apollo-server')

// Take something, and compile it into the GQL server
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
const server = new ApolloServer({
    typeDefs,
    resolver
})


server.listen(4000)
    .then(() => console.log('on port 4000'))
```