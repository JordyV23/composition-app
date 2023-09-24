import pokemonApi from '../api/pokemonApi'
// import { usePokemons } from '../composables/usePokemons'
import type { PokemonReponse } from '../interfaces'
import type { Pokemon } from '../interfaces/pokemons'

export const getPokemonById = async (id: string): Promise<Pokemon> => {
  const { data } = await pokemonApi.get<PokemonReponse>(`/pokemon/${id}`)

  return {
    id: data.id,
    name: data.name,
    frontSprite: data.sprites.front_default
  }
}
