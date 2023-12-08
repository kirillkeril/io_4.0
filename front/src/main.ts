import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import { createPinia } from 'pinia'

import './style.css'
import './assets/Inter/Inter.sass'
import './assets/sass/reset.sass'
import App from './App.vue'

import HomePage from './views/HomePage.vue'
import AboutPage from './views/AboutPage.vue'
import UiPage from './views/UiPage.vue'

const pinia = createPinia()
const app = createApp(App)

const router = createRouter({
	history: createWebHistory(),
	routes: [
		{ path: '/', component: HomePage },
		{ path: '/about', component: AboutPage },
		{ path: '/ui', component: UiPage },
	]
})

app.use(router)
app.use(pinia)
app.mount('#app')
