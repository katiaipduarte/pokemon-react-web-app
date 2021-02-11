import React, { useContext } from "react";

import PokemonList from "./components/pokemonList";
import CapturedPokemons from "./components/capturedPokemons";
import { PokemonContext, PokemonProvider } from "./context/pokemonProvider";

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
