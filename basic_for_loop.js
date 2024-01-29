const prompt = require('prompt-sync')(); 

let pandoraMusic = ['American Dreaming', 'H To The Izzo', '99 Problems']

for (let i = 0; i < pandoraMusic.length; i++) {
    console.log(pandoraMusic[i])
}

let user_name = prompt("What is your name?\n")
console.log(`Your name is ${user_name}`)

