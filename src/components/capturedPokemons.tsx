import { useContext } from "react";
import { Pokemon } from "../@types/pokemon";
import { PokemonContextType } from "../@types/pokemonContext";
import { PokemonContext } from "../context/pokemonProvider";

const CapturedPokemons = (): JSX.Element => {
  const {
    pokemons,
    setPokemons,
    capturedPokemons,
    setCapturedPokemons,
  } = useContext(PokemonContext) as PokemonContextType;

  const releasePokemon = (releasedPokemon: Pokemon): Pokemon[] => {
    return capturedPokemons.filter(
      (pokemon: Pokemon) => pokemon !== releasedPokemon
    );
  };

  const release = (pokemon: Pokemon): void => {
    setCapturedPokemons(releasePokemon(pokemon));
    setPokemons([...pokemons, pokemon]);
  };

  return (
    <div className="pokedex">
      <h2>Captured Pokemons</h2>
      {capturedPokemons.map((pokemon: Pokemon) => {
        return (
          <div key={pokemon.id}>
            <p>{pokemon.name}</p>
            <button onClick={(_) => release(pokemon)}>-</button>
          </div>
        );
      })}
    </div>
  );
};

export default CapturedPokemons;
