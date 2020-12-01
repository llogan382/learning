
# Mutations

Before beginning, check out these resources:

https://www.prisma.io/blog/graphql-server-basics-the-schema-ac5e2950214e

https://www.howtographql.com/basics/2-core-concepts/

What are **MUTATIONS**?

a TYPE on a SCHEMA that defines operations for the CLIENT to MUTATE the data (Create, update, delete);

How to mutate?

 1. Define the TYPE on SCHEMA
 2. Add fields for the MUTATION type
 3. add ARGUMANTS for mutation fields.
 4. Create resolvers in the MUTATION fields.




Here is the exampe, building on our previous code with SHOES:
```
type Shoe {
    brand: String!
    size: Int!
}

type Query {
    me: User!
    shoes(input: ShoesInput): [Shoe]!
}

input NewShoeInput{
    brand: String!
    size: Int!
}

type Mutation {
    newShoe(input: NewShoeInput!): Shoe!
}

input ShoesInput {
    brand: String
    size: Int
}
const resolvers = {
  Query: {
    shoes(_, {input}){
      return [
          {brand: 'nike', size: 12},
          {brand: 'adiddas', size: 14}
      ].filter(shoe => shoe.brand === input.brand)
  }
}
```
Here is the MUTATION part to pay attention to from the code above. First, a MUTATION is created, called **MUTATION**.
This MUTATION will create a new shoe, and it requires an **INPUT** called `NewShoeInput!` which is a required field that will return a `Shoe!`.


So, an INPUT had to be created called `NewShoeInput`; This will be almost the same Type as `ShoeInput`, except in this case, the fields are required.


```
input NewShoeInput{
    brand: String!
    size: Int!
}

type Mutation {
    newShoe(input: NewShoeInput!): Shoe!
}
```

Then, the resolver has to be created for the new **MUTATION**.


```
Mutation: {
    newShoe(_, {input}){
        return input
    }
}
```

## What is the difference betweena  MUTATATION and a QUERY?

They are treated differently by GQL. For mutations, you have to use the keyword `mutation` and for queries, you have to use `query`. You cannot access a mutation using the **QUERY** keyword.

### If you are MUTATING something, what does it return? ###

Best practice is to return what you mutate. Client Side caching needs to know if things get updated.




[Next page](file:///Users/lukelogan/Local%20Sites/learning/node/SS-graphql/notes/SSGQL8.md)






[Next page](file:///Users/lukelogan/Local%20Sites/learning/node/SS-graphql/notes/SSGQL9.md)
