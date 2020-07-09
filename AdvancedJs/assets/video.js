import MediaPlayer from "./MediaPlayer.js";

// Guardando elementos
const video = document.querySelector("video");
//Instanciando dato del reproductor con clase de video
const player = new MediaPlayer({ el: video });

const button = document.querySelector("button");

//Generando accion de play en boton
button.onclick = () => player.togglePlay();
