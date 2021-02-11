import { useContext } from "react";
import { Pokemon } from "../@types/pokemon";
import { PokemonContextType } from "../@types/pokemonContext";
import { PokemonContext } from "../context/pokemonProvider";

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
          <div key={pokemon.id}>
            <p>{pokemon.name}</p>
            <button onClick={(_) => capture(pokemon)}>+</button>
          </div>
        );
      })}
    </div>
  );
};

export default PokemonList;
