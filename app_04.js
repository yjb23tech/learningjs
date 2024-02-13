// class
const EventEmitter = require('events'); 
const { emit } = require('process');
//obj of the above class
const emitter = new EventEmitter(); 

emitter.on('messageLogged', function() {
    console.log('Listener called'); 
})

emitter.addListener('hitMe', function() {
    console.log("I've been hit!"); 
})

emitter.addListener('Jeezy', (arg) => {
    console.log(arg.details)
})

emitter.addListener('logging', (arg) => {
    console.log(arg.data)
})

emitter.emit('messageLogged')
emitter.emit('hitMe')
emitter.emit('Jeezy', {id: 1, details: "Can't ban the snowman"})
emitter.emit('logging', {data: "FUCK THAT SHIT YOUNG NIGGA GET PAID"})