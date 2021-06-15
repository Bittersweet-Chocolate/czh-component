/*
 * @Author: czh
 * @Date: 2021-06-08 21:00:08
 * @LastEditTime: 2021-06-15 23:44:43
 * @LastEditors: czh
 * @Description: 
 */
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Home from '@/views/Home.vue'
// import Buttons from '@/views/Buttons.vue'
// import Tooltips from '@/views/Tooltips.vue'
// import Messages from '@/views/Messages.vue'
// import Tabs from '@/views/Tabs.vue'
// import Loading from '@/views/Loading.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  // {
  //   path: '/buttons',
  //   name: 'Buttons',
  //   component: Buttons
  // },
  // {
  //   path: '/messages',
  //   name: 'Messages',
  //   component: Messages
  // },
  // {
  //   path: '/tooltips',
  //   name: 'Tooltips',
  //   component: Tooltips
  // },
  {
    path: '/tabs',
    name: 'Tabs',
    component: () => import(/* webpackChunkName: "tabs" */ '@/views/Tabs.vue')
  },
  {
    path: '/loading',
    name: 'Loading',
     component: () => import(/* webpackChunkName: "loading" */ '@/views/Loading.vue')
  }
  // {
  //   path: '*',
  //   redirect: '/'
  // },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
