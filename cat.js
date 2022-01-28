const fs = require('fs')

module.exports = (filename) => {
    fs.readFile('./'+ filename, (err,data) => {
        if (err) {
            console.log(`Error is ${error}`)
        } else {
            console.log(data.toString())
        }
    })
}