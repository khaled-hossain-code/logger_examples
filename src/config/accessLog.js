var fs = require('fs')
var morgan = require('morgan')
var path = require('path')

// create a write stream (in append mode)
var accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' })
 
module.exports = morgan('combined', { stream: accessLogStream });