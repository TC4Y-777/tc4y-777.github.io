import { createRouter, createWebHistory } from "vue-router"

import HelloWorld from '@/components/HelloWorld.vue'
import HomePage from '@/components/HomePage.vue'
import About from '@/components/About.vue'

const routes = [
    // Remove unwanted paths after testing
    {
        path: '/hello',
        name: 'hello',
        component: HelloWorld
    },
    {
        path: '/home',
        name: 'home',
        component: HomePage
    },
    {
        path: '/about',
        name: 'about',
        component: About
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
