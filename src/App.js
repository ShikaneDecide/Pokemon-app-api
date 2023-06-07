import React from "react";
import PokemonList from "./Pokemon";
import "./App.css";

function App() {
  return (
    <div>
      <h1>Search the Pokemon using its name, Number or type of the Pokemon</h1>
      <PokemonList />
      <body>
        <div class="background">
          <div class="box"></div>
        </div>
      </body>
    </div>
  );
}

export default App;
