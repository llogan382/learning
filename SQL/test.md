## Some commands


Connect to a DB
\c recipeguru 

LIST ALL TABLES
\d

SELECT (list everything) FROM (TABLE)

# Deleting
What if we need to delete something?

You need to tell it what to do; so if you delete something on one table, delete everything that references it from the other table. 

# Updating
UPDATE ingredients SET image = 'watermelon.jpg' WHERE title = 'watermelon';

# Many to many
A recipe that contains many ingredients;
Ingredients belong to many recipes. 
Add another table to show those connections

When making this third table to show the connections, it has to have a primary key
This PK can be a combination of two values. 
This way, the PK is a combination of the ingredient ID and the recipe ID. 

Once you have the table that shows the connection, you can query using multiple joins. 

SELECT
  i.title AS ingredient_title,
  i.image AS ingredient_image,
  i.type AS ingredient_type,
  r.
FROM
  recipe_ingredients ri
INNER JOIN
  ingredients i
ON
  i.id = ri.ingredient_id
WHERE
  ri.recipe_id = 1;

# Constraints.
There must be a unique combination between recipe and receipe ID. 
Other constraints:

- Primary Key as a unique combinations
- UNIQUE
- Foreign Keys. It must exist on the other table. 
- Types. 

CHECK is like an ENUM in TS. 

SQL is really good at checking if data is a certain type, or has rules for how it can be created. 

# Other commans 

`\d` is "describe" which can tell a lot of useful info for a table. 

SELECT COUNT(*) FROM ___Table name

SELECT type, COUNT(type) 
FROM
ingredients
GROUP BY
type;


GROUP BY needs to be the thing you are selecting; the GROUP BY needs to be the same thing. You cannot group by TITLE, where the TITLE is different for each oe.s
# For my blog

Make aDB for my blog. 
