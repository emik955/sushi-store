import { createRouter, createWebHistory } from 'vue-router'
import MainPage from '../views/MainPage.vue'
import CartPage from '../views/BasketPage.vue'
import ItemPage from '../views/ItemPage.vue'
import FormReg from '../views/FormReg.vue'
import FormAuth from '../views/FormAuth.vue'
import AuthHOC from '../components/blocks/AuthHOC.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: <AuthHOC>
      <MainPage />
    </AuthHOC>
  },
  {
    path: '/cart',
    name: 'cart',
    component: CartPage
  },
  {
    path: '/item',
    name: 'item',
    component: ItemPage
  },
  {
    path: '/reg',
    name: 'reg',
    component: FormReg
  },
  {
    path: '/auth',
    name: 'auth',
    component: FormAuth
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
