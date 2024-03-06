import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/doughnutgraph',
      name: 'doughnutgraph',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/DoughnutGraph.vue')
    },
/*     {
      path: '/barchart',
      name: 'barchart',
      component: () => import('../views/BarChart.vue')
    } */ /* 
    unblock this when vincents branch thing is committed to main 
 */  ]
})

export default router
