import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Perfil from '@/views/Perfil.vue'
import About from '@/views/About.vue'
import Config from '@/views/Config.vue'

import Login from '@/LoginPage/Login.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/perfil', name: 'Perfil', component: Perfil}, 
  { path: '/config', name: 'Config', component: Config}, 
  { path: '/about', name: 'About', component: About}, 
  //temporario
  { path: '/login', name: 'Login', component:Login}
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
