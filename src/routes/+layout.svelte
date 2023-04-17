<script>
	import './styles.css';
	import Navbar from '$lib/navbar.svelte';

</script>

<div class="app">
<Navbar/>
	<main>
		<slot />
	</main>

</div>

<style>
	
</style>
