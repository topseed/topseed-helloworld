'use strict'

const express = require('express')
const server = express()
const fs = require('fs')

global.ServerConfig = Object.freeze({ /* defaults */
		"WEBROOT": "helloworld-webroot",
		"PORT": 8081,
		"WEB_SUBDOMAIN": "www",
		"AMP_SUBDOMAIN": "www", /* change to "m" in ServerConfig.json if in DNS */
		"AMP_IS_DEFAULT": false
	})
if (fs.existsSync('./config/ServerConfig.json'))
	global.ServerConfig = Object.freeze(require('./config/ServerConfig.json'))

const Decider = require('./util/Decider')

// ###################### static
server.use(Decider.decide) //amp
server.use(express.static(ServerConfig.WEBROOT))

//###################### start the server
server.listen(ServerConfig.PORT, '0.0.0.0', function() {
	console.log('App listening on port '+ServerConfig.PORT) 
	console.log('Press Ctrl+C to quit.')
})
 
