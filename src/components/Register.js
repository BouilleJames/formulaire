import { Link, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Input from "../input/Input";
const UserRegex = /^[a-zA-Z][a-zA-Z0-9-_\.]{3,24}$/;
const EmailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const PasswordRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@&#$%]).{8,23}$/;
const PhoneNumberRegex = /^\+(?:\d{1,3})?\d{10,14}$/;
const InscriptionForm = () => {
  const [userName, setUserName] = useState("");
  const [validUserName, setValidUserName] = useState(false);
  const [userNameFocus, setUserNameFocus] = useState(false);
  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);
  const [phone, setPhone] = useState("");
  const [validPhone, setValidPhone] = useState(false);
  const [phoneFocus, setPhoneFocus] = useState(false);
  const [password, setPassword] = useState("");
  const [validPassword, setValidPassword] = useState(false);
  const [passwordFocus, setPasswordFocus] = useState(false);

  const [confirmPassword, setConfirmPassword] = useState("");
  const [validConfirmPassword, setValidConfirmPassword] = useState(false);
  const [confirmPasswordFocus, setConfirmPasswordFocus] = useState(false);
  const [success, setSuccess] = useState(false);
  const [user, setUser] = useState();
  const [errorMessage, setErrorMessage] = useState("");
  const inputArray = [
    {
      name: "userName",
      state: userName,
      setState: setUserName,
      regex: UserRegex,
      valid: validUserName,
      setvalid: setValidUserName,
      focus: userNameFocus,
      setFocus: setUserNameFocus,
      type: "text",
      msg: "Entre 4 et 24 caractères. Doit commencer par une lettre. Doit comporter au moins une lettre et aucun caractère spécial.",
    },
    {
      name: "email",
      state: email,
      setState: setEmail,
      regex: EmailRegex,
      valid: validEmail,
      setvalid: setValidEmail,
      focus: emailFocus,
      setFocus: setEmailFocus,
      type: "email",
      msg: "L'adresse mail doit avoir le bon format.",
    },
    {
      name: "tel",
      state: phone,
      setState: setPhone,
      regex: PhoneNumberRegex,
      valid: validPhone,
      setvalid: setValidPhone,
      focus: phoneFocus,
      setFocus: setPhoneFocus,
      type: "tel",
      msg: "Le numéro de téléphone doit avoir le bon format.",
    },
    {
      name: "password",
      state: password,
      setState: setPassword,
      regex: PasswordRegex,
      valid: validPassword,
      setvalid: setValidPassword,
      focus: passwordFocus,
      setFocus: setPasswordFocus,
      type: "password",
      msg: "Doit contenir au moins 8 caractères. Doit comporter au moins une lettre majuscule, une lettre minuscule, un chiffre et un caractère spécial.",
    },
    {
      name: "confirmPassword",
      state: confirmPassword,
      setState: setConfirmPassword,
      regex: password,
      valid: validConfirmPassword,
      setvalid: setValidConfirmPassword,
      focus: confirmPasswordFocus,
      setFocus: setConfirmPasswordFocus,
      type: "password",
      msg: "Les mots de passe doivent correspondre.",
    },
  ];
  useEffect(() => {
    inputArray.forEach((element) => {
      const verif =
        element.name === "confirmPassword"
          ? element.regex === element.state
          : element.regex.test(element.state);
      element.setvalid(verif);
    });
  }, [inputArray]);
  useEffect(() => {
    setSuccess(
      validEmail &&
        validPassword &&
        validConfirmPassword &&
        validPhone &&
        validUserName
    );
  }, [
    validEmail,
    validPassword,
    validConfirmPassword,
    validPhone,
    validUserName,
  ]);
  async function handleSubmit(e) {
    e.preventDefault();
    if (success) {
      setUser({ name: userName, email: email, phone: phone });
    } else {
      setErrorMessage("Inscription invalide.");
    }
  }
  return (
    <div className="container">
      {user && <Navigate to="/account" />}
      <div className="card">
        <div className="card-body">
          <h1 className="card-title">Inscription</h1>
          <form onSubmit={handleSubmit}>
            {inputArray.map((element, index) => {
              return <Input key={index}>{element}</Input>;
            })}
            <div className="d-flex mb-3 col-12 justify-content-between">
              <Link to={"/signin"}>Déjà un compte ?</Link>
              <button
                type="submit"
                className="btn btn-primary"
                disabled={!success}
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default InscriptionForm;
