'use strict'
const express = require('express')
const server = express()
var fetch = require('node-fetch')

const CDS = require('./webroot/_js/CDS')

// ###################### 

/* optional:
const scribe = require('scribe-js')()
const console = process.console
server.use(scribe.express.logger()) //Log each request for now
server.use('/logs', scribe.webPanel())
const debug = require('debug')('my-app')
debug('oh hi')
*/

// ###################### static
server.use(express.static('webroot'))

//###################### start the server
const PORT1 = 8080
server.listen(PORT1, '0.0.0.0', function() {
	console.log('App listening on port '+PORT1)
	console.log('Press Ctrl+C to quit.')
})

const ROOT = 'http://jsonplaceholder.typicode.com/'
class Page1CDS extends CDS {
	doFetch() {
		return CDS.fetch(fetch, ROOT, 'comments')
			.then(function(value) { 
				console.log('back')
				console.log(JSON.stringify(value))
				return value
		})//CDS
	}//doFetch
}//class

const _cds = new Page1CDS()
const pro = _cds.doFetch()
pro.then(function(val) {
	console.log(val)
}).catch(function (er) {
	console.log(er)
})//c
