<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavBar from '@/shared/components/NavBar.vue'
import { pokemonRoute } from '../router'
import type { RouterLink } from '@/router/list-routes'

const routeLinks: RouterLink[] =
  pokemonRoute.children?.map(({ name, path, props }) => {
    
    const  { title,visible } = props as {title: string, visible:boolean}
    
    return {
      name: name?.toString() ?? '',
      path: path,
      title: title,
      visible: visible,
    }
  }) || []
</script>
<template>
  <div>
    <NavBar :is-secondary="true" :links="routeLinks" />
    <!-- <h4>Pokemon Layout</h4> -->

    <!-- <Suspense> -->
      <RouterView />

      <!-- <template #fallback> -->
        <!-- <div>Loading...</div> -->
      <!-- </template> -->
    <!-- </Suspense> -->
  </div>
</template>
