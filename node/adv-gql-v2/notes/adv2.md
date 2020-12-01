# Authenticating

What is AUTHENTICATION vs AUTHORIZATION

**AUTHENTICATION** is who you are
**AUTHORIZATION** is what you can do.

## AUTHORIZATION:
1. Should not be coupled to a resolver
2. Can provide field custom rules
3. Can authorize SOME schema, but not ALL

## AUTHENTICATION
1. Provide the user to resolvers
2. Should noe be coupled to resolvers
3. can protect SOME schema, not all of it
4. Can provide field level protections. SOME things, not all

How to AUTH?

- Outside of GQL (like on the server)
- When creating context object in GQL, like when the server is created.
- Inside the resolvers. They are all encapsulated, are already isolated to do ONE THING in ONE LOCATION

## PROSE AND CONS

- Outside of GQL. CON? It locks down all GQL servers and functions, so nothing can be used.
- This will add complexity of passing AUTH info to GQL.

**CONTEXT OBJ**
- Use it when creating the APOLLO SERVER
- Can acess incoming request to auth
- No extra work to pass to GQL resolvers

**INside the resolvers**
- DO NOT do this
- Business logic is tied up with AUTH logic
- It is easiest to implement
- The hardest to reuse.

## REAL-time with Graph QL

- **Subscriptions**. A well-supported method that can notify clients of events
- **Live Queries** Client side implementation to notify users when data changes

**Subscriptions** are part of GQL spec. They are EVENT DRIVEN.

**Live Queries** Do not have a ton of support yet. It is very experimental. It  is more concerned about data observation (rather than EVENT driven).

Both of these items have flexible transports and protocols, like web sockets.
Both have predicatable responses. It will not break your server-will only respond with what you ask for. This is an advantage over using something like firebase-outside of GQL- where the data could be different than what GQL expects.

## JUST USE SUBSCRIPTIONS

**WHY?** Like doing a POLL, or a CHAT APP, where latency is important.
Also, the initial STATE is large, but the changes are small.
Live queries just arent ready yet.


## Adding subscriptions

1. Subscriptions must be added to your schema like queries and mutations
2. Setup protocol server side
3. Create subscription resolvers for each field it applies to
4. add any needed authencation and context
5. Cleint side setup.