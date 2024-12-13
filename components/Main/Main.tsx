import React, { useState } from "react";
import styles from "./styles.module.css";
import { games } from "../../boardGameInfoList";
import Cards from "../Cards/Cards";

type SortType =
  | "id"
  | "releaseYear"
  | "rating"
  | "ratingsNumber"
  | "weight"
  | "maxPlayers";

const Main = () => {
  const [boardgameTitleFilter, setBoardgameTitleFilter] = useState<string>("");
  const [sortKey, setSortKey] = useState<SortType>("id");

  const filteredGames = games
    .filter(
      (g) =>
        !boardgameTitleFilter ||
        g.title
          .toLocaleLowerCase()
          .includes(boardgameTitleFilter.toLocaleLowerCase())
    )
    .sort((a, b) => a[sortKey] - b[sortKey]);

  return (
    <>
      <h1 className={styles.title}>Boardgames</h1>
      <div className={styles.form}>
        <input
          placeholder="type boardgame title"
          value={boardgameTitleFilter}
          onChange={(e) => setBoardgameTitleFilter(e.target.value)}
          type="text"
        />

        <select
          id="options"
          value={sortKey}
          onChange={(e) => setSortKey(e.target.value as SortType)}
          className={styles.select}
        >
          <option value="">Sort by...</option>
          <option value="releaseYear">Release year</option>
          <option value="rating">Rating</option>
          <option value="ratingsNumber">Ratings number</option>
          <option value="weight">Dificulty</option>
          <option value="maxPlayers">Num of players</option>
        </select>

        {sortKey}
      </div>
      {boardgameTitleFilter}
      <Cards games={filteredGames} />
    </>
  );
};

export default Main;
