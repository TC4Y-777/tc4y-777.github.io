import { createRouter, createWebHistory } from "vue-router"

import HelloWorld from '@/components/HelloWorld.vue'
import HomePage from '@/components/HomePage.vue'
import About from '@/components/About.vue'
import Projects from '@/components/Projects.vue'
import ContactMe from '@/components/ContactMe.vue'
import PageNotFound from '@/components/PageNotFound.vue'

const routes = [
    // Remove unwanted paths after testing
    // {
    //     path: '/hello',
    //     name: 'hello',
    //     component: HelloWorld
    // },
    {
        path: '/',
        redirect: '/home'
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
    },
    {
        path: '/projects',
        name: 'projects',
        component: Projects
    },
    {
        path: '/contact',
        name: 'contact',
        component: ContactMe
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'pagenotfound',
        component: PageNotFound
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
