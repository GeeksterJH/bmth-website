<template>
	<div>
		<h1>Contact</h1>

		<h2 class="h5">Send Us A Message</h2>

		<form action="POST">
			<textarea class="form-control" placeholder="Enter your message here..."></textarea>
			<button type="submit" class="mt-3">Send</button>
		</form>

		<h2 class="h5 mt-4">Or Contact Us Through</h2>

		<p>Email: bmth-website@gmail.com</p>
		<p>SMS: 123-456-7890</p>
		<p>Twitter: @bmth-website</p>
	</div>
</template>

<script>
	export default {
		name: 'app-contact'
	}
</script>

<style lang="scss" scoped>
	textarea {
		resize: none;
		border-radius: 0;
	}

	textarea:focus {
		box-shadow: none;
	}

	button {
		border: none;
		background-color: rgba(172, 172, 172, .33);
		color: #fff;
		padding: 5px 10px;
		border-radius: 6px;
		transition-duration: 500ms;
	}

	button:hover {
		cursor: pointer;
		background-color: rgba(172, 172, 172, .5);
	}
</style>

