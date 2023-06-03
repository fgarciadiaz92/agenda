<script>
	import { planerListado, planer, agenda } from '$lib/store';
	import { onMount } from 'svelte';
	import FormularioPlanner from '$lib/FormularioPlanner.svelte';

  onMount(()=>{
    agenda.listado()
  })
	console.log('planerListado Componeten', $planerListado.length);
	function guardarData() {
		$planerListado.push(planer);
		console.log('$planerListado', $planerListado);
		console.log('planer', planer);
	}

</script>

<div class="row">
	<div class="col-md-4">
		<div class="container rounded mt-3">
			<div class="mb-3 row">
				<label for="staticEmail" class="col-sm-2 col-form-label">Titulo</label>
				<div class="col-sm-10">
					<input type="text" class="form-control" id="inputPassword" bind:value={planer.titulo} />
				</div>
			</div>
			<div class="mb-3 row">
				<label for="inputPassword" class="col-sm-2 col-form-label">Fecha Evento</label>
				<div class="col-sm-10">
					<input
						type="date"
						class="form-control"
						id="inputPassword"
						bind:value={planer.fechaEvento}
					/>
				</div>
			</div>

			<div class="mb-3 row">
				<label for="staticEmail" class="col-sm-2 col-form-label">Hora Evento</label>
				<div class="col-sm-10">
					<input
						type="time"
						class="form-control"
						id="inputPassword"
						bind:value={planer.horaEvento}
					/>
				</div>
			</div>
			<div class="mb-3 row">
				<label for="inputPassword" class="col-sm-2 col-form-label">Tiempo Restante Aviso </label>
				<div class="col-sm-10">
					<input
						type="text"
						class="form-control"
						id="inputPassword"
						bind:value={planer.tiempoRestanteAviso}
					/>
				</div>
			</div>
			<div class="mb-3 row">
				<label for="inputPassword" class="col-sm-2 col-form-label">Intervalo Aviso </label>
				<div class="col-sm-10">
					<input
						type="text"
						class="form-control"
						id="inputPassword"
						bind:value={planer.intervaloAviso}
					/>
				</div>
			</div>
			<div class="mb-3 row">
				<label for="inputPassword" class="col-sm-2 col-form-label">Descripcion</label>
				<div class="col-sm-10">
					<textarea
						class="form-control"
						id="exampleFormControlTextarea1"
						rows="3"
						bind:value={planer.descripcion}
					/>
				</div>
			</div>

			<button type="button" class="btn btn-primary" on:click={guardarData}>Guardar</button>
		</div>
	</div>
</div>

<style>
</style>
