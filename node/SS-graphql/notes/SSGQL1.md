# How to use GRAPHQL in Node.js

[Here is the repo](https://github.com/FrontendMasters/fullstack-graphql) for this course.

## Terms to know:

- Type Definitions
- Resolvers
- Query Definitions
- Mutations
- Composition (this is betters used for backend)
- SCHEMA

## What is GQL?

It is just a SPEC.

## Server side GQL **for the client**

The goal is to **CREATE A GRAPH** and allow the client to query that graph.

We are using APOLLO SERVER.
First thing: TYPED DEFINITIONS. These are based off of shapes/schemas.

Basically, for the backend:
- Type Defintions
- Resolvers
- Query Definitions
- Mutations
- Composition
- Schema


## CLIENT SIDE

- Queries
- Mutations (to modify data, CRUD)
- FRAGMENTS (pieces of shared queries, mutations)

## Where doe GQL fit in?

1. GQL with a connected DB; this is most popular with new projects
2. GQL server as a layer in front of MANY services and connects them all
3. A hybrid where it works with a DB, and 3rd party services.

## NODE GQL tools:

- Servers
  - Apollo Server
  - GQL Yoga (not used here, but very popular)
- Services
  - Amplify (from AWS)
- Tools
  - Prisma
  - Others

## First Step: Create a SCHEMA

Use the Schema Definition Language (SDL) to make the SCHEMA

- Types. They
- Fields- tell the kind of values
- Scalars, built into GQL
- Query, gets data
- Mutation, changes the data
