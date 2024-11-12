export const adminRouter = [
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
]
