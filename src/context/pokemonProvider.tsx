import { createContext, ReactNode, useState } from "react";
import { Pokemon } from "../@types/pokemon";
import { PokemonContextType } from "../@types/pokemonContext";

interface PokemonProviderProps {
  children: ReactNode | ReactNode[];
}

export const PokemonContext = createContext<Partial<PokemonContextType>>({});

export const PokemonProvider = (props: PokemonProviderProps): JSX.Element => {
  const defaultPokemons: Pokemon[] = [
    { id: 1, name: "Bulbasaur" },
    { id: 2, name: "Charmander" },
    { id: 3, name: "Squirtle" },
  ];
  const [pokemons, setPokemons] = useState<Pokemon[]>(defaultPokemons);
  const [capturedPokemons, setCapturedPokemons] = useState<Pokemon[]>([]);

  const providerValue = {
    pokemons,
    setPokemons,
    capturedPokemons,
    setCapturedPokemons,
  };
  return (
    <PokemonContext.Provider value={providerValue}>
      {props.children}
    </PokemonContext.Provider>
  );
};
