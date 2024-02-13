
const EventEmitter = require('events')

class Loggger extends EventEmitter {

 log(message) {
    //send a HTTP request 
    console.log(message)

    // raise an event
    this.emit('messageLogged', {id: 1, data: "FUCK THAT SHIT YOUNG NIGGA GET PAID"})
}

}

module.exports = Loggger

