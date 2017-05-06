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

	SP.ScontentID ='#content-wrapper'

	SP.smoothPg.add(function(type, $new, delta, $html) {
		if(SP.PRE==type)  {//start
			console.log($new)
			//e.g. $('#content-wrapper').fadeTo(100,.2) 
		}
		if(SP.PAGE==type)  {//ready, set content in content-wrapper
			$(SP.ScontentID).html($new)
			//e.g. $('#content-wrapper').fadeTo(100,1)
		}
	})
}