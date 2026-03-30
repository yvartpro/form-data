import { createRouter, createWebHistory } from 'vue-router'
import HomeVue from '../views/HomeVue.vue'

const routes = [
  { path: "/", component: HomeVue, name: "HomePage" }
]
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
