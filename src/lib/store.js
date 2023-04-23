import { writable } from "svelte/store";


const urlBase="https://localhost:7207"
export const planerListado=writable([])

export let planer= {
  titulo: null,
  fechaEvento: null,
  horaEvento: null,
  descripcion: null,
  tiempoRestanteAviso: null,
  intervaloAviso: null
};

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
    return { subscribe, listado }
  
  }();
  