SELECT
  i.title AS ingredient_title,
  i.image AS ingredient_image,
  i.type AS ingredient_type,
  r.title AS recipe_title,
  r.body AS recipe_body,
  r.recipe_id AS rid,
  i.id AS iid
FROM
  recipe_ingredients ri
INNER JOIN
  ingredients i
ON
  i.id = ri.ingredient_id
INNER JOIN
  recipes r

ON 
  r.recipe_id = ri.recipe_id;