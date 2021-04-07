use curso_banco de dados;

SELECT
  *
FROM
  posts 
  INNER JOIN autores  on posts.autor_id = autores.id