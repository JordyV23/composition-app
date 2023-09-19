<script setup lang="ts">
import pokemonApi from '../api/pokemonApi'
import type { PokemonsListResponse } from '../interfaces/pokemons-list.response'

pokemonApi.get<PokemonsListResponse>('/pokemon?limit=45').then((resp) => console.log(resp.data.results))
</script>
<template>
  <div>
    <h1>Pokemon List</h1>
  </div>
</template>
