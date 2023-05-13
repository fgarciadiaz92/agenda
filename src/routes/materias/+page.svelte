<script>
	import PortadaMateria from "$lib/PortadaMateria.svelte";
	import Icon from "@iconify/svelte";
	import Swal from 'sweetalert2'
	import { listadoMateria } from "$lib/store";

	let materia={
		nombre:null,
		descripcion:null,

	}


	function agregarMateria(){
		
		if(materia.nombre != null){
			$listadoMateria.push(materia)
			Swal.fire({
				title: 'Agregado',
				text: 'Se agrego correctamente ',
				icon: 'success',
				confirmButtonText: 'Aceptar'
			})
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
        <button type="button" class="btn btn-outline-success" on:click={agregarMateria}>Agregar</button>
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
  
  
  <div class="container text-center mt-3">
	<div class="row align-items-start">
	  <div class="col mt-3">
		<PortadaMateria/>
	  </div>
	  <div class="col mt-3">
		<PortadaMateria/>
	  </div>
	  <div class="col mt-3">
		<PortadaMateria/>
	  </div>
	  <div class="col mt-3">
		<PortadaMateria/>
	  </div>
	  
	</div>
  </div>
	
