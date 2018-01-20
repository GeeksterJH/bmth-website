<template>
	<nav>
		<router-link to="/">
			<img src="../assets/logo.png" alt="Logo" id="logo">
		</router-link>

		<div id="nav">
			<ul>
				<li v-for="link of links">
					<router-link :to="link.to" exact>{{ link.name }}</router-link>
				</li>
			</ul>
		</div>
	</nav>
</template>

<script>
	export default {
		name: 'app-navigation',
		data() {
			return {
				links: [
					{ name: 'Home', to: '/' },
					{ name: 'About BMTH', to: '/about-bmth' },
					{ name: 'Albums', to: '/albums' },
					{ name: 'Contact', to: '/contact' }
				]
			};
		}
	}
</script>

<style lang="scss" scoped>
	#logo {
		margin-top: 10px;
		margin-left: 10%;
		width: 80%;
	}

	#nav {
		margin-top: 20px;
		text-align: center;

		ul {
			margin: 0;
			padding: 0;
		}

		ul li:first-child {
			margin-left: 0;
		}

		ul li {
			display: inline;
			list-style-type: none;
			font-size: 1.1rem;
			margin-left: 20px;
		}

		ul li a {
			padding: 5px;
			color: #fff;
		}

		ul li a.router-link-active, ul li a:hover {
			background-color: rgba(172, 172, 172, .33);
			text-decoration: none;
			border-radius: 6px;
		}
	}

	@media screen and(min-width: 576px) {
		#logo {
			margin: 0;
			width: 400px;
		}

		#nav ul {
			text-align: left;
		}
	}

	@media screen and (min-width: 970px) {
		#nav {
			width: 20%;
			position: fixed;
		}

		#nav ul li {
			display: block;
			margin-left: 0;
			font-size: 1.3rem;
			margin-top: 30px;
		}
	}
</style>

