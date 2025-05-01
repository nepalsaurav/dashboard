import { createWebHashHistory, createRouter } from 'vue-router'

import HomeView from "./pages/HomeView.vue"
import WidgetView from "./pages/WidgetView.vue"

const routes = [
    { path: '/', component: HomeView, redirect: "/widget/home" },
    { path: '/widget/:name', component: WidgetView },
  ]
  
export const router = createRouter({
    history: createWebHashHistory(),
    routes,
})