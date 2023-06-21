# Relationships

Lets look at the relationships in a database.

Are the relationships 1 to 1, or 1 to many? Or, many to many?
Should the info be embedded, or linked?

## Types and Cardinality.

Types: 1:1, 1:many, and many:many

1:1 is customer and their id.
Customer and products is many to many.
If the quantity is up to 20, it is different than 100,000,000

What is the value of the maximum number?
Lets call a large number, "zillion".
Look at it this way:
Minimum, likely, and maximum.


### One to many relationships.

Examples: A person and their credit cards. A person can have many credit cards, but each CC only has 1 person.
We keep the docs in 2 different collections.
The information that is needed together, stays together.
If the address doesnt change much,

1. Embed
   1. in the "one" side
      1. the docs from the "many" side are embedded. If the embedded doc quantity is small, embed them.
   2. In the "many" side.
      1. Embed the docs from the "one" side, on the "many" side. Like, orders delivered to an adress. People look at the ORDER to an address.
      2. Embedded doc (like the address) must be duplicated.
2. Reference
   1. In the "one" side.
      1. Reference the "many" side. Have an ARRAY that represents the store values. If you dont need to know the store values. You are saving yourself the queries. You need to keep all of this in sync. MongoDB does not store cascading deletes, to references cannot be deleted in sync.
   2. in the "many" side.

In sum: 

- Choose the side of the "one" or "many"
- Duplication may occur when embedding ont he "many" side. 
- Prefer embedding over referencing for simplicity, or if the quantity is small (like a user's address)
- Embed on the side of the most queried collection
- prefer referencing when the associated documents are not always needed with the most queried documents. 


### Many to many relationships. 

Many Documents can be associated with many other docuemtns, like items sold in stores. Each item can be sold in many stores, and each store sells many items. 

There is a "jump table" that stands in between the two "many" tables. 
Example: People and phone numbers. Sometimes phones are exclusive, and sometimes a phone number can have many people. 

We can treat phone number for home as many people. 

Again:

1. Embed. 
   1. Array of sub docs on "many" side
   2. Array of sub docs on "other" many side. 
   3. Usually, only the most queried side is considered. 
2. Reference
   1. Array of reference on the "many" side.
   2. Array of reference on the other "many" side. 


Let look at an online cart. You can have copies of the items stored in a cart. An item can exist without being in any carts. 

Instead of embedding, you can use references. 
When an object is retreived, you get a list of all objects. 
If you need to add info, you need to add another query. 

Or, you can keep the references in another collection. 

Use the reference that fits the queries we are going to use, and how the data is updated. 

Recap:

- Ensure it is a "many to many" that cannot be simplified. 
- A "many to many" can be replaced by two "on to many" relationships but does not have to
- Prefer embedding on the most queried side. 
- Prefer embedding for info that is primarily static over time, and may be ok to duplicate
- Prefer referencing over embedding to avoid managing duplication. 


## One to one relationships

1. Embed
   1. FIelds at same level
   2. Grouping in sub docs
2. Reference
   1. Same id in both docs
   2. in the main "one" side
   3. in the secondary "one" side.


For a customer with shipping info, keep addresses as a sub-doc. 

Use references for optimization only. 

## One to zillions

- It is a special case of 1-many
- can only be used by reference
- Be careful with code that handles this


