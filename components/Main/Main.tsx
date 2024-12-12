import React from "react";
import styles from "./styles.module.css";
import { games } from "../../boardGameInfoList";
import Card from "../Card/Card";

const Main = () => {
  const filteredGames = games
    .slice(0, 500)
    .sort((a, b) => a.weight - b.weight)
    .filter((g) => g.maxPlayers >= 6);

  return (
    <div className={styles.wrapper}>
      {filteredGames.map((g) => (
        <Card key={g.id} {...g} />
      ))}
    </div>
  );
};

export default Main;
