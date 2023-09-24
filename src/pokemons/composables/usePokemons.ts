import { computed, watchEffect } from 'vue'
import { getPokemons } from '../helpers/get-pokemons'
import { useQuery } from '@tanstack/vue-query'

export const usePokemons = () => {
  const {
    isLoading,
    data: pokemons,
    isError,
    error
  } = useQuery(['pokemons'], getPokemons, { retry: 1 })

  watchEffect(()=> {
    // console.log('pokemons', isLoading.value)
  })

  return {
    //Properties
    pokemons,
    isLoading,
    isError,
    error,
    //Computed
    count: computed(() => pokemons.value?.length ?? 0)
  }
}
