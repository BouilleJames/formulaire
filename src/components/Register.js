// import React, { useState } from "react";

// const InscriptionForm = () => {
//   const [userName, setUserName] = useState("");
//   const [email, setEmail] = useState("");
//   const [tel, setTel] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [formErrors, setFormErrors] = useState({});
//   const [isFormValid, setIsFormValid] = useState(false);

//   const handleInscription = (e) => {
//     e.preventDefault();
//     // Logique d'inscription à faire ici
//     // Exemple de validation basique pour les champs
//     const errors = {};
//     if (userName.length < 4 || userName.length > 24) {
//       errors.userName = "Entre 4 et 24 caractères.";
//     } else if (!userName.match(/^[a-zA-Z]/)) {
//       errors.userName = "Doit commencer par une lettre.";
//     }
//     if (!email.includes("@")) {
//       errors.email = "L'adresse mail doit avoir le bon format.";
//     }
//     if (!tel.match(/^\d{10}$/)) {
//       errors.tel = "Le numéro de téléphone doit avoir le bon format.";
//     }
//     if (
//       !password.match(
//         /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
//       )
//     ) {
//       errors.password =
//         "Doit contenir au moins 8 caractères, une lettre majuscule, une lettre minuscule, un chiffre et un caractère spécial.";
//     }
//     if (password !== confirmPassword) {
//       errors.confirmPassword = "Les mots de passe doivent correspondre.";
//     }

//     setFormErrors(errors);
//     setIsFormValid(Object.keys(errors).length === 0);

//     // Si le formulaire est valide, vous pouvez envoyer les données au serveur
//     if (isFormValid) {
//       alert("Inscription réussie !");
//     }
//   };

//   return (
//     <div className="container card">
//       <h2>Inscription</h2>
//       <form onSubmit={handleInscription}>
//         <div className="mb-3">
//           <label htmlFor="userName" className="form-label">
//             Nom d'utilisateur
//           </label>
//           <input
//             type="text"
//             className={`form-control ${
//               formErrors.userName ? "is-invalid" : ""
//             }`}
//             id="userName"
//             placeholder="Nom d'utilisateur"
//             value={userName}
//             onChange={(e) => setUserName(e.target.value)}
//             required
//             name="userName"
//           />

//           <div className="validation-message">
//             Entre 4 et 24 caractères. Doit commencer par une lettre. Doit
//             comporter au moins une lettre et aucun caractère spécial.
//           </div>
//           {formErrors.userName && (
//             <div className="error">{formErrors.userName}</div>
//           )}
//         </div>
//         <div className="mb-3">
//           <label htmlFor="email" className="form-label">
//             Adresse e-mail
//           </label>
//           <input
//             type="email"
//             className={`form-control ${formErrors.email ? "is-invalid" : ""}`}
//             id="email"
//             placeholder="exemple@example.com"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//             name="email"
//           />
//           <div className="validation-message">
//             L'adresse mail doit avoir le bon format.
//           </div>
//           {formErrors.email && <div className="error">{formErrors.email}</div>}
//         </div>
//         <div className="mb-3">
//           <label htmlFor="tel" className="form-label">
//             Numéro de téléphone
//           </label>
//           <input
//             type="text"
//             className={`form-control ${formErrors.tel ? "is-invalid" : ""}`}
//             id="tel"
//             placeholder="Numéro de téléphone"
//             value={tel}
//             onChange={(e) => setTel(e.target.value)}
//             required
//             name="tel"
//           />
//           {formErrors.tel && <div className="error">{formErrors.tel}</div>}
//         </div>
//         <div className="mb-3">
//           <label htmlFor="password" className="form-label">
//             Mot de passe
//           </label>
//           <input
//             type="password"
//             className={`form-control ${
//               formErrors.password ? "is-invalid" : ""
//             }`}
//             id="password"
//             placeholder="Mot de passe"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//             name="password"
//           />
//           {formErrors.password && (
//             <div className="error">{formErrors.password}</div>
//           )}
//         </div>
//         <div className="mb-3">
//           <label htmlFor="confirmPassword" className="form-label">
//             Confirmez le mot de passe
//           </label>
//           <input
//             type="password"
//             className={`form-control ${
//               formErrors.confirmPassword ? "is-invalid" : ""
//             }`}
//             id="confirmPassword"
//             placeholder="Confirmez le mot de passe"
//             value={confirmPassword}
//             onChange={(e) => setConfirmPassword(e.target.value)}
//             required
//             name="confirmPassword"
//           />
//           {formErrors.confirmPassword && (
//             <div className="error">{formErrors.confirmPassword}</div>
//           )}
//         </div>
//         <a href="/signin">Déjà un compte ?</a>
//         <button
//           type="submit"
//           className="btn btn-primary"
//           disabled={!isFormValid} // Désactive le bouton si le formulaire n'est pas valide
//         >
//           S'inscrire
//         </button>
//       </form>
//     </div>
//   );
// };

// export default InscriptionForm;

import React, { useState } from "react";

const InscriptionForm = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [userNameError, setUserNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [telError, setTelError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const [formErrors, setFormErrors] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);

  const handleInscription = (e) => {
    e.preventDefault();
    // Logique d'inscription à faire ici
    // Exemple de validation basique pour les champs
    const errors = {};
    if (userName.length < 4 || userName.length > 24) {
      errors.userName = "Entre 4 et 24 caractères.";
    } else if (!userName.match(/^[a-zA-Z]/)) {
      errors.userName = "Doit commencer par une lettre.";
    }
    if (!email.includes("@")) {
      errors.email = "L'adresse mail doit avoir le bon format.";
    }
    if (!tel.match(/^\d{10}$/)) {
      errors.tel = "Le numéro de téléphone doit avoir le bon format.";
    }
    if (
      !password.match(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
      )
    ) {
      errors.password =
        "Doit contenir au moins 8 caractères, une lettre majuscule, une lettre minuscule, un chiffre et un caractère spécial.";
    }
    if (password !== confirmPassword) {
      errors.confirmPassword = "Les mots de passe doivent correspondre.";
    }

    setFormErrors(errors);
    setIsFormValid(Object.keys(errors).length === 0);

    // Si le formulaire est valide, vous pouvez envoyer les données au serveur
    if (isFormValid) {
      alert("Inscription réussie !");
    }
  };

  return (
    <div className="container card">
      <h2>Inscription</h2>
      <form onSubmit={handleInscription}>
        <div className="mb-3">
          <label htmlFor="userName" className="form-label">
            Nom d'utilisateur
          </label>
          <input
            type="text"
            className={`form-control ${userNameError ? "is-invalid" : ""}`}
            id="userName"
            placeholder="Nom d'utilisateur"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            required
            name="userName"
          />
          <div className="validation-message">
            Entre 4 et 24 caractères. Doit commencer par une lettre. Doit
            comporter au moins une lettre et aucun caractère spécial.
          </div>
          {userNameError && (
            <div className="invalid-feedback">{userNameError}</div>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Adresse e-mail
          </label>
          <input
            type="email"
            className={`form-control ${emailError ? "is-invalid" : ""}`}
            id="email"
            placeholder="exemple@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            name="email"
          />
          <div className="validation-message">
            L'adresse mail doit avoir le bon format.
          </div>
          {emailError && <div className="invalid-feedback">{emailError}</div>}
        </div>
        <div className="mb-3">
          <label htmlFor="tel" className="form-label">
            Numéro de téléphone
          </label>
          <input
            type="text"
            className={`form-control ${telError ? "is-invalid" : ""}`}
            id="tel"
            placeholder="Numéro de téléphone"
            value={tel}
            onChange={(e) => setTel(e.target.value)}
            required
            name="tel"
          />
          <div className="validation-message">
            Le numéro de téléphone doit avoir le bon format.
          </div>
          {telError && <div className="invalid-feedback">{telError}</div>}
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Mot de passe
          </label>
          <input
            type="password"
            className={`form-control ${passwordError ? "is-invalid" : ""}`}
            id="password"
            placeholder="Mot de passe"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            name="password"
          />
          Doit contenir au moins 8 caractères.Doit comporter au moins une lettre
          majuscule, une lettre minuscule, un chiffre et un caractère spécial.
          {passwordError && (
            <div className="invalid-feedback">{passwordError}</div>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="confirmPassword" className="form-label">
            Confirmez le mot de passe
          </label>
          <input
            type="password"
            className={`form-control ${
              confirmPasswordError ? "is-invalid" : ""
            }`}
            id="confirmPassword"
            placeholder="Confirmez le mot de passe"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            name="confirmPassword"
          />
          {confirmPasswordError && (
            <div className="invalid-feedback">{confirmPasswordError}</div>
          )}
        </div>
        <a href="/signin">Déjà un compte ?</a>
        <button
          type="submit"
          className="btn btn-primary"
          disabled={!isFormValid} // Désactive le bouton si le formulaire n'est pas valide
        >
          S'inscrire
        </button>
      </form>
    </div>
  );
};

export default InscriptionForm;
