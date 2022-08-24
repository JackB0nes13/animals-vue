import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: "/animals",
    name: 'animals',
    component: () => import( '../views/AnimalsTable.vue')
  },
  {
    path: "/animal/:catchAll(.*)",
    name: 'animal',
    component: () => import('../views/IndividualAnimal.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
