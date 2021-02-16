export interface PokemonResponse {
  count: number;
  next: string;
  previous: number | null;
  results: Pokemon[];
}
