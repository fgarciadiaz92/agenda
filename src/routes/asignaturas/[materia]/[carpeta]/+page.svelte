<script>
  // @ts-nocheck
  
      import { page } from '$app/stores';
      import { onMount } from 'svelte';
      import { asignaturas ,urlBase} from "$lib/store";
  
      
      let dataCarpetas=[];
  
      onMount(async () => {
          console.log("carpetaaa caaa",$page.params);
          const response = await asignaturas.listadoArchivo($page.params.carpeta,$page.params.materia);
          console.log(response)
          dataCarpetas = response;
      });
  </script>
  
  
  <svelte:head>
      <title>{$page.params.materia}</title>
      <meta name="description" content="Svelte demo app" />
  </svelte:head>
  
  
  {#if dataCarpetas.length > 0}
  {#each dataCarpetas as data }
      <div>
          <a href={`${urlBase}/materia/2023/${$page.params.materia}/${$page.params.carpeta}/${data.nombreArchivo}`}>{data.nombreArchivo}</a>
          <img src={`${urlBase}/materia/2023/${$page.params.materia}/${$page.params.carpeta}/${data.nombreArchivo}`} alt="Vista previa de la imagen" />
      </div>
  {/each}
{/if}