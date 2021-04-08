use curso_banco_dados;

/*SELECT  * from posts;
*/
/*
SELECT * from posts LEFT JOIN autores on posts.autor_id = autores.id*/
SELECT * from posts LEFT JOIN autores on posts.autor_id = autores.id ORDER BY  posts.id DESC ;