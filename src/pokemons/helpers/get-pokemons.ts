import axios from 'axios'
import pokemonApi from '../api/pokemonApi'
import type { Pokemon, PokemonReponse, PokemonsListResponse } from '../interfaces'
// import { sleep } from './sleep'

export const getPokemons = async (): Promise<Pokemon[]> => {

  // await sleep(2);

  // throw new Error('Error al cargar los pokemons');

  const { data } = await pokemonApi.get<PokemonsListResponse>('/pokemon?limit=45')

  const pokemonPromises: Promise<Pokemon>[] = []

  for (const { url } of data.results) {
    const pokemonPromise = axios.get<PokemonReponse>(url).then(({ data }) => {
      return {
        id: data.id,
        name: data.name,
        frontSprite: data.sprites.front_default
      }
    })

    pokemonPromises.push(pokemonPromise)
  }

  const pokemons = await Promise.all(pokemonPromises)

  return pokemons
}
