const prompt = require('prompt-sync')(); 
const flag = prompt("Are you still playing? ")

if (flag === 'Yes') {
    console.log(`You have chosen:\n${flag}`)
} else {
    console.log("Rest easy, Sailor")
}