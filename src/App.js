import React from "react";
import PlayersList from "./PlayersList";

function App() {
  return (
    <div>
      <h1 className="text-primary" style={{ textAlign: "center" }}>Voici mes joueurs préférés </h1>
      <h2 style={{ textAlign: "center" }}>Liste des joueurs ⚽ </h2>
      <PlayersList />
    </div>
  );
}

export default App;