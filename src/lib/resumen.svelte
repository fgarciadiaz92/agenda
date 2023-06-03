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


<div class="hero min-h-screen bg-base-200">
  <div class="hero-content flex-col lg:flex-row">
    <img src="https://terapiaocupacionalpanama.files.wordpress.com/2020/05/cropped-logo-terapia-ocupacional-en-accion-transparente-1.png" class="max-w-sm rounded-lg shadow-2xl "/>
    <div>
      <h1 class="text-5xl font-bold">Rabbit Center</h1>
      <p class="py-6">WebApp para gestionar documentos y ayudar a mi ratoña con su carrera</p>
      <button class="btn btn-primary">Iniciar</button>
    </div>
  </div>
</div>
