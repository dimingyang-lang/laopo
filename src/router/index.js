import { createRouter, createWebHistory,createWebHashHistory } from 'vue-router'
import login from '../pages/login.vue'

const routes = [
  {
    path: '/',
    name: 'login',
    component: login
  },
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes
})

export default router
