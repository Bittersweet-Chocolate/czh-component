/*
 * @Author: czh
 * @Date: 2021-06-08 21:00:08
 * @LastEditTime: 2021-06-21 00:32:16
 * @LastEditors: czh
 * @Description: 
 */
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Home from '@/views/Home.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/buttons',
    name: 'Buttons',
    component: () => import(/* webpackChunkName: "buttons" */ '@/views/Buttons.vue')
  },
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
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
