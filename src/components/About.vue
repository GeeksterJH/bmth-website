<template>
	<div>
		<h1>About Bring Me The Horizon</h1>

		<p class="lead">
			Bring Me The Horizon is a British metal/rock/alternative band.
			They made their debut in 2004 with their EP titled 'This Is What The Edge Of Your Seat Was Made For'.
			The band currently consists of five members: Oliver Sykes (vocals), Jordan Fish (keyboards),
			Matthew Nichols (drums), Matt Kean (bass) and Lee Malia (guitar)
		</p>

		<div id="albums">
			<div v-for="member in members">
				<img class="img-fluid" v-bind:src="member.image" v-bind:alt="member.name">
				<h4 class="text-center">{{ member.name }}</h4>
			</div>
		</div>
	</div>
</template>

<script>
	import members from '../services/members';

	export default {
		name: 'app-about',
		data() {
			return {
				members: members
			};
		}
	}
</script>

<style lang="scss" scoped>
	@import '../media-queries';

	@include sm-up {
		#albums {
			display: grid;
			grid-template-columns: 1fr 1fr;
			grid-column-gap: 20px;
		}
	}

	@include lg-up {
		#albums {
			grid-template-columns: repeat(3, 1fr);
		}
	}
</style>
