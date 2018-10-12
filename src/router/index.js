import Vue from 'vue'
import Router from 'vue-router'

// import Home from '../components/Home'
// import About from '../components/About'
// import ProductShow from '../components/ProductShow'
// import ProductIndex from '../components/ProductIndex'

import Prices from '../views/prices'
import Account from '../views/account'
import Wallet from '../views/wallet'

import { defaultLocale } from '../config/i18n'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            redirect: `/${defaultLocale}`,
        },
        {
            path: '/:locale',
            component: {
                template: '<router-view />',
            },
            children: [
                {
                    //path: '',
                    //component: Home,
                    path: '',
                    component: Prices,
                },
                {
                    // path: 'products/:id',
                    // component: ProductShow,
                    path: 'account',
                    component: Account,
                },
                {
                    // path: 'products',
                    // component: ProductIndex,
                    path: 'wallet',
                    component: Wallet,
                },
            ],
        },
    ],
})
