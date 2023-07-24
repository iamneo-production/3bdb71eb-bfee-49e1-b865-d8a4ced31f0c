import React from "react";
import "./Card.css";

const Card = ({ imageUrl }) => {
  return (
    <div className="card">
      <img src={imageUrl} alt="Movie Poster" />
    </div>
  );
};

export default Card;
