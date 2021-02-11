export interface PokemonService {
  count: number;
  next: string;
  previous: number | null;
  results: Pokemon[];
}
