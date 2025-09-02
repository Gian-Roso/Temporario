import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Login from '@/LoginPage/Login.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },

  //temporario
  { path: '/', name: 'Login', component:Login}
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
