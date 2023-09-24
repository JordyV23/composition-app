<script setup lang="ts">
import { /*toRef,*/ computed } from 'vue'
import { RouterLink } from 'vue-router'
//Cuando se importa una interfaz es mejor utilizar el type
import type { RouterLink as RouterLinkInterface } from '@/router/list-routes'

interface Props {
  title?: string
  links?: RouterLinkInterface[]
  isSecondary?: boolean
}
const props = withDefaults(defineProps<Props>(), {
  title: 'CompoApp',
  isSecondary: false
})

// const links = toRef(props, 'links');

const links = computed(() => props.links?.filter((link) => link.visible))
</script>

<template>
  <nav>
    <template v-if="!$props.isSecondary">
      <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="25" height="25" />
      <!-- ? Manera 1 -->
      <!-- <span v-if="$props.title" >{{ $props.title }}</span>
        <span v-else > App </span> -->

      <!-- ? Manera 2 -->
      <!-- <span>{{ $props.title || 'CompoApp' }}</span> -->

      <!-- ? Manera 3 -->
      <span>{{ $props.title }}</span>
    </template>

    <RouterLink v-for="link of links" :to="link.path" :key="link.name">
      {{ link.title }}
    </RouterLink>
  </nav>
</template>

<style scoped>
nav {
  align-items: flex-start;
  display: flex;
  font-size: 12px;
  margin-top: 10px;
  text-align: center;
  width: 100%;
}

img {
  margin-left: 5px;
  margin-right: 5px;
}

span {
  margin-right: 10px;
}

a {
  margin-right: 5px;
}

nav a.router-link-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}
</style>
