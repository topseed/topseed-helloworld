'use strict'
const express = require('express')
const server = express()

const AFilter = require('./util/AFilter')

// ###################### static
server.use(AFilter.filter) //amp
server.use(express.static('www'))

//###################### start the server
const PORT = 8080
server.listen(PORT, '0.0.0.0', function() {
	console.log('App listening on port '+PORT) 
	console.log('Press Ctrl+C to quit.')
})
 
