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