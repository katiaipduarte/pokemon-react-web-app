import axios, { AxiosResponse } from "axios";
import { createContext, ReactNode, useEffect, useState } from "react";
import { Pokemon } from "../@types/pokemon";
import { PokemonContextType } from "../@types/pokemon-context";
import { PokemonService } from "../@types/pokemon-service";

interface PokemonProviderProps {
  children: ReactNode | ReactNode[];
}

export const PokemonContext = createContext<Partial<PokemonContextType>>({});

export const PokemonProvider = (props: PokemonProviderProps): JSX.Element => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [capturedPokemons, setCapturedPokemons] = useState<Pokemon[]>([]);

  useEffect(() => {
    const url = "https://pokeapi.co/api/v2/pokemon";
    axios
      .get(url)
      .then((response: AxiosResponse<PokemonService>) =>
        setPokemons(response.data.results)
      );
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
