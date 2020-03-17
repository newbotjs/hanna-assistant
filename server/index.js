const express = require('express')
const { NewBotExpressServer } = require('newbot-express')
const { NewBot } = require('newbot')

const app = express()

const newbotServer = new NewBotExpressServer(app, {
    botPath: __dirname,
}, new NewBot({
    code: `
        @Event('start')
        start() {
            > Hello
        }
    `
}))

newbotServer.registerRoutes()

app.listen(3000, () => {
    // eslint-disable-next-line no-console
    console.log('Ok !')
})

