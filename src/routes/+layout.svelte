<script>
	import '../app.css';
	import Navbar from '$lib/navbar.svelte';
	import RutaActual from '$lib/RutaActual.svelte';

</script>

<div class="app">
	<Navbar/>
	<main>
		<div>
		<slot />
		</div>
	</main>

</div>

<style>
	
</style>
