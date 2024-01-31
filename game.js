// infra
const prompt = require('prompt-sync')(); 

// run program 

console.log("Escape from Greed Island -_____-")
let action_input = prompt("Action: ")

if (action_input === "North") {
    console.log("You're travelling North")
} else if (action_input === "East") {
    console.log("You're travalling East")
} else if (action_input === "South") {
    console.log("You're travelling South")
} else if (action_input === "West") {
    console.log("You're travelling West")
} else {
    console.log("No adequate response found")
}

let randomDie = Math.floor((Math.random() * 6))
console.log(randomDie)