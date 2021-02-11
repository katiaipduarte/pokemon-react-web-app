export interface PokemonContextType {
  pokemons: Pokemon[];
  setPokemons: Dispatch<SetStateAction<Pokemon[]>>;
  capturedPokemons: Pokemon[];
  setCapturedPokemons: Dispatch<SetStateAction<Pokemon[]>>;
}
