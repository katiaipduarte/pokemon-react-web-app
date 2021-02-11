import { useContext } from "react";

import { Pokemon } from "../@types/pokemon";
import { PokemonContextType } from "../@types/pokemon-context";
import { PokemonContext } from "../context/pokemon-provider";

const PokemonList = (): JSX.Element => {
  const {
    pokemons,
    setPokemons,
    capturedPokemons,
    setCapturedPokemons,
  } = useContext(PokemonContext) as PokemonContextType;

  const removePokemonFromList = (capturedPokemons: Pokemon): Pokemon[] => {
    return pokemons.filter((pokemon: Pokemon) => pokemon !== capturedPokemons);
  };

  const capture = (pokemon: Pokemon): void => {
    setCapturedPokemons([...capturedPokemons, pokemon]);
    setPokemons(removePokemonFromList(pokemon));
  };

  return (
    <div className="pokemons-list">
      <h2>Pokemons List</h2>
      {pokemons.map((pokemon: Pokemon) => {
        return (
          <div key={pokemon.name}>
            <p>{pokemon.name}</p>
            <button onClick={(_) => capture(pokemon)}>+</button>
          </div>
        );
      })}
    </div>
  );
};

export default PokemonList;
