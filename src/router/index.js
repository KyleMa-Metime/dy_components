import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'

Vue.use(VueRouter)
const Home = () => import('../views/Home.vue')
const Category = () => import('../views/Category.vue')
const Play = () => import('../views/Play.vue')
const Profile = () => import('../views/Profile.vue')

const routes = [{
        path: '',
        redirect: '/home'
    },
    {
        path: '/home',
        component: Home
    },
    {
        path: '/category',
        component: Category
    },
    {
        path: '/play',
        component: Play
    },
    {
        path: '/profile',
        component: Profile
    },

]


const router = new VueRouter({
    mode: 'history',
    routes
})

export default router