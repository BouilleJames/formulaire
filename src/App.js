import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import ConnexionForm from "./components/ConnexionForm";
import Register from "./components/Register";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/signin" element={<ConnexionForm />} />
        <Route path="/signup" element={<Register />} />
      </Routes>
    </Router>
  );
};

export default App;
