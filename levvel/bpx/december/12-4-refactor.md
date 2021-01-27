# Refactor Meeting

# Calendar description:

Description:Let's look over the code refactor that Manesh and Bhargav have created and do in learning/design review. Please come prepared gentlemen. Maybe I should play the role of Paul during the session to help prepare you :-)  We need to have our design patterns solid before we start repeating it!

People:
James Boone
Bhargav Dasari
luke.logan@levvel.io
Mason Packard
Christopher Rigoni II
Manesh Kommidi

Started Recording:

Bhargav shared his code with Jim

Started recording again.
Started recording to DOCUMENTS

Endpoints will change.
Looking at `bpx_config.yml` from Bhargav's file.
Some of the variables will change.

Every service will have a unique namespace.
Endpoint's will be different
We will have to have them as a per-service.
Global variables
Per Service variables.
We need to load these in the CONFIG for each service.

Header fields are DYNAMIC- those are entered by Payrailz.

Manesh: We need info from Payrailz for the environments they are using. There is some inconsistency. (environments like Staging, dev, etc)

Jim: Write down the items we need to get from Payrailz, then ask how they are going to get those to us.

Mason: We have a test URL, and a BPX ID.

Manesh: we need the different variables that can be used for each environemtn.

Mashon: Shares his screen, with this doc:
https://drive.google.com/drive/folders/1O8L-rvv4NGO4ZFRRLor-qrHppJSUPnuc

We are missing the CFI_ID. We got that last night.
We will need to pass that in in the gem.
He is on p. 41.
The goal is to connect to this URL with all the certs.
We are ttrying to register a customer, and the response should be a customer number.

Jim: We can serve constants PER ENVIRONMENT, and then just concatenate them for the request.

Looking at `bpx_config.yml` file on screen.

HeaderIfields are in the spreadsheet; all those fields are in Masons spreadsheet. Lines 1-7 of the `bpx_config` file are going to be program specific.
(like wsdl, endpoint, namespace, etc)

Manech: We need to specify those gems in our gem file.

Jim: We need to ask PAYRAILS what their BPX customer ID is.

Client is saying "We can inject the info"
Jim: How does their data get implemented?
Jim: So we can make a class level constant?

Manesh: We will bundle in application gem file. They will send some secret parameters.
We will not be putting info into the gem.
They will pass the parameters we need.
Once it is working, we write a ruby script, and will share how we are consuming their data.

Jim: We can send them a good way that we will need the info.

Bhargave: Looking at `consumer_maint_service.rb` file.

When you load it, it aoutoloads

Jim: So when they load the gem, all the items are loaded> They dont need to be re-loaded every time?

Mason: Mastercard should have written what their stan
Payrailz is paying us to write a standard that MC hasnt built.

We know how services work and interact. We just need to figure out WHERE IT IS POINTED.

Jim: Can it stay in memory? Does it get cached? No, it doesnt.

Man: Payrailz should have provided us with

Mason: We need t gem that is independent, not relyin on their possibly bad codebase.

Jim: We have


process:
1. Initialize savon
2. Exception handling.
It could be on the client, or on the request.
Business exceptions or unexpected exceptions?

If something is bad on the connection, we need to pass them to payrailz in the XML.

Looking at `request_header.rb`. This will be a constant pattern. The values will change.
This can be shared across all services.

3. Base services.

Looking at a few files. Should be in the `consumerMaintenance` class.
Looking at:
`consumer_maintenance_service.rb`
Jim did the example response in `dtos/maintain_consumer.rb`

Jim: Each service has its own, unique response. We would need to parse those individually. We need a response Builder.
Every service needs to parse it's own response, because each response is different.
Mason: These are on the tech-spec docs (what the response will be)

Jim: as of yesterday, SAVON gave us raw XML. What is the payload of the response object?

Manesh: They will pass info (cfi ID, environment). Based on that info, get AppHeader and message.
`request_builder.rb`

Jim: How do we know how that info is passed in?

## Started another recording.

How do we know how the info gets passed?
Mason: How does payrails invoke a request?

Jim: What do we need? And what will we give back?
Can you show me how Payrailz would be calling this application? In a blank file?

Manesh: Walks through the proces in file `untitled`

They will pass in the parameters.
So, we will tell them what to pass in :)
This will go into the `request_payload(args)` in `consumer_maintenance.rb` file.
Goes to `request_builder.rb`

Jim: So we just need to require ALL THE PARAMETERS we need. There would be lots of parameters. Is it normal to have this many parameters?

Manesh: YES. They can send a HASH, where the names can be specific.

We tell them what they need to interact with our gem. How do we enforce this at the top level? We need to return ERRORS.

Mason: Payrailz will not give us what we need.

Jim: How are you building without the data from Payrailz?

Looking at Jim's code: `maintain_consumer.rb`
class `AppHeader`
Jim was looking at it as an object, manesh was looking at it was individual items:

Bhargav: I was using these items from the .yml file.

Going forward, these will come from the parameters that are passed in.

Mason: How do we fail it back to the people that call the method? There will be no collaborative convos with Payrailz.

Jim: Split up the App Header, because that will be the same.

Chris: We need to stop thinking over this, and just get some code that the client can see.
We can iterate going forward. There is no time to go slowly.

Jim: We are the consultants.

Chris: Client will iterate with us.

Mason: our goal is to get something end to end.

Jim: How is payrailz going to use this? We have to give them code they can call. This is what I want to see.

Forget unit testing at this point.

### rewatch this part where MANESH speaks
Manesh: What is the object you want payrailz to send?

Jim: appheader and .env document

Mason: we will be exposing what payrailz will be sending us. Payrailz will need to supply what is on the spreadsheet `bpxmapping`
Looking at tab `BAH-AppHdr-ISO2002`.
This all comes from the document Bill Pay Exchange, which comes from the doc `PayRailsMessageStructureResource`.



## Questions:
What about their test server?
Do I need VPN so I can do API calls?


## Summary:
Manesh clearly spoke up better.
It seems like they worked together.

Use Jim's apprach: add the app header.



Goal: To provide some sort of implementation to the client. This will be the Consumer Maintenance service call, to register a consumer within Bill Pay exchange.

Assumptions: They are stopped. Not much progress is being made, and they are pointing the finger at Payrailz. Is it safe to assume that the project will proceed without them?
I am an approved IP and can make API calls.
Their demo server is descriptive with errors and can be hit often during the dev process.
The amount of time required to complete this task is unknown.

Next steps:
1. review codebase and setup local env.
2. Create templates for each service call, with required fields.
3. Make example soap request.
4. Learn more Ruby (specifically REST/SOAP)
5. Possibly connect with Manesh, Bharghav





## TODOS:
- [x]
- [ ] Connect to their URL today with SOAP.
- [ ] Build a template for the response for each service.
- [ ] Watch end of last video: Jim's final solution.


