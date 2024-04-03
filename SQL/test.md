# Relationships.

Can be 1-1, or 1-many.

Ingredients and recipes;
ingredient is a tomato;

1-many
A recipe can have many recipes.
Each photo has one recipe.

In a spreadsheet, what would that look like?
You would need a new column for each photo.

1 table for recipes;
1 table for photos.
1 table to join them


Type \c recipeguru to connect to our database.

# Joins

We have many photos from each recipe. We can query based on the ID of the photo.

recipeguru=# SELECT * FROM recipes_photos;
 photo_id |                     url                      | recipe_id
----------+----------------------------------------------+-----------
        1 | cookies1.jpg                                 |         1
        2 | cookies2.jpg                                 |         1
        3 | cookies3.jpg                                 |         1
        4 | cookies4.jpg                                 |         1
        5 | cookies5.jpg                                 |         1
        6 | empanada1.jpg                                |         2
        7 | empanada2.jpg                                |         2
        8 | jollof1.jpg                                  |         3
        9 | shakshuka1.jpg                               |         4
       10 | shakshuka2.jpg                               |         4
       11 | shakshuka3.jpg                               |         4
       12 | khachapuri1.jpg                              |         5

Get all data about a recipe AND get all photos associated with that recipe from the photos table
```SQL
SELECT r.title, r.body, rp.url
  FROM recipes_photos rp
  RIGHT OUTER JOIN
    recipes r
  ON
    rp.recipe_id = r.recipe_id;
```

So, a JOIN doesnt CREATE a table, it just returns data from two tables. The return is almost like a table.

There are different types of joins:
- only return if data is in both (like only recipes with photos; o)
- only return if data is in one, or the other (LEFT or RIGHT)
-
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
