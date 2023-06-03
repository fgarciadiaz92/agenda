<script>
// @ts-nocheck

    import { page } from '$app/stores';
    import { onMount } from 'svelte';
    import {asignaturas} from "$lib/store.js"
    import CarpetaMateria from "$lib/CarpetaMateria.svelte";
    
    


let dataCarpetas=[]
  onMount(async () => {
    dataCarpetas= await asignaturas.detalleCarpeta($page.params.materia)
		});

</script>


<svelte:head>
	<title>{$page.params.materia}</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

  <div class="grid grid-cols-1 lg:grid-cols-5 gap-4">
    {#each dataCarpetas as carperta}
			<div class="col mt-5">
		  <CarpetaMateria titulo={carperta.nombre} cantidadDoc={carperta.cantidadDocumentos} ultimaModificacion={carperta.ultimaModificacion}/>
			</div>
		{/each}
	</div>	 
