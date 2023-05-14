<script>
// @ts-nocheck

    import { listadoMateria } from "$lib/store";
    import Icon from '@iconify/svelte';

    export let titulo;
    export let descripcion;

    function editarMateria(materia){
      
    }

 
</script>





<div class="card" style="width: 18rem;">
    <img src="https://img.freepik.com/vector-premium/icono-libro-concepto-educacion_77417-1748.jpg?w=900" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">{titulo}</h5>
      <p class="card-text">{descripcion}</p>
      <a class="btn btn-outline-primary" on:click={editarMateria}><Icon icon="material-symbols:edit" width="20" height="20" /></a>
      <a href="#" class="btn btn-outline-primary"><Icon icon="zondicons:view-show" width="20" height="20" /></a>
    </div>
  </div>