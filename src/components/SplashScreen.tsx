import React from "react";
import background from "../assets/img/login_background.png";
import hat from "../assets/img/login_hat.png";
import { HiArrowRight } from "react-icons/hi";
import Button from "./core/Button";
import { useNavigate } from "react-router-dom";

const SplashScreen: React.FC = () => {
  const navigate = useNavigate();

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
          <Button variant="big" onClick={() => navigate("/dashboard")}>
            Cuisiner <HiArrowRight />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SplashScreen;
