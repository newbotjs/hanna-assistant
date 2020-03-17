import Vue from 'vue'
import App from './App.vue'
import plugin from './plugin'
import '../theme/styles/prebuilt/default.scss'

Vue.config.productionTip = false

Vue.use(plugin)

new Vue({
  render: h => h(App)
}).$mount('#app')