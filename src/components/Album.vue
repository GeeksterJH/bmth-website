<template>
	<div>
		<h1>{{ album.name }}</h1>
		<h6>Released In {{ album.release_year }}</h6>

		<p class="lead">{{ album.description }}</p>

		<div id="preview">
			<img v-bind:src="album.img_url" v-bind:alt="album.name" class="img-fluid">
			<iframe v-bind:src="album.video_url" frameborder="0"></iframe>
		</div>

		<h4>Songs:</h4>

		<ol>
			<li v-for="song of album.songs">{{ song }}</li>
		</ol>
	</div>
</template>

<script>
	import albums from '../services/albums';

	export default {
		name: 'app-album',
		data() {
			return {
				album: albums[this.$route.params.id]
			};
		}
	}
</script>

<style lang="scss" scoped>
	@import '../media-queries';
	
	iframe {
		width: 100%;
		height: 400px;
		margin-top: 2rem;
	}

	@include sm-up {
		#preview {
			display: grid;
			grid-template-columns: 1fr 1fr;
			grid-column-gap: 2rem;
		}

		iframe {
			margin-top: 0;
		}
	}
</style>
