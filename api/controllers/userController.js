const { User } = require("../models/user.model");

// Contrôleur pour récupérer tous les utilisateurs
const getUsers = (req, res) => {
  // Logique pour récupérer les utilisateurs depuis la base de données
  User.find({}, (err, users) => {
    if (err) {
      return res.status(500).json({ error: "Erreur serveur" });
    }
    return res.status(200).json(users);
  });
};

// Contrôleur pour créer un utilisateur
const createUser = (req, res) => {
  // Logique pour créer un utilisateur en utilisant les données du corps de la requête
  const userData = req.body;
  User.create(userData, (err, user) => {
    if (err) {
      return res.status(400).json({ error: "Données non valides" });
    }
    return res.status(201).json(user);
  });
};

module.exports = {
  getUsers,
  createUser,
};
