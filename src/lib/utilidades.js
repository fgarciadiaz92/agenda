// @ts-nocheck

import { Telegram } from "$lib/store";
import moment from "moment";
import { listaAmor } from "$lib/listadoAmor.js";

const comandos = {
  recordatorio: recordatorioLista,
  mis100: mis100Fn,
  apuntes: listadoApuntes,
};

// @ts-ignore
export function obtenerUltimoMensaje(mensaje) {
  const ultimaActualizacion = mensaje[mensaje.length - 1];
  let estado = esComando(ultimaActualizacion);
  if (estado) {
    const comando = eliminarSimbolo(ultimaActualizacion.message);
    if (comando in comandos) {
      console.log("comando", comando);
      comandos[comando](ultimaActualizacion);
    }
  }
}

function esComando(data) {
  console.log("esComando", data);
  if (data.message && data.message.entities && data.message.entities.length > 0) {
    const primerEntity = data.message.entities[0];
    if (primerEntity.type === "bot_command") {
      return true;
    }
  }
  return false;
}

function eliminarSimbolo(data) {
  return data.text.slice(1);
}

function recordatorioLista(data) {
  const lista = {
    1: "Cumpleaños de un amigo - 12:00 PM, 15 de mayo de 2023",
    2: "Reunión de trabajo - 9:30 AM, 20 de junio de 2023",
    3: "Aniversario - 7:00 PM, 10 de julio de 2023",
    // Agrega más elementos a la lista según sea necesario
  };

  let mensaje = "Lista de Recordatorios:\n\n";

  for (let item in lista) {
    mensaje += `${item}-${lista[item]}\n`;
  }

  Telegram.enviarMensaje(mensaje);
}

const fechaHoraActual = moment().format("DD/MM/YYYY HH:mm");

let mis100Enviado = false;

function mis100Fn(data) {
  console.log("data", data.message.date);
  console.log("update", data.update_id);

  let numeroIdMasAlto = verificarListaAmor(listaAmor);

  if (numeroIdMasAlto === 0 && !mis100Enviado) {
    let dataAmor = obtenerMensajeAleatorio(listaAmor);
    console.log("dataAmor", dataAmor);

    // Envía el mensaje de amor una vez
    Telegram.enviarMensaje(dataAmor.titulo);

    // Marcar el mensaje como enviado
    mis100Enviado = true;
    console.log("mis100Enviado",mis100Enviado)
  }

  // Resto del código...
}

function listadoApuntes() {
  console.log("listado de apuntes fn");
}

function fueEnviado(numeroId) {
  console.log("numeroId", numeroId);
  let ultimaFecha = moment.unix(numeroId.date).format("DD/MM/YYYY HH:mm");
  console.log("ultimaFecha", ultimaFecha);
}

export function convertirFechaUnix(fecha) {
  let fechaUnix = fecha;
  const fechaFinal = moment.unix(fechaUnix.date).format("DD/MM/YYYY HH:mm");
  console.log("fechaFinal", fechaFinal);
  return fechaFinal;
}

function verificarListaAmor(data) {
  const keys = Object.keys(data);
  let numeroIdMasAlto = 0;
  keys.forEach((key) => {
    const numeroId = data[key].numeroId;
    if (numeroId > numeroIdMasAlto) {
      numeroIdMasAlto = numeroId;
    }
  });
  return numeroIdMasAlto;
}

function obtenerMensajeAleatorio(data) {
  const keys = Object.keys(data);
  const randomIndex = Math.floor(Math.random() * keys.length);
  const randomKey = keys[randomIndex];
  const mensajeAleatorio = data[randomKey];
  return mensajeAleatorio;
}


