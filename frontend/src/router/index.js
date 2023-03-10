import { createRouter, createWebHistory } from 'vue-router'
import Businesses from '../views/Businesses.vue'
import BusinessView from '../views/Business.vue'
import UserView from '../views/User.vue'
const routes = [
  {
    path: '/',
    name: 'Businesses',
    component: Businesses
  },
  {
    path: '/businesses/:id',
    name: 'BusinessView',
    component: BusinessView
  },
  {
    path: '/users/:id',
    name: 'UserView',
    component: UserView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
