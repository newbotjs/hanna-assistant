import App from './App.vue'
import bus from './bus'
import Vuex from 'vuex'
import store from './store'
import { NewBot } from './core/bridge'

import '../theme/styles/prebuilt/default.scss'

const Assistant = {
    install(Vue, {
        url = 'http://localhost:3000'
    } = {}) {
        Vue.use(Vuex)
        Vue.component('HannaAssistant', App)
        Vue.prototype.$bus = bus
        Vue.prototype.$store = new Vuex.Store(store)

        const client = new NewBot(url)
        bus.$on('send', msg => {
            client.exec(msg, (output) => {
                bus.$emit('reply', output)
            })
        })
    }
};

export default Assistant;