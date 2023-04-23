<script>
	import './styles.css';
	import Navbar from '$lib/navbar.svelte';

</script>

<div class="app">
	<Navbar/>
	<main>
		<div class="container-fluid">
		<slot />
		</div>
	</main>

</div>

<style>
	
</style>
