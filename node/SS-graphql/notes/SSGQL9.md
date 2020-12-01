# Quick review before starting:

GQL starts with a **schema**. THe SCHEMA consists of a **type**, which is basically the fields, and a **query**, which is a way to access those fields.

So, SCHEMA = TYPE + QUERY

and a **RESOLVER** is a way to access that data. The RESOLVER will have the same name as the query.

Practice:

1. Create a MUTATION for a new prt, as found in SCHEMA.js. Just do NAME and TYPE. The rest is auto-created
2. input needs to handle args for the mutation
3. create a RESOLVER in resolver file to handle the mutation.
4. If it works, you can go into DB, and should be able to QUERY the data.

[Next page](file:///Users/lukelogan/Local%20Sites/learning/node/SS-graphql/notes/SSGQL10.md)
