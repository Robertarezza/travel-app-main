import { createRouter, createWebHistory } from "vue-router";

import HomePage from "./pages/HomePage.vue";
import Map from "./components/Map.vue";
import ListMap from "./components/ListMap.vue";


const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            name: "home",
            component: HomePage,
        },
        {
            path: "/map",
            name: "map",
            component: Map,
        },
        {
            path: "/listmap",
            name: "listmap",
            component: ListMap,
        },
       
    ],

    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition;
        } else {
            return {
                top: 0
            };
        }
    },

    
})

export { router }