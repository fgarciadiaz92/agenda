<script>
	// @ts-nocheck
	
		import PortadaMateria from "$lib/PortadaMateria.svelte";
		import Swal from 'sweetalert2'
		import {asignaturas} from "$lib/store.js"
		import { onMount } from 'svelte';


		onMount(async () => {
			listadoAsignatura= await asignaturas.listado(2023)
		});

		let materia={
			nombre:null,
			descripcion:null,
		}
	
		let modal;
		let listadoAsignatura=[];

	
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

<button class="btn " onclick="modalMateria.showModal()">Agregar Materia</button>
<!-- modal -->
<!-- You can open the modal using ID.showModal() method -->
<dialog id="modalMateria" class="modal">
	<form method="dialog" class="modal-box">
	  <button for="my-modal-3" class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
	  <div class="form-control w-full max-w-xs">
		<label class="label">
		  <span class="label-text">Ingrese un nombre</span>		  
		</label>
		<input type="text" placeholder="Agregar un nombre para tu materia" class="input input-bordered w-full max"  bind:value={materia.nombre} required />
		<label class="label">
		</label>
		<button class="btn btn-outline btn-primary" on:click={agregarMateria}>Agregar</button>
	  </div>
	</form>
  </dialog>
<!-- modal -->

  
  
  {#if listadoAsignatura.length <= 0}
  	<p class="text-center">Sin informacion cargada</p>
  {:else}
  
  	<div class="grid grid-cols-1 lg:grid-cols-5 gap-4">
		{#each listadoAsignatura as materia}
			<div class="col mt-5">
			<PortadaMateria titulo={materia.titulo} fechaCreacion={materia.fechaCreacion}/>
			</div>
		{/each}
	</div>	 
{/if}



