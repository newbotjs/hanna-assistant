import io from 'socket.io-client'

export class NewBot {
    constructor(url) {
        this.io = io(url)
        this._cb = false
    }

    exec(text, cb) {
        if (!this._cb) {
            this.io.on('message', cb)
            this._cb = true
        }
        this.io.emit('message', text)
    }
}