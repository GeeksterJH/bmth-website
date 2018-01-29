<template>
	<div>
		<h1>Albums</h1>

		<div id="albums">
			<div v-for="(album, index) of albums">
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

<style lang="scss" scoped>
	#albums {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		grid-column-gap: 1rem;
		grid-row-gap: 1rem;
	}
</style>

