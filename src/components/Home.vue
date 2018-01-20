<template>
	<div>
		<h1>Home</h1>

		<img src="../assets/bmth.jpg" alt="Bring Me The Horizon" class="img-fluid">

		<p>
			Bring Me The Horizon is a british metal/rock band formed in 2004.
			The band consists of vocalist Oliver Sykes, guitarist Lee Malia, bassist Matt Kean
			drummer Matt Nichols and keyboardist Jordan Fish. The name of the band derives from
			a quote from the ending of 'Pirates of the Caribbean: The Curse of the Black Pearl' where
			Jack Sparrow says the line: 'Bring me that horizon'.
		</p>

		<p>
			So far, they have released five studio albums: Count Your Blessings (2006),
			Suicide Season (2008), There is a Hell Believe Me I've Seen It. There is a Heaven Let's Keep
			it a Secret (2010), Sempiternal (2013) and That's The Spirit (2015).
		</p>

		<p>
			Follow <a href="http://www.bmthofficial.com/">This Link</a> to go the official BMTH website
		</p>
	</div>
</template>

<script>
	export default {
		name: 'app-home'
	}
</script>

<style lang="scss" scoped>
	img {
		max-width: 90%;
		margin-left: 5%;
	}

	p {
		font-size: 1.1rem;
	}

	@media screen and (min-width: 576px) {
		img {
			max-width: 60%;
			margin-left: 0;
		}
	}
</style>
