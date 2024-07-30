import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import MenuView from '../views/MenuView.vue'
import PedidoComponent from '../views/ConfiguracaoPedido.vue'
import PedidosView from '../views/PedidosView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/menu',
    name: '/menu',
    component: MenuView
  },
  {
    path: '/sobre',
    name: '/sobre',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: AboutView
    
  },
  {
    path: '/config-pedido',
    name: '/config-pedido',
    component: PedidoComponent
  },
  {
    path: '/pedidos',
    name: '/pedidos',
    component: PedidoComponent
  },
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
