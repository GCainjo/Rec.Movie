import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import Router from './router/index'
import './index.css'

createApp(App)
	.use(Router)
	.mount('#app')
