'use strict'

loadjs.ready(['dependencyNotChrome', 'keyLibs'], {// loaded setup libs
	success: function(){
	loadjs([
		//dbind:
		'https://www.masons-foundation.org/_js/libJs/jquery.jsForm.min.js'

		,'//cdn.jsdelivr.net/jquery.transit/0.9.12/jquery.transit.min.js'

		], { success: function(){
			console.log('loaded libs')
			startApp()
		}
	})//loadjs
	}//suc
})

//====================================================================
function startApp(){
	// READY ///////////////////////////////////////////////////////////
	A.loaded=true
	A.act(A.LOADED)

	console.log('v17.02a')
	//>====================================================================
	//SS
	var ssoptions={
		debug: true,
		prefetch: true,
		cacheLength: 3,
		repeatDelay: 450,

		onStart: {
			duration: 0, 
			render: function (url, $container)  {
				//console.log('-> ')
				A.act(A.PRE) //action
				A.inAction=true

				$('#content-wrapper').fadeTo(1000/60,.2)

			}//r
		},//onS
		onReady: {
			duration: 0,
			render: function ($container, $newContent) {
				$container.html($newContent)
				$('content-wrapper').fadeTo(1000/30,1)

				A.act(A.PAGE)// main action
				A.inAction= false

				//console.log('% <-')
			}//ren
		}//ready()
	}//sso
	
	var smoothState= $('#ss1').smoothState(ssoptions)

}//startApp()

//====================================================================
