import Chat from './MainContainer.vue'
import storeObj from '../../store'
import bus from '../../bus'

import '../../assets/theme.css'
import 'perfect-scrollbar/css/perfect-scrollbar.css'

const Chatbox = {
    install(Vue, { store }) {
        Vue.component('Chatbox', Chat)
        Vue.prototype.$bus = bus
        if (!store) {
            throw new Error("Please provide vuex store.");
        }
        store.registerModule('chatbox', storeObj);
    }
};

export default Chatbox;