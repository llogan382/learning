# What are backend system engineering?

Talk about WHAT they are
WHEN to use them 
and How to create them. 

Show the evolution of a backend system. 

WHat is it?
The defining of modularity, interfaces, and data flow in a system to satisfy requirements. 

Is it performant? How many data jumps are there?
You should feel comfortable walking into a room, and talk about what you are going ot do. 

Architecture designs also help teams be able to communicate with one another. 
If you have systems in place, you can move faster. 
Then, you can build and automate quicker. 

Tools? Lucidchart.com is a good tool for creating flow charts. 

A flow chart helps to prevent code re-use. If the services overlap (Like requests), combine them. 

How to keep architecture up to date? 
It has to be the culture of the organization. 

Instead of "just build", docs need to be created- it helps peoiple trust the company and the culture. 
Go back, update and delete the docs- maybe change up the way docs are maintained. 

Designs also help play a role in ensuring the final product does what it is supposed to do. 

Basically, it save developer hours. It saves money. 

## Key principles. 

What are they?

1. Modularity
2. Scalability
3. Robustness
4. Flexibility

Modularity. Each component should have a specific task. Maybe there is only one component? Cool- it does the one thing it is supposed to do. 
If there are good naming conventions- it makes things easier to understand what they do. 

Scalability. It should handle growth of traffic? Do all parts of the system get the same amount of traffic? Like, are there a lot of API calls for every action? If so, it may have some bottlenecks. 

Robustness. It should be able to process errors- have helpful error codes. It is hard to scale if the errors cannot help guide you. Can the code process all possible requests? Showing better errors is really important for backend. It should have good logging. Sometimes a helpful, unique error code can describe specific errors. But, only log what you need (to save on your cloud bill)

Flexibility. It is designed to accomodate future features. This is hard: How can you keep implementing change quickly? 

## Challenges

- complexity
- adaptability
- security
- technology
- resources
- stakeholders. 

Complexity: this is what people deal with the most. Think about it while you are building it- the more spread out, the more complex. Is it decoupled? Can it be tested? Can it be communicated?
How many people will be needed to manage the system (if it is too many people, it is probably too complex). The more complexity you have, the more you own (and need to maintain). If a system is too complex, it may need to be simplified for each team: can it be extracted in specific ways? Complexity is needed sometimes. 
What parts of a system need to be independent? Can a WEBSOCKET do what you need (like, keeping the connection open for messaging?). Dont make it overly complicated- the best thing to do is to save your time. What is your budget? 
How valuable is the time to contribute towards complexity? So, these services can be managed/owned, or paid for. 

ADAPTABILITY. Can things respond to changing business needs? Like, each new thing, is it an entirely new creation? Do not overload the developers. like, consistent:
- API calls
- Queues
- Crons
Make it less about the tech, more about the problem the tech is trying to solve. Like, a tier:
- Frontend
- backend 
- (gateways into our systems, not backends)
- Workers
So if you need to make a change, you only have to change one thing. 
If you have lots of lamdas, for example, make sure they are being used in a similar way. 

SECURITY. Are there laws to follow? Secops? Even things like rotated keys could help. "Consumer secrets" that are automated. If your service becomes public by accident, this can help. 

## New tech: When to use it?

If you dont know it, you can't support it. Do you have the resources for the systems development and maintenance? Engineering time, manager time, company $$$> 

How many engineering hours go into something? This call comes down to resource management. 

STAKEHOLDERS ALIGNMENT. Did you get buy in? 
Can you get buy in for any big changes- where is your documentation to support your use case for bigger changes? It takes a lot of preparation- put in the work for it. 

When to use open source for things like auth?
Be able to be confident in what can give you the most value. Open source is great, but business is business. Paying the engineers is usually more expensive than using the open source systems already available. 

Like, you can use a system to fix a problem now, but it will not meet future needs, should you still do it? 

Documentation can be lots of different things- basically, learn to be a salesman. Different people want to see different types of documentation

## When to use BE architecture designs?

In summary: it can just be a gut feeling. 

- When it is GREENFIELD. It is not used anywhere. You dont have to ask "Why should we use this?". It may be easy to implement when it doent touch anything else. If you have a fresh mind, but not the context, you can look bad. 
- Scaling an existing system. Designs can identify bottlenecks and areas for improvement. Maybe something is working great, it just needs to be tweaked in a small area? Like, when a user signs up, send out an email. 
- when is there a need for improved efficiency and productivity. It can help reduce redundancy and facilitating code reuse. For example, what if users had UUIDs- how do they scale and be efficient for many, many lookups? Or, if  a developer makes a change, they have to update in multiple places. Each developer should just be focused on one service, not spread out. 
- When there is a need for better communication among team members- system architecture helps with language and reference. 

FACTORING. 
The functionality, performance, security, and scalability needs of the project. What are you trying to solve, and who are you trying to solve it for? Answer these, and you can probably create architectural designs quicker. 
The experience and skill set of the dev team can influence the choice of the system design. Team expertise is crucial.
BUDGET. Certain designs may require more resources. Even open source is a resource, and it has costs. How can we allocate to maximize our budget, and how much time we are putting into it?

TIME CONSTRAINTS. Some designs take longer to implement than others. 
Project size and complexity. Larger and more complex projects may benefit from certain system designs. If you can avoid complexity and get to market faster, that might be the most important factor. 
Maintenance. The ease of updating the system can influence the choice of design. 
TECHNOLOGICAL CHOICES. Trends can help influence designs- dont USE all of the current trends, but be aware of them. Like, event busses- they are cool, but do you know how to use them?

USER FEEDBACK. What are the user experiences like? What users are dealing with, is likely a response to architecture. 

What about Domain Driven Designs? You need to know the systems. 
It is important to know the context of why decisions were made in the beginning, before moving away from those initial decisions. It is good to have a principal to help decide why you are doing what you are doing. It is the responsibility of the manager to help decide when to fill in the knowledge gap, and if it is necessary to bring in a principal to help guide the conversation. 

When does something need to be changed? Look for proof of WHY it needs to be changed. Can it be measured? 

## How to implement backend architecture?

Just 3 things:

1. Research. 
2. Implement. 
3. Iterate. 


Is the goal to improve the system entirely, or make small changes when needed?
After getting requirements, write the docs. They are used for understanding solutions or ideas which keep the project on path. 

Provide detailed descriptions of the explored systems- modules, interface, etc. 
Technical models- take them, so you dont have to repeat them over and over again. It can be used to keep so you dont have to repeat yourself over and over. 

DOn't work on an architecture diagram by yourself- also when you present it, it will have more support. 

- choose the design
- define arhcitecture
- develop it
- test it
- deploy it
- maintain it

Looking at time constraints, team experience, etc: the answer should be obvious for what to use. It can take anywhere between a week and a month. 

Then, implement it. 

This is where you put pen to paper, and move things around. 

## Development

Once the diagram is created, THEN you do the development. You should be able to pass this info off to someone else, and they wont have to ask almost any questions at all. The tech that is shown

This is the job of the principle engineer. Should the devs be a part of the conversation? 
The design should not include any new technology. 
THe principle does the thinking, the devs should do the implementation; but there should be some conversations between the devs and principle. 

You dont want to get stuck in conversations that just go around and around. Like, is it a tech conversation, or a design conversation?.

Then implement and test the architecture. 

Once architecture passes all tests (like, load testing), deploy it in a controlable production environment.


## Maintenance

Sometimes, you dont know how to maintain it until you have users. Like, user data could only be accurate in PROD. 
An example: The use a copy of PROD for staging, dev, etc. in order to test it. 

Test to make sure it works; maintain so that it works all the time. 
Involve all stakeholders from the beginning to ensure their needs and expectations are met. 

It is great to go out and ask what other people think- this also gets buy in. This happens in the research phase, like SLAs. 
Use a modular approach- so that components could be updated. It is an art to keep it abstracted. It is manageable and understandable? 
Plan for scalability. This shouldnt be in planning, but SHOULD be in the testing phase. 
How to consider scalability in planning? Like, are these real concerns? 

Like, what is the time horizon for specific scaling issues?

Like, what are costs- what is the tradeoff- between paying for services (like serverless) versus maintaining the things by yourself?
If it needs a websocket, it cant be serverless- the connection has to be open. Like, make sure you can change from one system to another if you need to. 

Can you deal with todays problems, and will you be able to handle tomorrows problems? Plan for it now. 


## Serverless

Just run my code, cloud provider: you take care of the rest. 
It can mean many different things. 

DEFINITION: An application that siginificantly depends on third party services (Bakcend as a service) or on custom code thats run in ephemeral containers (Function as a service FAAS)

Firebase and Supabase is a BASS. Like, these also include databases. Then, you just have to pay for the requests. 

Functions as a service: they should always return the same thing. 

Either uses a provider, OR so that it has an isolated use case that is performance. It is about cost savings, and decoupling. 

Just run code, but scaling is up to the service on the cloud. Dont worry about uptime, scalability

An example:
Frontend- API Gateway- Add to cart/Process order - Database. 

A lot of the design decisions should be based on getting the best soltions for the money. What can you save money on? 

What else is serverless? FrontendMasters. It is on an S3 bucket. A flat file, serverless architecture. Deploy to S3- a serverless FE. 

What about the BE? It is a gateway. Couple all the endpoints to an API gateway, which is also serverless. 
API gateway just exposes endpoints, and only fire when you hit that endpoint.
This means there are a lot of endpoints. 
But, if there is a large influx of users, it scales perfectly. It scales easily- and erverless helps this. 
Like, processing an order will not take long for the users. It sclaes quickly for users to have a great experience. 
Also, the DB is serverless. DynamoDB is a serverless DB. 
You only spend what you need by the requests. Not paying for uptime. 

Basically- it is anything that is a service- as long as you arent dealing with the deployment or maintenance. 

How to iterate on it? 
You need to connect to the internet for it; it cannot be done locally. 
A good thing is that there is separation of concerns. 

What is the cost difference?
v1: $350.
v2: $50-75

## Pros and cons

Pros:
Server is always up. 
Server always has enough power. 
Cost based usage. No EC2 instances. Like, dont have to pay for a dev environment. 
Automated scaling- but this is expensive if it goes beyond what it was expecting.

Also, lamdaas calling lamdas;
Can create billing alerts, etc. 

CONS:
Architecture gets more expensive for ling-term applications. If the amount of dollars per minute for Ec2 is cheaper to process. 
Testing is difficult. How to test it? Like, do you need a VPN? There are public and private gateways. 

Troubleshooting and debugging is more complex. You dont know how something is implemented. There can be outages- if a system you use is down, you go down. 

### Use cases of serverless

Real time file processing- they have integrations with these services. 
Like, queues between services. 
Real time streams- kinesis does real time stream analytics. It can analyze it. 
ETL: data manipulation. Take the data, transform it, and do something. Like, compressing a picture then storing it in a bucket. 
Websites can be served from an S3 directly. If all you do is servie a file for your FE, just use an S3 bucket. 

## Dsitributed Architectures

Put things in the cloud, and hope they work together. 

Service Oriented Architecture. 
A lot of companies are still using pubsubs or event busses. 

There are 2 kinds:
1. Generic
2. Microservices. 

Definition: A method of developing software systems that are loosely coupled and independently deployable smaller services, which run in their own processes. 

Generic services are different than microservices. 
Distributed (service oriented) definition: it allows for continuous delivery and deployment of large, complex apps. It anhances an orgs capability to innovate and reduce the time to maket for new features. 

If you have worked to solve many problems, this work is already done. 

## Generic services

A component of an app that provides specific functionality of the platform. It could be part of a monolithic app, or it could be a part of a distributed system where it runs in a separate process on a separate machine. 

Basically:

Users- FE - BE - DB. 

Benefits: They can scale separately. Better fault tolerances. Keep the teams different. The teams can work together- like maintaining an API endpoint for the FE to access. 

DDOS: it cant access the DB. There is a bit more security. 

It is good to make sure FE doesnt impact BE. 



Key Responsibilities:
Design and implement scalable backend services using NodeJS, TypeScript, PostgreSQL, and Google Cloud.

Develop responsive and dynamic frontend interfaces using React, SCSS, and TypeScript.

Lead architectural decisions and guide the technical direction of the platform.

Implement unit and integration tests using Vitest to ensure code reliability.

Collaborate with the founding team to shape product vision, gather technical requirements, and develop innovative solutions for users.

Work in an agile environment to deliver fast, high-quality iterations.

Must-Have Skills and Experience:
Proficient in NodeJS, TypeScript, React, SCSS, and PostgreSQL.

Experience with serverless architectures (Google Cloud, AWS, Azure).

Expertise in unit testing.

Strong understanding of best engineering practices, including code reviews, CI/CD, and automated testing.

Experience working in a startup or similar-sized organization.

Bonus Skills:
Experience integrating Stripe or Twilio.

Familiarity with Google Cloud Tasks, Kafka, or other messaging/queuing systems.

Understanding of Langchain, Langraph, or Llamaindex.

General understanding of the real estate or prop-tech industry.

GRPC- using GO, it helps with distributed services for backends. Go is great- has a lot of good tooling for safe, microservices. All you have to do is update the service, and it gets pulled in automatically to the new systems. 

The goal of microservices is to minimize friction between teams. 

It is hard, because it is hard to structure data like this: like connecting payments with users. In that case, create an INVOICES DB. 

It is all about modularity. 

How to automate, deploy, and test these (distributed) systems. The architecture should be the same across many teams. 
Automation, and scaling should be built properly. Devops is for that. 

Pros: Deploy systems independently. This can help deploy things properly, and automatically. Kubernetes can help. 