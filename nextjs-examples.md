
# GOALS:

Maintainable. Reuse what we can; helps keep codebase simple.
Scalable. It can grow regardless of dev working on it.
Testable. Changes wont break things.


# Example Repos


Next subscription payments:
https://github.com/vercel/nextjs-subscription-payments
https://github.com/strapi/nextjs-corporate-starter/tree/main

This has tables:
https://github.com/vercel/nextjs-planetscale-nextauth-tailwindcss-template

pages router
https://github.com/prisma/fullstack-prisma-nextjs-blog/tree/main


Shared components:
https://github.com/steven-tey/precedent

Great article, different approach. Preparing for "coding at scale".
https://blog.dennisokeeffe.com/blog/2021-12-06-nextjs-enterprise-project-structure

Repo for the article above
https://github.com/okeeffed/nextjs-enterprise-project-structure


## Articles

This one mentions functional components, tests, reusable logic, fetching
https://blogs.perficient.com/2023/04/25/best-practices-for-building-and-sustaining-a-clean-react-next-js-project/

This is a long list; briefly touches on almost everything.
https://www.yourteaminindia.com/blog/react-best-practices

SUMMARY:
There are lots of approaches. Same thing in common.
Small, re-usable.
Testable.
Folder structure varies; multiple "correct" ways.


## Questions to ask?

1. What have you done in the past? What was helpful, what was not?
2. Why was this app built like this in the first place?
3. The goal is to write tests- small unit tests- on most of the code. How can tests be added with this approach?
4. What examples/sources have used this approach in the past?
5. Data fetching. Why stay? Why change? What is better for end user?
   1. fetch
   2. useSwr
   3. async/await
6. Eventually we will need to use the APP router.


Hey I was thinking of some ways to make the most of our call next week. How does this sound?
1. Review goals. Something like "maintainable" or "reusable". Are there any big-things that stand out to you? These will be used for the next step.
2. Discuss concepts. This is high-level. Things like styling, data fetching, folder structure, etc. High-level, things that can be improved.
3. Discuss solutions/implementation. There is more than 1 solution for almost everything. What are the ways we can update styling? Or how can data-fetching be improved? What have you used in the past, and what did you like/not like about it? Do these solutions line up with the goals listed in the beginning?
