# Routes and Controllers

Now we have routes and schemas.

Controllers are middleware **With the intent of returning some data**

Controllers handle what a ROUTE + VERB combo can access from the DB.

Just like middleware, but DO NOT CALL NEXT()

CONTROLLERS implement LOGIC that interacts with our DB

Can generalize controllers to work for many models bc were going with a REST approach, which requires CRUD actions

MONGOOSE models work really well with REST

UPDATE