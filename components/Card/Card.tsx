import React from "react";
import styles from "./styles.module.css";
import { Game } from "../../boardGameInfoList";

const Card = ({
  title,
  releaseYear,
  rating,
  bestPlayersNumber,
  ratingsNumber,
  weight,
  gameImageUrl,
}: Game) => {
  return (
    <div className={styles.wrapper}>
      <h2>{title}</h2>
      <img src={gameImageUrl} alt={`${title} image`} />
      <div className={styles.rating}>
        <span>Rating: </span>
        <span>{rating}</span>
      </div>
      <div>
        <span>Year: </span>
        <span>{releaseYear}</span>
      </div>

      <div>
        <span>Players(best): </span>
        <span>{bestPlayersNumber}</span>
      </div>

      <div>
        <span>Number of ratings: </span>
        <span>{ratingsNumber}</span>
      </div>

      <div>
        <span>Dificulty: </span>
        <span>{weight}</span>
      </div>
    </div>
  );
};

export default Card;
