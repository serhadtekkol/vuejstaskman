import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/home.vue'
import dashboard from '../views/dashboard.vue'
import categories from '../views/Categories.vue'
import Login from '../views/login.vue'
import store from "../store/store.js"

const router = createRouter({
    history: createWebHistory(
        import.meta.env.BASE_URL),
    routes: [{
            path: '/',
            name: 'Dashboard',
            component: dashboard,
            beforeEnter(to, from, next) {
                if (store.getters.isAuthenticated) {
                    next(true)

                } else {

                    next("/login")

                }

            }
        },
        {
            path: '/categories',
            name: 'categories',
            component: categories
        },
        {
            path: '/about',
            name: 'about',

            component: Home
        },
        {
            path: '/login/:error?',
            name: 'loginpage',
            component: Login

        }

    ]
})




export default router