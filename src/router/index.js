import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Catalog from '../components/catalog.vue'
import Cart from '../components/cart.vue'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/catalog',
    name: 'Catalog',
    component: Catalog
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart,
    props: true
  },

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
