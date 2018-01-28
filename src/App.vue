<template>
	<div class="container-fluid" id="app">
		<div id="background"></div>
		<div id="dark-overlay"></div>

		<app-nav></app-nav>

		<div class="content">
			<router-view></router-view>
		</div>
	</div>
</template>

<script>
	import Navigation from './components/Navigation';

	export default {
		name: 'app',
		components: {
			'app-nav': Navigation
		}
	};
</script>

<style lang="scss">
	@import '../node_modules/bootstrap/scss/bootstrap.scss';
	@import url('https://fontlibrary.org/face/caladea');

	* {
		font-family: 'Caladea', Arial;
	}

	#background {
		background: url('./assets/hero.jpg');
		background-size: cover;
		background-repeat: no-repeat;
		background-position: center;
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		z-index: -1000;
	}

	#dark-overlay {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background-color: rgba(0, 0, 0, .25);
		z-index: -999;
	}

	a {
		color: #fff;
	}

	a:hover {
		color: #fff;
		text-decoration: underline;
	}

	.content {
		margin-top: 40px;
		background: rgba(0, 0, 0, .4);
		padding: 20px;
		color: #fff;
		margin-bottom: 20px;
	}

	@media screen and (min-width: 576px) {
		.container-fluid {
			padding-top: 40px;
			padding-left: 30px;
		}
	}

	@media screen and (min-width: 970px) {
		.content {
			width: 80%;
			margin-top: 50px;
			float: right;
		}
	}
</style>
