# Kickoff meeting

People:

James Boone
Mason Packard
Christopher Rigoni II
Bhargav Dasari - Ruby Dev 8 yrs
Manesh Kommidi - Ruby dev
Chris Rigoni

[![An old rock in the desert](/screenshot.png "Shiprock, New Mexico by Beau Rogers")]

### Calendar Description:
Let's discuss the software architecture and set a direction on how to proceed.  I plan to present some design objectives and also the “hack” client that Mason and I did.  It illustrates the concepts I what I want to see with working code.   The goal is twofold 1) make sure you are clear what needs to be done 2) make suggestions of how to best accomplish this in Ruby.  I know it can be written more efficiently and eloquently.

After this session, everyone should know what they need to do and start producing code every day for check in.  We are already behind and must produce working code or we will be forced to find people who can. I don't mean to sound harsh, but that is the situation we are in.

### Presenter (James) Objectives:
1. Make sure I (luke) is clear what needs to be done.
2. Make suggestions for how to do it in Ruby.

### Follow up:
1. Start producing code every day for check-in.

### Soft Skills goals (What ERIC mentioned in Slack):

1. Attitude
2. Ability to listen.
3. If struggling, ask for help.


## Notes

Jim: Luke will be shadowing this project:
Project in crisis. Manesh and Bhargav are Ruby devs. Is there anyhing preventing progress on this project?

Manesh: Finding out libraries to use has been holding us up. I thought we needed to refactor, but we are going in a different direction.

Bhargev: A deep knowledge on what is needed. The documentation and what we need to send. A clear blueprint we didnt get from the docs. Once I get to it and learned expectations, there shouldnt be problems.

Jim: We are a team. We all have to contribute. I know SOAP, XML. I am also a software architect. The problem is, we are not using a language I know.
I expect you guys to take the ideas, and spin them up in ruby.
We need a prototyping pattern to apply.
Today, I want to walk through that pattern.

Everyone needs to step up and contribute. Management is getting on me, and there are expectations. If we dont produce, changes will need to be made.

Mason: I put together docs for SCHEMAS. And a spreadsheet for data mapping for XML schemas. Dont let those things distract you from the solution.

Jim: What are elements, patterns?
Every element has a request, and a response object. (he is sharing screen from a google doc).
I see an object sending elements TO the server, and getting a response FROM the server.
FOr RUBY, we need to convert the request to an XML payload. (we cannot use Ruby hash, it doesnt work). XML namespaces are critical.

MASON: XML that BPX has is not typical.

Jim: Shares screen, showing `xmlns` or xml name spaces. There are three of them.
Every item has an EXPLICIT NAMESPACE.

AppHeader has a namespace, request has a namespace, etc. Docs need to accept this, or the repsonse will not be accepted by mastercard.
Currently, we are only getting 2 of 3 responses validated.

This comes from MC built on the schemas.

Starting from the TOP, with the `.wsdl` file.
With SOAP, this is a **CONTRACT**, that describes input and output. I know this stuff very well.
At the top, it describes TYPES, and exports the SCHEMAS as `wsdl`
`wsdl` will tell you the two **SCHEMAS** that will be used.

one of those schemas is an **ENVELOP** It is a payload made of several objects.

The request returns a payload, but many of these things are optional.
MC (mastercard) fixes this- referencing MC bill pay exchange.

The MESSAGE is the SCHEMA - EUMT003 is the input, EUMT004 is the output message.

(Starting video 2): the header has 5 required attributes.

EMT2004: This describes the BODY of the document, like REGISTERING or DEACTIVATING the user.

We have to pass in the SENDER ID, and the USER ID.

Namespaces in the header arent working- they werent validated.

Some items were hardcoded, then shot off to MC, and a response comes back.

Jim: I have SOAP UI up and running. He has a MOCK service running in SOAP UI.
SAOP UI will look at the payload, and check if it is valid. It acts as a validator/server.
When the code is running, he prints the INPUT and the OUTPUT.

So, REQUEST and RESPONSE objects are covered.

## LOOK AT THIS SECTION IN THE RECORING

We have to suport different environments.
There are some GLOBAL CONSTANTS.
Methods will be different.
URLs will change for each one.
What is RUBY's way of doing this?

Manesh: I have some input.We have a barebones app.

## New VIDEO STARTED

*I dont thing the second effort of a recording worked*
Manesh: Our GEM is not being supported.
We are using a .env gem with multiple hashings. Write one method.

Jim: We have to choose something, and go with it. I believe request and response are the same.
The only differences will be ENDPOINT URL, and possibly certificates.
WE DONT HAVE DB CREDENTIALS

Mason: 3 environments. Certs, GLOBAL, individual services.

Manech: We will keep it in one file. In the .env, we only load 1 file.

Jim: Just finished CONFIGURATION part of the google doc he is referencing.

**I Want good code**

## Service template

1. Configure SAVON from `wsdl`
2. Service operation name.
3. Supports TLS 1.1 client mutual AUTH
4. Provides service call to BPX
5. Throws exceptions to CLIENT

Jim: Lets look at code.Mason and I had questions: Will SAVON give us a HASH back? It didnt, it gave us the whole response.

I want to give them a clean object with just their results. OUr job is to parse results, and

MASON: only give them what formatthey need in the response

JIM: Ppl dont want to deal with XML.

Jim: Lookng at consumermaintenance.rb.

MASON: Namespaces get added to the envelop

JIM: WSDL= web service description language. Luke, SAVON is a RUBY GEM we are using.
The endpoint is configurable.
He is looking at `class ConsumerMaintenanceService`
WSDL needs to be loaded in the Ruby class.
Namespaces are found in the WSDL. If you need help, Ill show you where to find this info

MASON: We know there will be refactoring.

Jim: Savon is setup, now we define and execute.
Then, `MaintainConsumerResponse` will return the Ruby object. Each object will return whatever was referenced last.

I like this pattern. Are there any better ideas?

*Bhargav asked a question I didnt hear*

Jim: The concepts are the most important.

Everything will have an `appHeader`. This will have sender-id, receiver-id, etc. PAYRAILS is asking what this stuff is, and the asnwer is that it is in the header.

Jim: Classes shold refer to the specs being implemented in MC (like EMT2004).

PAYRAILS needs to give us these CLASSES (appHeader, and servicePayload).

It is a composite of two XML pages.
It creates a new service, then gets executed.

*Moving on to `maintain_consumer.rb` file*

`class AppHeader` There are required attributes, and optional attributes.
Then, if this object is passed to SAVON...

Mason: Ruby can format DATETIME. We can customize that.

`Nokogiri` formats the request for me.
This request was built off spec doc.

Jim: LUKE, you can help us with this (the 2004 doc), showing us the few required items in the response.

We are MARSHALING from an XML object to a RUBY object. `Nokogiri` is good at that.

Manesh: Do we have what it is expecting in the response? For Consumer Maintenance, it tells if the call is successful. This has been failing.

Mason> EUMT004- shows the RESPONSE, and these have been mapped out.

Manesh: Response is coming back, If they only need specific parameters, we need to know. Do they need the whole hash, or only part of the hash?

JIM: Give them back everything we get in the response. If cleint doenst want to use the response data, THEY will ignore it. We dont know what they are using it for, just give them everything, and the client can use that data however they want.

Mason: Just know that cleint will start SCOPE CREEPING on everything. If in doubt, run it by Jim and Mason.


Manesh: What are the next steps?

Jim: Dont touch this branch. Just use it for reference as a pattern to use in Ruby.

Manesh: Use it for unit testing? Currently we are using the same payload. We will use your mockup (jims) for testing.

Mason: If you can get SOAP UI to mockup, that would be better.

Jim: If the response can be validated (like he shows in the example in SOAP UI), then we are good. It cannot be CLOSE, it has to be EXACT.

If SOAP UI wont validate it, MC wont validate it.

SAVONT isnt granular enough- for things like namesapcing.


## responses
*looking at eumt004_envelope.xsd in IntelliJ Idea*

This RESPONSE will indicate SUCCESS or failure. We need to return an object in either case.

## Review
Jim: Take these patterns, and make it ruby-like.

Manesh: We will take the branch, and refactor-it. Then, make some unit-testing.
Then, (something indecipherable)

Jim: Once we get the patterns, it will go fast.

MANESH - .env - constants will be placed there.
.env and .env consumer maintenance, (indecipherable)
Instead of having a BIG file, we will have small files because we are using RUBY not RAILS.

Mason: How will you work together to get this done?

Bhargev: We have different branches, and we will re-factor until it is working.

JIM: We have to start making PROGRESS.
If you don't do it, they are going to let you go.

MASON: I am here to help.

## Luke: How can I help:
Mason: I just shared the documentation. Take a look at BPX mapping spreadsheet, and a TLDR, a doc which will point me to specific docs.
It will give visual procedural reference of request and response.

Jim: I dont expect you (LUKE) to be a ruby dev.

MASON: Looking at the Google Sheets spreadsheet.
BPX Integration Scope and Strategy.
Review these docs, if there are specific questions, reach out.
Doc, PayRailsMessageStructureResource is the TLDR.
Is has an overview, where info was found, docs, service schema, etc.
Bill Pay Exc Tech Spec (217 pages).

BPX mapping spreadsheet- Sumary has all the specific items that need to go in the request, like name, description


## RUBY
Jim: I used RUBYMINE bc I couldnt get Ruby working in VS code.

XML: Use IntelliJ community edition.

Jim: I need you (luke) to

The MC COO needs this system to connect: there may be some one-off things I need you to connect to.

Mason: To hedge our risk, if you get up to speed and read their code to see what needs to be done and abstract their code, that would help.
Provide those guys a side-by-side with levvel values: asking questions.

We may reach out for problem solving.


Jim: Payrailz paid us for translatyion from RUBY to XML via Nokogiri. These guys are not levvel calibre people.
We need help, we need it quick. We will keep one of them at least.

Jim: I am the sr guy on this project.

Mason: You can work side-by-side, abstract from the technical docs. Write them out, and see if they can be tasked out into a system/process.

As Luke learns, he can read their code, understand the logic of variables, and see what their results/xml are. Then, translate that into some docs.

Mason: Good devs: Do I have the info I need? Think outside the box with x, y, and z. Look at their code.

Mason: I use IntelliJ for XML.
Mason: We will get you involved in the internal standups.
Chris Rigoni (sp?) can help as a project analyst. He is responsible for tracking status, facilitating standups, jira boards, etc.

Chris may not want me in Client facing.

Mason: Luke needs access to GITHUB, JIRA, and internal standups.

Chris: Either Eric or Derick will setup github for Luke.

*Luke has asked alot of great questions*

Chris: We are giving the contractors until WED of next week. If not, one of them will be removed, and LUKE will replace them. If so, I will be tech lead (the internal levvel person).

Client doesnt care if they are contractors.


Project timeline:
Finish timeline by Dec 21. Jim drops off there.
Last week of development could be through Jan 18, including stubbing out APIs for PAYRAILZ to integrate with their current application.

(look at this on the video)

WSDLs

## payrailz relationship

They are expecting progress. They are too busy to worry about.
THIS WEEK they expect an INITIAL COMMUNICATION with a first iteration that the app can do a request/response, with the correct security certificates.

Mason: I just got the certs last night.

Mason: We need the Payrails client ID to add.

There was a lot of mapping and framework to get started. There were issues with the certificates to get started (when payrailz was working on it).
If we are focusing on CERTS, then we are not working on MAPPING.

PAYRAILZ is ambiguous on timeframes.

Mason: They mentioned JAN or FEB as a timeframe for getting something.

The timeline CHRIS showed is a weekly communication with the client.

Anything else helpful to know?
Not much more than what Mason and Jim outlined.


## Todos:
[ ] Donwload SOAP UI
[ ] Look into RUBYMINE, the program JIM is using.
[ ] ASk for access to this code.
[ ] learn SAVON, the Ruby gem being used.
[ ] Look at IntelliJ Idea, an app for using XML
[ ] Look at Mastercard Docs, which has all files
[ ] Put REQUIRED response objects in, as outlined in spec doc.
[ ] Study these notes
[ ] Re-watch the video
[ ] Review this doc BPX Integration Scope and Strategy.
[ ] Look at old Jira tickets (mason is trying to get me access).
[ ] Look at their code on a daily basis.
[ ] Setup a Ruby environment?
[ ] How did Manech and Bhargev perform this week?


## Re-reviewing:

This will include three things:
1. The service client
2. The DATA TRANSFER OBJECT (file is `dtos/maintain_consumer.rb`)

Jim's pattern is on:
`ConsumerMaintenance.rb`

He used the SPREADSHEET, which is based off the TECH SPEC DOC to know what to pass in (the MC Bill Pay Exchange, copied [here](https://drive.google.com/drive/folders/1O8L-rvv4NGO4ZFRRLor-qrHppJSUPnuc))

We are creating a ruby GEM.
Using SAVON (which uses the WSDL and understands the kind of services it is exposing. )
It sends a REQUEST with all info
    - Payrailz needs to provide all info that goes into the header.
    - Mastercard provides info on the REQUIRED fields (EMT2004 is one)
    - It is composed of two object, that come from XML docs: The APP HEADER doc, and the request payload
    - Run the response through the `ConsumerMaintenanceService` class to parse the response
The REQUEST has an APP HEADER (found in maintain_consumer.rb)
    - The required header objects Jim put into this file.
    - Lines 36-65 add how the data should be formatted.
    - `nokogiri` is being used.


It returns a RUBY OBJECT



Jim ran the code
`/bpx/dtos/maintain_consumer.rb`

Also referenced
`spec/bpx/client_spec.rb`


got a partial response:
common_4/eumt/head.001.001.01.xsd.xml

### What are the common services?
They use SAVON.

Thank you guys for all of your time earlier.

I spent the afternoon reviewing the notes in google drive as well as the code base, and I wanted to check if I was on the right track before going too far (this is one way I am learning to stay efficient while working remote, since I can’t turn around my chair to ask people around me!)

1. This project is to implement a ruby gem that can do SEVERAL SOAP endpoints/Rest calls; one rough iteration was shown on the call today.
2. The call is done by RUBY sending in XML/JSON formatting, with all info in the headers that are outlined in the MC spec doc; required fields are summed up in the spreadsheet.
3. The response will need to convert (marshal) the response from XML/JSON into a Ruby object.
4. SAVON is used to help with SOAP requests; Nokogiri is used to parse XML responses
5. Repeat this process, using Jim's pattern on `ConsumerMaintenance.rb`, for all specs in the Mastercard Bill Pay Exchange document at  https://drive.google.com/file/d/1VbjkLy0dIPbBGsDe5FE23YpaNnPEzZLm/view


