<script setup lang="ts">
import { useRoute } from 'vue-router'
import { usePokemon } from '../composables/usePokemon'

const route = useRoute()
const { id } = route.params
const { isLoading, isError, error, pokemon } = usePokemon(id.toString())
</script>
<template>
  <h1 v-if="isLoading">Cargando...</h1>

  <div v-else-if="isError">
    {{ error }}
  </div>

  <div v-else>
    <h1>{{ pokemon?.name }}</h1>

    <div class="character-container">
      <img :src="pokemon?.frontSprite" :alt="pokemon?.name" />
    </div>
  </div>
</template>

<style scoped>
.character-container {
  display: flex;
  flex-direction: row;
}

img {
  width: 150px;
  border-radius: 5px;
}
</style>
