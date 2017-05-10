'use strict'
loadjs.ready(['dependencyIE', 'keyLibs'], {// loaded setup libs
	success: function(){

		loadjs([

			//e.g. data
			'/_js/vendor/jquery.jsForm.min.js'

			], { success: function(){
				console.log('Loaded libs')
				libsLoaded()
			}
	})//loadjs
	}//suc
})

function libsLoaded(){
	
	loadjs.done('app-ready') // notify pages that all libs are loaded

	//shellcache. When not using shellcache, comment out the following:
	TT.ScontentID ='#content-wrapper'

	TT.smoothPg.add(function(type, $new, delta, $html) {
		if (TT.PRE==type)  {//start
			console.log($new)
			//e.g. $('#content-wrapper').fadeTo(100,.2) 
		}
		if(TT.PAGE==type)  {//ready, set content in content-wrapper
			$(TT.ScontentID).html($new)
			//e.g. $('#content-wrapper').fadeTo(100,1)
		}
	}) //end shellcache
}