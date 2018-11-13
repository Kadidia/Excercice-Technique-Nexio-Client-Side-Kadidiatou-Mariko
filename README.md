# Excercice-Technique-Nexio-Client-Side-Kadidiatou-Mariko
React-Redux

Pour pouvoir exécuter la solution :

1-	Il faut installer les composants suivants avec les bonnes versions :
-	Back-end : 
      --	Langage/Plateforme : Java JEE (Java 11.0.1)
      --	Spring Boot (2.1.0)
      --	Base de données in-Memory : H2 avec utilisation de JPA pour le mapping
      --	Spring Tools 3 (3.9.6)
      --	Maven (4.0.0)
      --	Apache Tomcat (9.0.13)
      --	IDE : Eclipse Photon 2018
-	Front-end : 
      --	ReactJS (16.6.1)
      --	Redux (4.0.1)
      --	NodeJS (11.0.0)
      --	 Npm (version 6.4.1)
      --	IDE : Visual Studio Code

2-	Une fois les composants installés, ouvrir Eclipse

a.	Importer le code source de la partie serveur en tant que projet --> choisir le dossier ExerciceJavaNexio (Eclipse devrait le
                     détecter en tant que fichier maven) 
b.	Faire un clic droit sur le projet et choisir « Run as → Spring Boot App »
c.	(en local mon serveur est sur localhost:8080)
d.	Ouvrir votre navigateur  et entrer l’url http://localhost:8080/h2-console/. Vous serez sur la page d’authentification à la base
          in-memory H2.  Login/mdp d’accès à la base est : sa/admin
          
Exemples d’appel des API REST
  •	API qui retourne la liste des produits : « localhost:8080/products »
  •	API qui retourne le détail du premier produit : « localhost:8080/productDetail/1 »

3-	Puis ouvrir Visual Studio Code avec les sources du client 

4-	Par la suite, ouvrir une console (terminal), se déplacer dans le répertoire contenant les sources du client (dossier : exonexio)
      puis taper « npm install » pour installer les composants nodes utilisés dans le projet client. 

5-	Une fois les composants nodes installés, toujours depuis la console, lancer le site client avec la commande « npm start » 

Vous serez rediriger sur un navigateur avec l’url « localhost:3000 »

6-	Puis vous tomberez sur la page d’authentification de l’application 
    •	login/pwd : nexio/nexio
7-	Vous accéderez à la page d’accueil qui contient la liste des produits. Vous pourrez par la suite tester les différentes fonctionnalités demandées. 

Vous pouvez également tester les web API avec « Postman ». version utilisée 6.5.2

