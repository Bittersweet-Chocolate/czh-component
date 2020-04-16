import Vue from 'vue'
import App from './App.vue'
import router from './router'
import cButton from '@/components/cButton/cButton'
import cMessage from '@/components/cMessage/cMessage'
import cTooltip from '@/components/cTooltip/cTooltip'
import cLoading from '@/components/cLoading/cLoading'
Vue.config.productionTip = false

Vue.component('cButton', cButton)
Vue.component('cMessage', cMessage)
Vue.component('cTooltip', cTooltip)
Vue.component('cLoading', cLoading)
Vue.prototype.$message = ({
  type = 'success',
  text = ''
}) => {
  createMessage({
    type,
    text
  })
}

function createMessage (propsData) {
  const Constructor = Vue.extend(cMessage)
  const msg = new Constructor({
    propsData
  })
  msg.$mount()
  document.body.appendChild(msg.$el)
  return msg
}

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
