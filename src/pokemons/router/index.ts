import type  { RouteRecordRaw } from 'vue-router';

const ROUTE_NAME = 'pokemons';

export const pokemonRoute: RouteRecordRaw = {
    path: `/${ROUTE_NAME}`,
    component: () => import('@/pokemons/layouts/PokemonLayout.vue'),
    redirect: `/${ROUTE_NAME}/list`,
    //Rutas hijas
    children: [
        {
            path: `/${ROUTE_NAME}/list`,
            props: { title:'Listado' },
            name: 'pokemon-list',
            component: () => import('@/pokemons/pages/PokemonList.vue')
        },
        {
            path: `/${ROUTE_NAME}/list-native`,
            props: { title:'Listado Nativo' },
            name: 'pokemon-list-native',
            component: () => import('@/pokemons/pages/PokemonListNative.vue')
        },
        {
            path: `/${ROUTE_NAME}/by/:id`,
            props: { title: 'Pokemon By Id'},
            name: 'pokemon-id',
            component: () => import('@/pokemons/pages/PokemonById.vue')
        },
        {
            path: `/${ROUTE_NAME}/search`,
            props: { title: 'Busqueda'},
            name: 'pokemon-search',
            component: () => import('@/pokemons/pages/PokemonSearch.vue')
        },
    ]
}