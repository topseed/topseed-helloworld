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
	$('#navPrev').click(function(e) { 
		console.log('#navPrev')
		toggleSide()
	})
	// READY ///////////////////////////////////////////////////////////
	A.loaded=true
	A.act(A.LOADED)

	var $body=$('body')
	$body.fadeTo(20,1)

	//>====================================================================
	//SS
	let ssoptions={
		debug: true,
		prefetch: true,
		cacheLength: 3,
		repeatDelay: 450,

		onStart: {
			duration: 0, 
			render: function (url, $container)  {
				A.inAction=true
				//console.log('-> ')
				A.act(A.PRE) //action
				$('#content-wrapper').fadeTo(100,.2)

			}//r
		},//onS
		onReady: {
			duration: 0,
			render: function ($container, $newContent) {
				$('#content-wrapper').fadeTo(200,1)

				A.inAction= false
				A.act(A.PAGE)// main action
				//console.log('% <-')
			}//ren
		}//ready()
	}//sso
	
	const smoothState= $('#ss1').smoothState(ssoptions)

}//startApp()

//====================================================================
