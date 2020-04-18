import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'
import Buttons from '@/views/Buttons'
import Tooltips from '@/views/Tooltips'
import Messages from '@/views/Messages'
import Tabs from '@/views/Tabs'
import Loading from '@/views/Loading'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/buttons',
    name: 'Buttons',
    component: Buttons
  },
  {
    path: '/messages',
    name: 'Messages',
    component: Messages
  },
  {
    path: '/tooltips',
    name: 'Tooltips',
    component: Tooltips
  },
  {
    path: '/tabs',
    name: 'Tabs',
    component: Tabs
  },
  {
    path: '/loading',
    name: 'Loading',
    component: Loading
  },
  {
    path: '*',
    redirect: '/'
  },
]

const router = new VueRouter({
  mode: 'hash',
  // base: process.env.BASE_URL,
  routes
})

export default router
