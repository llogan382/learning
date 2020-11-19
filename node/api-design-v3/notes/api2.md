# Middleware

Items that have to run before a request, are called controllers;

Middleware runs between requests and responses, with a GUARANTEED ORDER

Middleware:

- Authentication
- Cors
- It can also respond to a request, but this is not what they are designed for.

# Rest routes with Express

- Can match on regex, a blob, or paramters.
- He recommends EXACT matching and PARAMETER matching.

Create:
app.put

Read:
app.get

Update
app.put('/)


delete:
app.delete

Route ORDER matters. But you have to use MIDDLEWARE to define order of operations. It is functional, and proceeds top to bottom