import { useQuery } from "@tanstack/vue-query"
import { getPokemonById } from "../helpers/get-pokemon-by-id"

export const usePokemon = (id:string) => {
  const {
    isLoading,
    data: pokemon,
    isError,
    error
  } = useQuery(['pokemon', id], () => getPokemonById(id), { retry: 1 });

  return {
    //Properties
    pokemon,
    isLoading,
    isError,
    error,
  }
}
