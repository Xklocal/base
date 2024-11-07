import { createRouter, createWebHistory } from 'vue-router'
import home from '../views/Home/home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: home,
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('@/views/Shop/about.vue'),
    },
  ],
})

export default router
