<script>
// @ts-nocheck

    import { page } from '$app/stores';
    import { onMount } from 'svelte';
    import {asignaturas} from "$lib/store.js"
    import CarpetaMateria from "$lib/CarpetaMateria.svelte";
    
    


let dataCarpetas=[]
  onMount(async () => {
    console.log("palabra",$page)
    dataCarpetas= await asignaturas.detalleCarpeta($page.params.materia)
    console.log("dataCarpetas",dataCarpetas)
		});

</script>


<svelte:head>
	<title>{$page.params.materia}</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>



<div class="container text-center mb-3">
	<div class="row align-items-start">
    {#each dataCarpetas as carperta}
	  <div class="col mt-3">
      <CarpetaMateria titulo={carperta.nombre} cantidadDoc={carperta.cantidadDocumentos} ultimaModificacion={carperta.ultimaModificacion}/>
	  </div>
	  {/each}	  
	</div>
  </div>
