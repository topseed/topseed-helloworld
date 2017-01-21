'use strict'

loadjs([
	'//code.jquery.com/jquery-2.2.4.min.js'
	,'//www.masons-foundation.org/zCDN/libJs/jquery.smoothState.js'
	,'//cdn.jsdelivr.net/jquery.transit/0.9.12/jquery.transit.min.js'

	,'//cdn.jsdelivr.net/fetch/0.9.0/fetch.min.js'
	
	],  { success: function(){
		_loaded=true
		console.log('loaded')
		_act.dispatch(_LOADED, window.location)

		startApp()
	}, async: false
})

//====================================================================
function startApp(){
	var $body=$('body')
	$body.fadeTo(75,1)//shell sets it to 0
	_act.dispatch(_ACT, window.location)

	//>===============================================================
	function toggleSide(){
		console.log('tog')
		var $sidedrawer=$('#sidedrawer')
		$sidedrawer.toggleClass('active')
	}

	//>====================================================================
	//SS
	var ssoptions={
		debug: true,
		prefetch: true,
		cacheLength: 2,
		repeatDelay: 250,
		
		onStart: {
			duration: 50,
			render: function (url, $container)  {
				_inAction=true
				console.log('-> ')
				_act.dispatch(_PRE, window.location, $container)//*a
				$('#content-wrapper').fadeTo(100,.2)
			}
		},
		onReady: {
			duration: 100,
			render: function ($container, $newContent) {
				$container.html($newContent)

				$('#content-wrapper').fadeTo(200,1)

				_act.dispatch(_ACT, window.location, $newContent)//*a
				_inAction= false
				console.log('% <-')
				
			}//ren
		}//ready()
	}//
	var smoothState=$('#ss1').smoothState(ssoptions)
}//startApp()

//====================================================================
