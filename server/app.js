var express = require('express')
// var proxy = require('express-http-proxy')
var app = express()

// if (reset) {
//     app = express()
// } 

/**
  * Middleware
  */
//  app.engine('html', require('ejs').renderFile)
//  app.set('views', path.join(__dirname, './views'))

function start(done, passport) {

  server = app.listen( 3000, function () {
    
  })

  server.once('listening', function () {
    console.log("Listening on port 3000...")

    if(done)
      done()
  })
}

function setup() {
  app.get('/', function(req, res) {
    res.send("Request sent from porxy.")
  })
}

module.exports = {
  start,
  setup
}
