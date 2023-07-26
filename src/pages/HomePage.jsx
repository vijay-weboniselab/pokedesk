import React from "react";
import PokemonListContainer from "../containers/PokemonListContainer";
import PokemonDetailsContainer from "../containers/PokemonDetailsContainer";

function HomePage() {
  return (
    <div>
      <PokemonListContainer />
      <PokemonDetailsContainer />
    </div>
  );
}

export default HomePage;
