<script>
    import NuevaActividad from "$lib/NuevaActividad.svelte";
    import DetalleActividad from "$lib/DetalleActividad.svelte";
    import TipoActividad from "$lib/TipoActividad.svelte";
    import ResumenActividad from "$lib/ResumenActividad.svelte";
    
    let numeroPagina=0
  
    function siguientePaso(){
      if (numeroPagina < 3) {
        numeroPagina++
      }
    }
  
    function pasoAnteriorPaso(){
      if(numeroPagina > 0){
        numeroPagina--
      }
    }
</script>

{#if numeroPagina === 0}
    <NuevaActividad/>
{:else if numeroPagina === 1}
    <DetalleActividad/>
{:else if numeroPagina === 2}
    <TipoActividad/>
{:else if numeroPagina === 3}
    <ResumenActividad/>
{/if}
  
<div class="mx-auto max-w-2xl text-center flex flex-col-reverse">
    <ul class="steps">
        <li class="step" class:step-primary={numeroPagina >= 0}>Nombre </li>
        <li class="step" class:step-primary={numeroPagina >= 1}>Detalle </li>
        <li class="step" class:step-primary={numeroPagina >= 2}>Tipo </li>
        <li class="step" class:step-primary={numeroPagina >= 3}>Resumen</li>
    </ul>
    <div>
        {#if numeroPagina > 0}
            <button class="btn btn-primary mx-auto" on:click={pasoAnteriorPaso}>Atrás </button>
        {/if}
        {#if numeroPagina < 3}
            <button class="btn btn-primary mx-auto" on:click={siguientePaso}>Siguiente </button>
        {:else}
            <button class="btn btn-primary mx-auto">Finalizar </button>
        {/if}
    </div>
</div>
