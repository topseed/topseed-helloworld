'use strict'

const express = require('express')
const server = express()
const fs = require('fs')

const C = (require('./config/ServerConfig'))
global.ServerConfig = new C();

const Decider = require('./util/Decider')

// ###################### static
server.use(Decider.decide) //amp
server.use(express.static(ServerConfig.WEBROOT))

//###################### start the server
server.listen(ServerConfig.PORT, '0.0.0.0', function() {
	console.log('App listening on port '+ServerConfig.PORT) 
	console.log('Press Ctrl+C to quit.')
})
 
