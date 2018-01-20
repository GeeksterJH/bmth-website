<template>
	<div>
		<h1>Albums</h1>

		<div class="row">
			<div class="col-12 col-md-4 col-sm-6" v-for="(album, index) of albums">
				<img v-bind:src="album.img_url" v-bind:alt="album.name" class="img-fluid">
				<router-link :to="'/albums/' + index">
					<h4>{{ album.name }} ({{ album.release_year }})</h4>
				</router-link>
			</div>
		</div>
	</div>
</template>

<script>
	import albums from '../services/albums';

	export default {
		name: 'about-albums',
		data() {
			return {
				albums: albums
			};
		}
	}
</script>
