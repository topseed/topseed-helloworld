'use strict'
const express = require('express')
const server = express()

const Decider = require('./util/Decider')

// ###################### static
server.use(Decider.decide) //amp
server.use(express.static('www'))

//###################### start the server
const PORT = 8080
server.listen(PORT, '0.0.0.0', function() {
	console.log('App listening on port '+PORT) 
	console.log('Press Ctrl+C to quit.')
})
 
