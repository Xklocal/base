import { createRouter, createWebHistory } from 'vue-router'
import { adminRouter } from './admin'
import home from '../views/Home/home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: adminRouter,
})

export default router
