//this must be run as http, as our service is only http, it will not work w/ https

QUnit.test( 'asynchronous test: fetch()', function( assert ) {
	done = assert.async()
	tstGet()
})//tst

function tstGet() {
	fetch('//jsonplaceholder.typicode.com/comments', { //1 call
			method: 'get'
		}).then(function(response) { //2 return a promise
			return (response.json())
			}).then(function(value) { // 3 done:
				// your code here:
				console.log('back')
				console.log(JSON.stringify(value))
				assert.ok( JSON.stringify(value), 'we got something back, check console' )
				done()
		}).catch(function(err) {
			console.log('error')
			console.log(err)
	})//fetch()
}//()