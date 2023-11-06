const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT_SERVER;
const db = require("./config/db.config");
const User = require("./models/user.model.js");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Vérifier l'état de la connexion à la base de données
db.authenticate()
  .then(() => {
    console.log(
      "Connection to the database has been established successfully."
    );
    // Ajoutez ici le code pour démarrer le serveur Express une fois la connexion à la base de données établie.
    app.listen(port, () => {
      console.log(`Example app listening on port ${port}`);
    });
  })
  .catch((err) => {
    console.error("Database error : ", err);
  });

app.get("/api/data", (req, res) => {
  res.send("Hello World!");
});

app.get("/api/roles", (req, res) => {
  res.send("Bonjour le monde!");
});

app.get("/user", (req, res) => {
  User.findAll()
    .then((users) => res.json({ data: users }))
    .catch((err) => res.status(500).json({ error: err }));
});

module.exports = app;
