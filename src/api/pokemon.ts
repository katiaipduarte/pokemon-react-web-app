import axios, { AxiosResponse } from "axios";
import { PokemonService } from "../@types/pokemon-service";

export function getPokemon() {
  return axios
    .get("https://pokeapi.co/api/v2/pokemon")
    .then((response: AxiosResponse<PokemonService>) => response.data.results);
}
