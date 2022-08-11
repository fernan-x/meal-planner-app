import React from "react";
import RatingBadge from "./RatingBadge";
import { BsStopwatch } from "react-icons/bs";

interface RecipeCardProps {
  title: string;
  rating: number;
  author: string;
  cookingTime: number;
  img: string;
}

const RecipeCard: React.FC<RecipeCardProps> = ({
  title,
  rating,
  author,
  cookingTime,
  img,
}: RecipeCardProps) => {
  return (
    <div className="recipeCard" style={{ backgroundImage: `url(${img})` }}>
      <div className="recipeCard__content">
        <div className="recipeCard__content-top">
          <RatingBadge rate={rating} />
        </div>
        <div className="recipeCard__content-bottom">
          <div className="recipeCard__content-bottom_left">
            <span className="title small-text-bold">{title}</span>
            <span className="author smaller-text-regular">Par {author}</span>
          </div>
          <div className="recipeCard__content-bottom_right">
            <span className="time small-text-regular">
              <BsStopwatch style={{ marginRight: ".2rem" }} />
              {cookingTime} min
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
