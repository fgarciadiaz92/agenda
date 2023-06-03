<script>
// @ts-nocheck

    import { Telegram } from "$lib/store";
    import {obtenerUltimoMensaje,convertirFechaUnix} from "$lib/utilidades.js"

    let dataMensaje=null
    async function actualizarMensajes(){
        dataMensaje=await Telegram.conectar()

        obtenerUltimoMensaje(dataMensaje.result)
    }



    
let mensaje;

async function enviarSMS(){
    console.log("mensaje",mensaje)
    let resultado=await Telegram.enviarMensaje(mensaje)
    convertirFechaUnix(resultado.result)
    console.log("resultado enviarSMS",resultado.result)
}
</script>


<h1>Resumen</h1>

<!-- <div class="input-group mb-3">
    <div class="input-group-prepend">
      <span class="input-group-text" id="basic-addon1">MENSAJE</span>
    </div>
    <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" bind:value={mensaje}>
  </div>
  <button type="button" class="btn btn-primary" on:click={enviarSMS}>Enviar SMS</button>

<button type="button" class="btn btn-primary" on:click={actualizarMensajes}>Actualizar</button>
 -->


<!-- 
 <div>
    {#if dataMensaje != null}
    {#each dataMensaje.result as message}
      <p>{message.message.text}</p>
    {/each}
    {:else}
    <p>Sin mensaje ,favor actualizar</p>
    {/if}
</div>
    -->