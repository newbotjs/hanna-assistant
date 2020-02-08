import bus from './bus'

export default {
    state: {
        messages: []
    },
    getters: {
        messages(state) {
            return state.messages
        },
        length(state) {
            return state.messages.length
        }
    },
    mutations: {
        addMessage(state, message) {
            state.messages = [...state.messages, message]
        },
        reset(state) {
            state.messages = []
        },
        addUserMessage(state, message) {
            state.messages = [...state.messages, {
                data: {
                    text: message
                },
                isUser: true,
                date: new Date()
            }]
            bus.$emit('send', message)
        }
    }
}