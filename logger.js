
console.log(__filename)
console.log(__dirname)

var url = "http://mylogger.io/log"

function log(message) {
    //send a HTTP request 
    console.log(message)
}

module.exports.log = log
module.exports.url = url

