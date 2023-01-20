import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import Router from './router/index'
import { createPinia } from 'pinia'

import './index.css'


import VueAwesomePaginate from "vue-awesome-paginate";
import "vue-awesome-paginate/dist/style.css";

const pinia = createPinia()
const app = createApp(App)


app.use(Router)
app.use(pinia)
app.use(VueAwesomePaginate)
app.mount('#app')
