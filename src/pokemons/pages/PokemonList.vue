<script setup lang="ts">
import { useQuery } from '@tanstack/vue-query'
import { getPokemons } from '../helpers/get-pokemons'

// import { usePokemons } from '../composables/usePokemons'
import { computed } from 'vue'

// const { count, pokemons, isLoading } = usePokemons()

const { isLoading, data: pokemons } = useQuery(['pokemons'], getPokemons)

const count = computed(() => pokemons.value?.length ?? 0);
</script>
<template>
  <div>
    <h1>Pokemon List - {{ count }}</h1>

    <h3 v-if="isLoading">Cargando</h3>

    <ul>
      <li v-for="pokemon in pokemons" :key="pokemon.id">
        {{ pokemon.name }}
      </li>
    </ul>
  </div>
</template>
