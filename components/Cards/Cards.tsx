import React from "react";
import styles from "./styles.module.css";
import Card from "../Card/Card";
import { Game } from "@/boardGameInfoList";

type CardsProps = {
  games: Game[];
};

const Cards = ({ games }: CardsProps) => {
  return (
    <div className={styles.cardsWrapper}>
      {games.map((g) => (
        <Card key={g.id} {...g} />
      ))}
    </div>
  );
};

export default Cards;
