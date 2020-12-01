# REsolvers

They return VALUES for FIELDS on type in a SCHEMA.

Resolvers depend on incoming client query. FOr example, this is what you will find in your SCHEMA:
```
type Query {
  pets(input: PetsInput): [Pet]!
}
```

And this is what you will find in your RESOLVERS. Notice the word QUERY is the same, so is the `pets`. So the RESOLVER below will take the data from the client, perform a FUNCTION, and return something.
In this case, it will take the INPUT, which is `PetsInput` and return `models.Pet.findMany(input)`. Basically, it will find all of the `pets` that the user submittes as input, either DOG or CAT (not listed here)

```
  Query: {
    pets(_, {input}, {models}) {
      return models.Pet.findMany(input || {})
    },
```

# INPUT TYPES

They are literally like TYPES, except only used in ARGUMENTS.
Below, the `Query` for the input looks like this in the SCHEMA:

```
type Query {
  pets(input: PetsInput): [Pet]!
}
```

For the input, it would take the `PetsInput`, as defined in the RESOLVERS. Notice how `pets` is the same; in this case, a lot of pets would be returned, as indicated by `findMany`:
```
pets(_, {input}, {models}) {
      return models.Pet.findMany(input || {})
    },
```


# EXAMPLE

Here is another way to look at it:

Create a SCHEMA. The DEFINITIONS are the FIELDS in the DB:
```
type Shoe {
    brand: String!
    size: Int!
}
```

Now, create a QUERY for people to find those shoes via ARGUMENTS:
```
type Query {
    me: User!
    shoes(input: ShoesInput): [Shoe]!
}
```
Now, create an INPUT with some FIELDS to filter:
```
input ShoesInput {
    brand: String
    size: Int
}
```

Now, make a RESOLVER. Remember, this will take the QUERY `shoes(input: ShoesInput): [Shoe]!`, look for the input `ShoesInput` and then run a function (called a **resolver**) and return this: *Notice the two items are entered as OBJECTS because this is not connected to a DB*
```
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


# RESOLVERS (review)

If you ever need to COMPUTE your resultes, do it in a RESOLVER.

**HASURA** and **PRISMA** both have rules about how to create resolvers, based on your schema.




[Next page](file:///Users/lukelogan/Local%20Sites/learning/node/SS-graphql/notes/SSGQL8.md)
