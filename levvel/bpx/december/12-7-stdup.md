# Standup meeting for BPX project

## People:

Chris Rigoni
Mason
Jim
Bhargav
Manesh

Jim: Chris and I spoke this morning. Bhargav and I had a time to talk this weekend. It makes more sense to me now.

## Manesh proposes his work:

Rspec for consumer maint.
When we create resolvers, we need a way to validate our XML.

**Started recording**

Looking on Github, manesh at `service_clinets/consumer_maintenance.rb`

All the info is in the spec information file.

We need test XML payloads.

Jim: Can we validate against the schema?

Jim sent an article about mocking- do we have that?
Manesh:

Jim: I finally understand that this is a library- and i understand modules. I am working on making a few changes, and then we can settly on a pattern and figure it out.

Mason: I can ping

### Manesh and Bhargev got off

Chris: Are we replacing manesh?
Jim: We needed someone to come in and lead Ruby design. Chris and I brainstormed.
The proposal is that we have to get rid of one of these guys. To get someone on, someone has to go.

Bhargav- he seems quiet, but his code seems to demonstrate an understanding.
Mason: The full response document is there, and Manesh didnt look to use any of those. Bhargav won't offer up any recommendations or advice on how to proceed on this project.

Jim: Bhargav doesnt understna d a few things. Manesh is a naysayer. I want to see results. no time for excuses. Team dynamics are suffering from what Manesh won't give up on.
I dont want to bring on another indian dev.

Jim: Mason is taking over customer-facing job.
Mason: I will work to try and distill what MC is talking about. We may find a better way. I am happy to spend time going over some Ruby.

Jim: I don't want to be the tech spec guy. Mason, you cant get off this project.

Jim: I did a bunch of classes. Gems, structures. Alot of things make sense, but not everything. I know the big picture, but dont know how to do it in the ruby way.




### This is on the patterns-spec branch

Manesh is using Ruvy v. 2.6.6

Jim: I like Manesh's .yml file.

`bpx_client.rb` Jim is showing it.
**look at this part**
There will be a global configuration, and it will go across all the services. The endpoint will be dynamic.
`bpx_coonfig.yml`
Every service will have this SAVON,and some configs at the SERVICE LEVEL.
Then, make a request and a response under
**watch this**

`consumer_maintenance`

under `dtos/maintain_consumer.rb`

Mason: Postman credentials: this can be used in Savon.
**LOOK AT THIS ON THE VIDEO**
Mason will handle this.

Mason: rspec has the notion of mocks, but there used to be something called factoryGirl, and test suite can use this mocking framework



### Questions


### Todos

- [ ] read articles mason sent over
- [ ] Send over those (from Mason) articles to Jim
- [ ] Look into gem called factory girl
- [ ] Read article Jim sent in slack

