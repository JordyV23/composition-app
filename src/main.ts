import './assets/main.css'

import { createApp } from 'vue'
import { VueQueryPlugin } from '@tanstack/vue-query'
import App from './App.vue'
import router from './router'


const app = createApp(App)

// app.use(VueQueryPlugin)
// Con
VueQueryPlugin.install(app, {
    queryClientConfig: {
        defaultOptions: {
            queries: {
                cacheTime: 1000 * 120, //Cada 2 minutos
                refetchOnReconnect: 'always', //Cada vez que se reconecte
            }
        }
    }
})

app.use(router)

app.mount('#app')
