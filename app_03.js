const fs = require('fs')

//sync
// const files = fs.readdirSync('./')

fs.readdir('$', function(err, files) {
    if (err) {
        console.log('Error', err)
    } else {
        console.log('Result', files)
    }
})