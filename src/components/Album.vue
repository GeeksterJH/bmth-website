<template>
	<div>
		<h1>{{ album.name }}</h1>
		<h6>Released In {{ album.release_year }}</h6>

		<p class="lead">{{ album.description }}</p>

		<div class="row">
			<div class="col-12 col-sm-6">
				<img v-bind:src="album.img_url" v-bind:alt="album.name" class="img-fluid">
			</div>

			<div class="col-12 col-sm-6">
				<iframe v-bind:src="album.video_url" frameborder="0"></iframe>
			</div>
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
	iframe {
		width: 100%;
		height: 400px;
	}
</style>

