/*
 * @Author: czh
 * @Date: 2021-06-08 21:53:12
 * @LastEditTime: 2021-06-21 00:14:35
 * @LastEditors: czh
 * @Description: 
 */
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import cLoading from '@/components/cLoading/index.vue'
import cButton from '@/components/cButton/index.vue'

const app = createApp(App)
app.use(router) // 安装路由模块
app.mount('#app')
app.component('c-loading', cLoading) // 注册全局组件
app.component('c-button', cButton) // 注册全局组件
