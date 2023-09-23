<script setup lang="ts">
import type { Pokemon } from '../interfaces'
import PokemonCard from './PokemonCard.vue'

interface Props {
  pokemons: Pokemon[]
}

defineProps<Props>()
</script>

<template>
  <div class="card-list">
    <span v-for="pokemon of $props.pokemons" :key="pokemon.id">
      <PokemonCard :pokemon="pokemon" />
    </span>
  </div>
</template>

<style scoped>
.card-list {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
</style>
