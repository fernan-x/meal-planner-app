import React from "react";
import background from "../assets/img/login_background.png";
import hat from "../assets/img/login_hat.png";
import { HiArrowRight } from "react-icons/hi";
import Button from "./core/Button";
import { useNavigate } from "react-router-dom";
import { useIngredients } from "../hooks/useIngredients";

const SplashScreen: React.FC = () => {
  const navigate = useNavigate();
  const { ingredients } = useIngredients();

  console.log(ingredients);

  return (
    <div
      className="splashscreen"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="splashscreen__content">
        <div className="splashscreen__content-top">
          <img src={hat} alt="Cooking hat" />
          <span className="medium-text-bold">100+ Recettes Healthy</span>
        </div>
        <div className="splashscreen__content-bottom">
          <h1 className="title-text-bold">Meal planner</h1>
          <span className="normal-text-regular">
            Trouvez les meilleurs recettes !
          </span>
          <Button variant="big" onClick={() => navigate("/login")}>
            Cuisiner <HiArrowRight />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SplashScreen;
