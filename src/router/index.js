import {createRouter, createWebHistory} from 'vue-router'
import About from '../pages/About.vue'
import Home from '../pages/Home.vue'

const routes = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            component: Home
        },
        {
            path: "/product/:id",
            component: About,
        }
    ]
})

export default routes