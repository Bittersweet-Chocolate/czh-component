import Vue from 'vue'
import App from './App.vue'
import router from './router'
import cButton from '@/components/cButton/cButton'
import cMessage from '@/components/cMessage/cMessage'

Vue.config.productionTip = false

Vue.component('cButton', cButton)
Vue.component('cMessage', cMessage)
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
