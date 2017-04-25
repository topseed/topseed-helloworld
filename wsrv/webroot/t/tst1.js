
// class:
const ROOT = 'http://jsonplaceholder.typicode.com/'
class Page1BDS extends BDS {
	doFetch() {
		return BDS.fetch(window.fetch, ROOT, 'comments')
			.then(function(value) { 
				console.log('back')
				console.log(JSON.stringify(value))
				return value
		})//BDS
	}//doFetch
}//class

//tst
const _BDS = new Page1BDS()
QUnit.test( 'test: fetch()', function( assert ) {
	assert.expect(0)
	var done = assert.async()

	const pro = _BDS.doFetch()
	pro.then(function(val) {
		console.log(val)
	}).catch(function (er) {
		console.log(er)
	})//c

	var val = ''
	//assert.ok( val, 'we got something, check console' )
	done()
})
