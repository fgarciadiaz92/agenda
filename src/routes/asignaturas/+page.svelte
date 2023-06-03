<script>
	// @ts-nocheck
	
		import { onMount } from 'svelte';
		import PortadaMateria from "$lib/PortadaMateria.svelte";
		import Icon from "@iconify/svelte";
		import Swal from 'sweetalert2'
		import {asignaturas} from "$lib/store.js"
	
		let materia={
			nombre:null,
			descripcion:null,
		}
	
		let modal;
		let listadoAsignatura=[];
		onMount(async () => {
			var myModalEl = document.getElementById('agregarMateriaModal');
			modal = new bootstrap.Modal(myModalEl);

			listadoAsignatura= await asignaturas.listado(2023)
			console.log("listadoAsignatura",listadoAsignatura)
		});

	
		async function agregarMateria(){
			
			if(materia.nombre != null){
				await asignaturas.crear(materia.nombre)
				Swal.fire({
					title: 'Agregado',
					text: 'Se agrego correctamente ',
					icon: 'success',
					confirmButtonText: 'Aceptar'
				}).then((result) => {
					if (result.isConfirmed) {
						if(modal) modal.hide();
						materia = {
							nombre: null,
							descripcion: null,
						};
					}
				});
			}
		}
	</script>
	


<svelte:head>
	<title>Materias</title>
</svelte:head>


<!-- modal -->
<div class="modal fade" id="agregarMateriaModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Agregar Materia</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
		<div class="mb-3">
			<label for="nombreInput" class="form-label">Nombre</label>
			<input type="email" class="form-control" id="nombreInput" placeholder="Escribe un nombre para la materia" bind:value={materia.nombre} required>
		  </div>
		  <div class="mb-3">
			<label for="textAreaDescripcion" class="form-label">Descripcion</label>
			<textarea class="form-control" id="textAreaDescripcion" rows="3" placeholder="Escribe una descripcion para la materia" bind:value={materia.descripcion}></textarea>
		  </div>
      </div>
      <div class="modal-footer">
        <button type="button"  class="btn btn-outline-danger" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-outline-success" on:click={agregarMateria} >Agregar</button>
      </div>
    </div>
  </div>
</div>
<!-- modal -->



<div class="container text-center">
	<div class="row justify-content-end mx-0 my-0 mt-1">
	  <div class="col-md-2">
		<button type="button" class="btn btn-outline-primary" on:click={agregarMateria} data-bs-toggle="modal" data-bs-target="#agregarMateriaModal">
		  <Icon icon="material-symbols:add" width="30" height="30" />
		</button>
	  </div>
	</div>
  </div>
  
  
  {#if listadoAsignatura.length <= 0}
  	<p class="text-center">Sin informacion cargada</p>
  {:else} 
	

  <div class="container text-center mb-3">
	<div class="row align-items-start">
		{#each listadoAsignatura as materia}
	  <div class="col mt-3">
		<PortadaMateria titulo={materia.titulo} fechaCreacion={materia.fechaCreacion}/>
	  </div>
	  {/each}	  
	</div>
  </div>
{/if}



