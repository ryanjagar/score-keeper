import Vue from 'vue'
import App from './App'
import vuetify from '../src/plugins/vuetify' // path to vuetify export



Vue.config.productionTip = false


new Vue({
  vuetify,
  el: '#app',
  render: h => h(App)
})