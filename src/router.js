import Vue from 'vue'
import Router from 'vue-router'
import Prices from './views/prices.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'prices',
      component: Prices
    },
    {
      path: '/wallet',
      name: 'wallet',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/wallet.vue')
    },
    {
      path: '/account',
      name: 'account',
      component: () => import(/* webpackChunkName: "about" */ './views/account.vue')
    }
  ],
  mode: 'history'
})
