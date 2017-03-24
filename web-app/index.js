'use strict'

global.ServerConfig = Object.freeze(require('./config/ServerConfig.json'))

const express = require('express')
const server = express()

const Decider = require('./util/Decider')

// ###################### static
server.use(Decider.decide) //amp
server.use(express.static(ServerConfig.WEBROOT))

//###################### start the server
server.listen(ServerConfig.PORT, '0.0.0.0', function() {
	console.log('App listening on port '+ServerConfig.PORT) 
	console.log('Press Ctrl+C to quit.')
})
 
