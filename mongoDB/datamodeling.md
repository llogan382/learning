# Intro to MongoDB

What do I need to know?

## DB Fundamentals

- Relational Data Model
- Table. A DB is composed of multiple tables.
- Column. A DB column stores info in an organized way, and each storage unit is called a **column** or a **field**
- The entity relationship data model.
  - Entity is an object in the real world with an independent existence that can be differentiated from other objects.
  - Weak Entity. It cannot exist without a relationship with another entity.
  - Strong. It can exist apart from its related entities.
  - Independent entities, or "kernals", are the backbone of the DB. They are what tables are based on.
  - Dependent entities depend on other tables fro their meaning. They are used to connect two kernels.
  - Characteristic Entities. Prvoide info about another table. Typically have 1 to many relatinships.
  - Attributes.
    - Simple.
    - Composit. Things like address for an employee are composite.
    - Multivalued. Like, an array of items.
    - Derived attributes. Calculated from other attributes.
    - Keys
      - Candidate key. Unique and minimal.
      - Composite key. Based off of teo or more attributes.
      - Primary key. Selected by the DB designer to be unique


## Intro to Data Modeling.

Is modeling schemaless? No.

MongoDB is a flexible data model. But all data has a STRUCTURE, and therefore a schema.
For example: A profile.
This data may grow. As the user interacts, more data for that user will grow. Keep the data that is accessed often small.
Finding schemas can be hard.

# The document model in MongoDB

Each deployement has many databases. DB has many collections. Each collection has documents.

Types on a doc can include a string, array, an array of other documents.
You can pull down all data in a single query as an object with all values.

Mongo DB has a flexible schema. You can have multiple values of your schema. The docs work with rules on some fields, all fields of a doc,

## Constraints in data modeling.

Modeling needs to make use of the data available. This includes:

- Hardware
  - Ram
  - Solid State Drives
  - HDD
- Data
  - Size
  - Security, sovereignty
- Application.
  - Network Latency
- DB Server.
  - Max size of doc is 16MB.

Working set.
You want to keep data that is frequently used available in memory.
Keep frequently used Docs in Ram.
Keep indexes in RAM


## Methodology

Three phases

1. Workload. How will data be used?
2. Relationships
3. Design patterns/transformation.

## Phase 1: Data Model: The Schema.

Look at the workload. Data size, reads and writes.

Look at the documents. Put the data together in the schema. Look at docs I have in my schema. Size out how the data will grow over time.

Data operations. How many reads/writes?

Assumptions. What am I assuming? Will it need to be evaluated?

## Phase 2

Relationships: Embed, or link the relationships.
Each piece has data with other data.

1 to 1 stays in same doc.

Movies have 1 to many for reviews. Each movie has many reviews.

Money earned has a 1:1 relationship w movie title. These stay in same collection.

Reviews are in another collection.
Do we embed the info, or keep it separate?

List of entities, and fields, some of it is grouped together.


### Phase 3

Address performance recommendations.
Apply schema design patterns. Apply schema change recipes. You may need to improve your solution.


## Modeling

Simplicity vs performance.

Simplicity means development can be fast. Frequently, these have small requirements. Identify most important queries.

Usually many of these end up with many models in the same docs. Usually, there will be fewer collections, and everything maps. When docs grow, the app does less disk accesses. A single read can get all data.

Performance. This is when a project makes use of Sharding. It requires fast read/write operations. More complex projects are done by larger teams, and requires more modeling up front. You want to go over all steps of methodology up front.
Can the data be a little bit stale?
How will CPU, Ram, and bandwidth be used?

Prioritize simplicity over perf.

Regardless, identify the workload.
Then, choose: Embed, or link. Simplicity favors embedding.

