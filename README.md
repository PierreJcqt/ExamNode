# ExamNode

1. Clonez et ouvrez le projet puis lancez l'installation des packages avec "npm install".
2. Placez vous à la racine du projet et lancez "node index.js", l'application sera lancé sur le port 3000
3. Pour tester les routes sur Postman :

Pour le endpoint GET '/books', utilisez l'URL http://localhost:3000/books.

Pour le endpoint GET '/books/:id', utilisez l'URL http://localhost:3000/books/{id} où {id} est l'identifiant spécifique d'un livre.

Pour le endpoint POST '/books', utilisez l'URL http://localhost:3000/books : 
Dans la section "Body" de la requête, assurez-vous de sélectionner "Raw" et "JSON" pour envoyer les données JSON.
Dans le corps de la requête, spécifiez les détails du livre que vous souhaitez créer (par exemple, {"id": 1, "title": "Mon livre", "author": "Moi"}).

Pour le endpoint PUT '/books/:id', utilisez l'URL http://localhost:3000/books/{id} où {id} est l'identifiant spécifique d'un livre.

Pour le endpoint DELETE '/books/:id', utilisez l'URL http://localhost:3000/books/{id} où {id} est l'identifiant spécifique d'un livre.


