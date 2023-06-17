<script>

	import { onMount } from 'svelte';
  import { dataIntento } from '$lib/store';

	/**
	 * @type {string}
	 */
	export let mensaje;
	export let idCarta;

	let flippedCount = 0;
	let isFlipped = false;

	function voltearCarta() {
		isFlipped = !isFlipped;

		// dataIntento.push(idCarta)

		console.log("Contenido de dataIntento:", $dataIntento);
	}

	onMount(() => {
		flippedCount = 0;
	});
</script>

<main>
	<div class="flex items-center justify-center">
		<div class="relative w-64 h-40">
			<div class="card w-full h-full" class:flipped={isFlipped} on:click={voltearCarta}>
				<div class="card-inner">
					<div class="card-front bg-blue-500 text-white flex items-center justify-center">
						<span>T.O</span>
					</div>
					<div class="card-back bg-red-500 text-white flex items-center justify-center">
						<span>{mensaje}</span>
					</div>
				</div>
			</div>
		</div>
	</div>
</main>

<style>
	.card {
		width: 100%;
		height: 100%;
		perspective: 800px;
		cursor: pointer;
	}

	.card-inner {
		width: 100%;
		height: 100%;
		position: relative;
		transform-style: preserve-3d;
		transition: transform 0.5s;
	}

	.card-front,
	.card-back {
		position: absolute;
		width: 100%;
		height: 100%;
		backface-visibility: hidden;
	}

	.card-front {
		transform: rotateY(0deg);
	}

	.card-back {
		transform: rotateY(180deg);
	}

	.flipped .card-inner {
		transform: rotateY(180deg);
	}
</style>
