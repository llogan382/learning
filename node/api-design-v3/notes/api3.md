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

Mike,

Any updates from David at Motortrend? During our kickoff call, someone mentioned that Motortrend is doing some internal restructuring as well- is the project still greenlighted for them?

Last week I spoke with Eric during office hours just to "check in" as a new employee. He mentioned a few things for people during "bench time" that could be good to work on, but we didn't discuss any specifics.

In the meantime, I have been digging deeper with PHP and learning NODE (per Eric's request) through some online courses with Front End Masters.

Would it be ok to commit to some bench-time projects that Eric had in mind? Is there anything else that would be helpful for this project? What do you think would be best to do in the meantime?

I wanted to reach out directly with questions (instead of the MT channel) so as not to concern Ray on his first day. However, we can go over everything on a team call when we get a chance.

Thanks for all your help on things so far though!



Do you need any help with the public website, or the intranet? I saw your name in the "Internal Projects" section under "Bench Time Ideas".

I just sent a message to Mike asking for an update on the MT project to see if it would make sense to commit to another project- like the website or the intranet. If there is any update, I will pass it on.

Eric also mentioned he was working with Alicia (did I spell that right?) about some other benchtime ideas, and said he would get back to me. That was Monday, and I haven't heard anything so I was going to circle back with him too.

In the meantime, I have been spending time learning Node on Front End Masters (per Eric's suggestion).

Do you have any advice or recommendations? Also, today is Ray's first day, so I am looking forward to connectine with him too.
