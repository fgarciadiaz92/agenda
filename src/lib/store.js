// @ts-nocheck
import { writable } from "svelte/store";
import {obtenerUltimoMensaje} from "$lib/utilidades.js"


export const urlBase="https://localhost:7207"
export const planerListado=writable([])

export const dataIntento=writable([])

export let planer= {
  titulo: null,
  fechaEvento: null,
  horaEvento: null,
  descripcion: null,
  tiempoRestanteAviso: null,
  intervaloAviso: null
};


export const listadoMateria=writable([])

export const agenda = function () {

    let { subscribe, set } = writable([])
  
    let listado = () => {
      return fetch(`${urlBase}/agenda/listado`, {
        method: "GET",
        headers: {
          'Accept': 'application/json',
          "Content-type": "application/json; charset=UTF-8",
        },
      }
      )
        .then(response => response.json())
        .then(data => {
          console.log("data",data)
          set(data)
        })
        .catch(error => console.error(error))
  
    }
    let guardar = () => {
      return fetch(`${urlBase}/agenda/listado`, {
        method: "GET",
        headers: {
          'Accept': 'application/json',
          "Content-type": "application/json; charset=UTF-8",
        },
      }
      )
        .then(response => response.json())
        .then(data => {
          console.log("data",data)
          set(data)
        })
        .catch(error => console.error(error))
  
    }
    let editar = () => {
      return fetch(`${urlBase}/agenda/listado`, {
        method: "GET",
        headers: {
          'Accept': 'application/json',
          "Content-type": "application/json; charset=UTF-8",
        },
      }
      )
        .then(response => response.json())
        .then(data => {
          console.log("data",data)
          set(data)
        })
        .catch(error => console.error(error))
  
    }

    return { subscribe, listado ,guardar,editar}
  
  }();

  let token='6136852738:AAE1LgTsxfAHdSzS1q7Of2U8OFzQ4DMfoJU'
  let urlTelegram='https://api.telegram.org/bot'


  // es de la pana rabbit
  //let chatId=6299369148

  //es mio
  let chatId=766652428

  export const Telegram = function () {

    let { subscribe, set } = writable([])
    const intervalo = 15000;

    let ultimoNumeroActualizacion = 0;

    let conectando = false;

    let conectar = () => {
      if (conectando) {
        return; // Evita realizar solicitudes simultáneas
      }
      
      conectando = true; // Marca como conectando
    
      fetch(`${urlTelegram}${token}/getUpdates`, {
        method: "GET",
        headers: {
          'Accept': 'application/json',
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then(response => response.json())
        .then(data => {
          const ultimoNumero = obtenerUltimoNumeroActualizacion(data);
          console.log("ultimoNumero", ultimoNumero);
    
          if (ultimoNumero > ultimoNumeroActualizacion) {
            ultimoNumeroActualizacion = ultimoNumero;
            procesarSolicitudes(data);
          }
    
          conectando = false; // Marca como completado
        })
        .catch(error => {
          console.error(error);
          conectando = false; // Marca como completado en caso de error
        });
    };
    
    const obtenerUltimoNumeroActualizacion = (data) => {
      if (data && data.result && data.result.length > 0) {
        const ultimaActualizacion = data.result[data.result.length - 1];
        return ultimaActualizacion.update_id;
      }
      return 0;
    }
    
    const procesarSolicitudes = (data) => {
     
      obtenerUltimoMensaje(data.result);
    }
    
    //setInterval(conectar, intervalo);
    

    let enviarMensaje = (mensaje) => {
      const replyMarkup = {
        inline_keyboard: [
          [
            {
              text: mensaje,
              callback_data: "data_del_boton"
            }
          ]
        ]
      };
    
      return fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          chat_id: chatId,
          text: mensaje,
          reply_markup: replyMarkup
        })
      })
        .then(response => response.json())
        .then(data => {
          console.log("Mensaje enviado:", data);
          return data;
        })
        .catch(error => {
          console.error("Error al enviar el mensaje:", error);
          throw error;
        });
    };

    return { subscribe, conectar ,enviarMensaje}
  
  }();
  

  export const asignaturas = function () {

    let { subscribe, set } = writable([])
  
    let listado = (anio) => {
      return fetch(`${urlBase}/materia/${anio}`, {
        method: "GET",
        headers: {
          'Accept': 'application/json',
          "Content-type": "application/json; charset=UTF-8",
        },
      }
      )
        .then(response => response.json())
        .then(data => {
          console.log("materia listado",data)
          set(data)
          return data
        })
        .catch(error => console.error(error))
  
    }
    let detalleCarpeta = (asignaturas) => {
      return fetch(`${urlBase}/materia/2023/${asignaturas}`, {
        method: "GET",
        headers: {
          'Accept': 'application/json',
          "Content-type": "application/json; charset=UTF-8",
        },
      }
      )
        .then(response => response.json())
        .then(data => {
          console.log("detalleCarpeta",data)
          set(data)
          return data
        })
        .catch(error => console.error(error))
  
    }
    let crear = (materia) => {
      return fetch(`${urlBase}/materia/agregar`, {
        method: "POST",
        headers: {
          'Accept': 'application/json',
          "Content-type": "application/json; charset=UTF-8",
        },
        body: JSON.stringify(materia)
      }
      )
        .then(response => response.json())
        .then(data => {
          console.log("crear acaaa",data)
          set(data)
        })
        .catch(error => console.error(error))
  
    }
    let listadoArchivo = (carpeta,materia) => {
      return fetch(`${urlBase}/materia/2023/${materia}/${carpeta}`, {
        method: "GET",
        headers: {
          'Accept': 'application/json',
          "Content-type": "application/json; charset=UTF-8",
        }
      }
      )
        .then(response => response.json())
        .then(data => {
          console.log("holaa12 acaaa",data)
          set(data)
          return data
        })
        .catch(error => console.error(error))
  
    }
    let verArchivo = (carpeta,materia,nombreArchivo) => {
      return fetch(`${urlBase}/materia/2023/${materia}/${carpeta}/${nombreArchivo}`, {
        method: "GET",
        headers: {
          'Accept': 'application/json',
          "Content-type": "application/json; charset=UTF-8",
        }
      }
      )
        .then(response => response.json())
        .then(data => {
          console.log("holaaa",data)
          set(data)
        })
        .catch(error => console.error(error))
  
    }

    return { subscribe, listado ,detalleCarpeta,crear,listadoArchivo,verArchivo}
  
  }();