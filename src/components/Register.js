import React, { useState } from "react";

const InscriptionForm = () => {
  const [nom, setNom] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleInscription = (e) => {
    e.preventDefault();
    // logique d'inscription à faire
  };

  return (
    <div className="container card">
      <h2>Inscription</h2>
      <form onSubmit={handleInscription}>
        <div className="mb-3">
          <label htmlFor="nom" className="form-label">
            Nom complet
          </label>
          <input
            type="text"
            className="form-control"
            id="nom"
            placeholder="Votre nom complet"
            value={nom}
            onChange={(e) => setNom(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Adresse e-mail
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="exemple@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Mot de passe
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="Mot de passe"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Confirmez mot de passe
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="Mot de passe"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          S'inscrire
        </button>
      </form>
    </div>
  );
};

export default InscriptionForm;
