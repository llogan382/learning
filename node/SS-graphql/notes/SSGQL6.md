# Arguments

They allow CLIENTS to pass VARIABLES along with QUERIES that can be used in RESOLVERS to get data.
They MUST be defined in your schema.

EVERYTHING in GQL has to go through the SCHEMA.

There is nothing in the RESOLVERS that the schema didnt already approve.

You can add ARGUMENTS to any field.

Arguments have to be SCALARs or INPUT TYPES

Below, both PETS and PET have arguements:
```
type Query {
  user: User!
  pets(input: PetsInput): [Pet]!
  pet(id: ID!): Pet!
}
```

# INPUT TYPES

They are just like types, but aruments

They must re


[Next page](file:///Users/lukelogan/Local%20Sites/learning/node/SS-graphql/notes/SSGQL7.md)
