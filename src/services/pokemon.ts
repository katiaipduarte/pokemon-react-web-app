import axios, { AxiosResponse } from "axios";
import { PokemonResponse } from "../@types/pokemon-response";

const url = "https://pokeapi.co/api/v2/pokemon";

export const getPokemon = async(): Promise<PokemonResponse | void> => {
  try {
    return await axios
    .get(url)
    .then((response: AxiosResponse<PokemonResponse>) => {
      return response.data;
    })
    .catch(error => {
      handleResponseError(error);
    });
  } catch(e) {
    handleError(e)
  }
  
}

const handleResponseError = (response: any): void => {
  throw new Error("HTTP error, status = " + response.status);
};

const handleError = (error: any): void => {
  console.log(error.message);
};