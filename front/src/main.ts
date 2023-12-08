import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import './style.css'
import App from './App.vue'

import HomePage from './views/HomePage.vue'
import AboutPage from './views/AboutPage.vue'

const app = createApp(App)

const router = createRouter({
	history: createWebHistory(),
	routes: [
		{ path: '/', component: HomePage },
		{ path: '/about', component: AboutPage },
	]
})

app.use(router)
app.mount('#app')
