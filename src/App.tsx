import React, { useContext } from "react";

import PokemonList from "./components/pokemon-list";
import CapturedPokemons from "./components/captured-pokemons";
import { PokemonContext, PokemonProvider } from "./context/pokemon-provider";

const App = (): JSX.Element => {
  useContext(PokemonContext);

  return (
    <PokemonProvider>
      <div className="App">
        <PokemonList />
        <CapturedPokemons />
      </div>
    </PokemonProvider>
  );
};

export default App;
