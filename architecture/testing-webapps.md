Here is a good repo for it:
https://github.com/mhevery/guide-to-testable-code/tree/main

# Dev model

The person creating the untestable code shold be the one that "cleans up" the code. Not the QA person. Not another developer. They should suffer the consequences of their actions. 

If no one is responsible, then there will be no growth- just finger pointing. 

Testing should be thought of as part of the process when writing code. Set up the env so you dont have to think about it. 

## Structure code for tetability. 

Testing is not the frosting on the cake. It is the flour within the cake- it needs to be part of the process.

How to write untestable code?

What the code does has nothing to do with how readable it is- it has to do with how many dependencies it uses. 

What can you control? What can you NOT control in your system?
If I can control things, I can test them; if I cannot control them, I cannot test them. 

What is the goal of refactoring? 

How to rewrite for tests? 
JS has functions; call the function and control what it closes over (with closure). 
Make sure you can control the (fake) time.

The more decoupled, the better!
Optimizing for dependency injection. Dep injection is saying I want to control how things are passed in. 
As long as you can control the dependencies, you can make it work. 

What code does is irrelevant to whether it is testable; how it is structured is all that matters.

## How to avoid untestable code. 

What do people say?
You cant take it apart. 
Spaghetti code- it is hard to trace to the source through all the dependencies. 


What are the real issues to test?

- mixing "new" with logic. Some tests on a class would be different than the next time a test would be running- the first set had many things running on it, and the next test has many other things on it. 
- looking for things
- work in contrstructor
- global state (VERY PROBLEMATIC). Taking global user, and using it. When running tests, can you control global state? Probably not. 
- singletons. This is just another form of global state. Inside Unit test, and the cache is different than the next test. 
- static methods. 
- deep inheritance (not in JS)
- too many conditionals. How many ways could a function return something?

Good things:
- Object oriented
- dep injection
- TDD. It forces you to write simple tests. Then, your code will naturally do the right thing. 


## Progression of testing. 

The first place people start is from the User perspective; like playwright. It is slow, and flaky. Like, clicking on a button and waiting for something to happen. 

Best thing to do?
Test the Happy Path. High confidence, high initial coverage. 

Then:
Hard to reproduce failures. Like: Race conditions. It is hard to identify the true error. 

Since it is flaky, break it down into pieces; test the sub systems with external dependencies replaced by simulators. 
Call these functional/Medium tests. 
Like, how do you control the DB?

Step 2: Look at functional tests. It is harder to get coverage now. Each test is more focused. 
This looks at how functions interact. 
It can identify failures quickly. 

As a developer: test what you can control. 

Alll test levels are important. 
Functional tests look at how everything works together- like how a user is created. 

Imagine testing a flashlight: it could be the battery, lightbulb, switch, connectors, or the whole flashlight?

Basically, test it so the information flows through it properly. 

## Guide to testable code.

1. Constructor does Real Work. 
Control the dependencies. Take the values (in a class) and store them. Like, you can `@inject` something into the class in the code, then play with that in the tests. So, the constructor shouldnt do too much: it 
2. Collaborators. Objects are passed in, but never used. Like, when passing in a CLASS, but only using 1 method on the class. Or, for a LOGIN. It takes a lot of info. Why not just make a test for the COOKIE on the login? Basically, injectors in a class can keep the data from becoming coupled. 
This way, every property stays bound to the right test. 
3. Brittle global state or singletons. Global state and singletons make for brittle code
3. Class does too much. Like, dont use the word AND too much- you shouldnt mix too many services. 