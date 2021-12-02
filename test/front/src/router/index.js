import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Web3 from '../views/Web3.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/web3',
    name: 'Web3',
    component: Web3
  },
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
