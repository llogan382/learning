# DB modeling

This is just an overview of data modeling

- ALWAYS use a schema for your models.
- MongoDB is schemaless, but you should always use SCHEMAS
- Better to validate the data before it goes in the DB
- Mongoose is much better than MongoDB for creating schemas.
- Models can be created for each REST resource we want to expose vie the API


So, use a SCHEMA to create a MODEL, and the MODEL is saved in JS.

## SCHEMAS TO MODELS

Schemas are the instructions for the models. Things like validaiton, indexes, fields, hooks, names are included.
It all starts with a SCHEMA.
CONTROLLERS use the models that attach to RESOURCES used in the REST API.

Design data with Schemas, convert to models, resources activate the controllers.




