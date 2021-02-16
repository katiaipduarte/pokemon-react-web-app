import { createContext, ReactNode, useEffect, useState } from "react";
import { Pokemon } from "../@types/pokemon";
import { PokemonContextType } from "../@types/pokemon-context";
import { PokemonResponse } from "../@types/pokemon-response";
import { getPokemon } from "../services/pokemon";

interface PokemonProviderProps {
  children: ReactNode | ReactNode[];
}

export const PokemonContext = createContext<Partial<PokemonContextType>>({});

export const PokemonProvider = (props: PokemonProviderProps): JSX.Element => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [capturedPokemons, setCapturedPokemons] = useState<Pokemon[]>([]);


  useEffect(() => {
  (getPokemon() as Promise<PokemonResponse>).then((response: PokemonResponse) => setPokemons(response.results))
  }, []);

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