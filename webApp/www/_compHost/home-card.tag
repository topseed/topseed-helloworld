<home-card class="homeCard">
	<style>
		home-card {
			height: 250px;
			width: 350px;
			border-radius: 3px;
			background-color: gray;
			overflow: hidden;
			cursor: pointer;
			box-shadow: 0 2px 3px rgba(0,0,0,0.4);
			display: inline-table;
			margin: 7px;
		}
		.homeCard a, .homeCard a:visited,
		.homeCard a:hover, .homeCard a:active {
			text-decoration: none;
		}
		.hc--img {
			height: 210px;
			width: 350px;
			background-position: left top;
			background-size: cover;
			background-repeat: no-repeat;
		}
		.hc--headline {
			padding: 6px;
			background-color: white;
		}
		home-card:hover{
			box-shadow: 0 3px 4px rgba(0,0,0,0.7);
		}
	</style>

	<a href= { ref }>
		<div class= "hc--img" style="background-image:url({ img })"></div>
		<div class= "hc--headline">{ headline }</div>
	</a>

	<script>
	//home-card(ref='/post/app-shell/', img='arc.jpg', headline='Best Practices training')
		this.ref = opts.ref
		this.img = opts.img
		this.headline = opts.headline
	</script>
</home-card>
