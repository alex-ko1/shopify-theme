import {createRouter, createWebHistory} from 'vue-router'
import MainPage from '@/pages/index.vue'
import AboutUs from "@/pages/about-us.vue";

export default createRouter({
  history:createWebHistory(),
  routes: [
    {
      path: '/',
      component: MainPage,
      name: 'index'
    },
    {
      path: '/pages/about-us',
      alias: '/uk/pages/about-us',
      component: AboutUs,
    }
  ]
})
