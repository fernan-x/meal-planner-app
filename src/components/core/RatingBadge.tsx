import React from "react";
import { AiFillStar } from "react-icons/ai";

interface RatingBadgeProps {
  rate: number;
}

const RatingBadge: React.FC<RatingBadgeProps> = ({
  rate,
}: RatingBadgeProps) => {
  return (
    <span className="rb smaller-text-regular">
      <AiFillStar className="rb__icon" />
      {rate.toFixed(1)}
    </span>
  );
};

export default RatingBadge;
