
export class Recognition {
    constructor() {
        const SpeechRecognition = window.webkitSpeechRecognition || window.SpeechRecognition;
        this.recognition = new SpeechRecognition();
        this.recognition.interimResults = true;
        this.recognition.maxAlternatives = 10;
        this.recognition.continuous = true;
        this.recognition.onresult = this.result.bind(this)
    }
    result(event) {
        let str = '';
        for (let i = event.resultIndex, len = event.results.length; i < len; i++) {
            let transcript = event.results[i][0].transcript;
            str += transcript;
        }
        return str
    }
    start() {
        this.recognition.start()
    }
}