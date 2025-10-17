const express = require("express"); // Importation du framework Express
const mongoose = require("mongoose"); // Importation de Mongoose pour interagir avec MongoDB
const dotenv = require("dotenv"); // Importation de dotenv pour gérer les variables d'environnement
const userRouter = require("./routes/userRoutes");

// Configuration de dotenv pour charger les variables d'environnement depuis le fichier .env
dotenv.config({ path: "./.env" });
mongoose
  .connect(process.env.DATABASE)
  .then(() => {
    console.log("Connection to the DB secured !!!"); // Message de succès si la connexion est établie
  })
  .catch((err) => {
    console.log(err);
  });
const app = express(); // Création d'une instance de l'application Express
app.use(express.json());
app.use("/user", userRouter);
const port = 1234; // Définition du port d'écoute du serveur
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
}); // Démarrage du serveur et affichage d'un message de confirmation
