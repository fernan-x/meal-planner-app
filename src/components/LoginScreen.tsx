import React from "react";
import background from "../assets/img/login_background.png";
import hat from "../assets/img/login_hat.png";
import { HiArrowRight } from "react-icons/hi";

const LoginScreen: React.FC = () => {
  return (
    <div className="login" style={{ backgroundImage: `url(${background})` }}>
      <div className="login__content">
        <div className="login__content-top">
          <img src={hat} alt="Cooking hat" />
          <span className="medium-text-bold">100K+ Premium Recipe</span>
        </div>
        <div className="login__content-bottom">
          <h1 className="title-text-bold">Get Cooking</h1>
          <span className="normal-text-regular">
            Simple way to find Tasty Recipe
          </span>
          <button className="big">
            Start Cooking <HiArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;
