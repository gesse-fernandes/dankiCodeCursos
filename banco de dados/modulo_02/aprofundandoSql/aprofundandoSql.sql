use curso_banco_dados;

/*
SELECT  * FROM posts WHERE autor_id = 3 and id  > 6;

*/
/*
SELECT  * FROM  posts WHERE  autor_id = 3 or id >=1; 
*/
/*
SELECT  * FROM  posts WHERE  (autor_id = 3 or autor_id =4) and titulo = 'ok1';
*/
SELECT  * FROM posts WHERE conteudo like '%conteudo%';