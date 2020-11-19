# Router and SUB ROUTES

- Express allows EXACT, REGEX, GLOB, and PARAMTER matching
- supports HTTP verbs
- ROUTES match the order they were defined (top to bottom)
- For abstraction, you can create SUB ROUTERS

SUB ROUTES are like a branch of a tree.
So, you can put everything in different folders.

ROUTERS cant listen on ports

use ROUTER (instead of GET) so you dont have to put everything together.

Like, if it had a different AUTH. Use a different ROUTER.
This will take some organization of my code to ensure no routes are duplicated

CRUD seems cool, but all ROUTES are the same. With express, you can do this:

```
    router.route('/cat')
.get()
.post()

router.router('/cat/:id')
.get()
.put()
.delete()
```

