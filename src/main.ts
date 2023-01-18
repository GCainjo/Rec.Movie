import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import Router from './router/index'
import { createPinia } from 'pinia'

import './index.css'

const pinia = createPinia()
const app = createApp(App)


app.use(Router)
app.use(pinia)
app.mount('#app')
