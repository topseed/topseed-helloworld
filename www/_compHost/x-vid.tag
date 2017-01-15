<x-vid>

	<script>
		// First we specify bitrates to feed to the player
		var bitrates = {
			mp4: [
			'//cdn.rawgit.com/cekvenich/what/master/asites/arc.mp4'
		]}
		// Then we set our player settings
		var vsettings = {
			initialVolume: 0,
			muted: true,
			width: 360,
			height: 250,
			scaleMode: 'stretch',
			posterScaleMode: 'stretch',
			bitrates: bitrates,
			poster: '//www.radiantmediaplayer.com/images/poster-rmp-showcase.jpg',
			autoplay: true,
			mutedAutoplayOnMobile: true,
			delayToFade: 1000,
			loop: true,
		}

		this.on('mount', function(){
			vidInit(this.opts)
		})

		this.foo = function() {
			console.log(opts)
		}

		var players = {}

		function vidInit(tag) {
			// Reference to the wrapper div (unique id)
			//console.log(JSON.stringify(tag))
			vsettings.poster = tag.poster
			bitrates.mp4[0] = tag.bitrate1
			var ei = tag.id
			console.log(ei)
			var rmp = new RadiantMP(ei)
			players[ei] = rmp
			rmp.init(vsettings)
		}
		_act.addOnce(function(arg1, arg2) {
			console.log(arg1, arg2)
			return false
		})


	</script>

</x-vid>
