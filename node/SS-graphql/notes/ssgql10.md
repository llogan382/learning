# ENUMS

**ENUMS* resolve to STRINGS witht he same value
You can write custom resolvers for ENUMS.

# Interfaces

If you have 2 or 3 fields that are slightly different, you can ask for 1 query for that interface, and it will.

It is almost like a CLASS, where all items that implement the interface share the same characteristics.

# Relationships

How to get the names of the OWNERS of the shoes, from the shoes?

Create a RESOLVER function under SHOE:

```
Shoe: {
    user(shoe){
        const user = models.User.findOne({id})
        return user
    }
}
```