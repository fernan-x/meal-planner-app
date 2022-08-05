import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../core/Button";
import Container from "../core/Container";
import Input from "../core/Input";
import { HiArrowRight } from "react-icons/hi";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/dashboard");
  };

  return (
    <Container className="login">
      <div className="login__title">
        <h1 className="header-text-bold">Bonjour,</h1>
        <span className="large-text-regular">Heureux de vous revoir !</span>
      </div>
      <form className="login__form">
        <Input
          label="Email"
          placeholder="Saisissez votre Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          label="Mot de passe"
          placeholder="Saisissez votre Mot de passe"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
        />
      </form>
      <div className="login__actions">
        <Button variant="big" onClick={handleClick} fullWidth>
          Se connecter <HiArrowRight />
        </Button>
      </div>
    </Container>
  );
};

export default Login;
