// Guardando elementos
const video = document.querySelector("video");
const button = document.querySelector("button");

//Generando clase y configuracion para el video
function MediaPlayer(config) {
  this.media = config.el;
}
//Metiendo metodos al prototype - trabajando con clases
MediaPlayer.prototype.play = function () {
  //Condicional si esta play o pause
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
};

//Instanciando dato del reproductor con clase de video
const player = new MediaPlayer({ el: video });

//Generando accion de play en boton
button.onclick = () => player.play();
