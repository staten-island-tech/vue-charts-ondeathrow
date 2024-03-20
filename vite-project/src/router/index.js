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
      path: '/barchart',
      name: 'barchart',
      component: () => import('../views/BarChart.vue')
    },
    {
      path: '/doughnutgraph',
      name: 'doughnutgraph',
      component: () => import('../views/DoughnutGraph.vue')
    }
  ]
})

export default router