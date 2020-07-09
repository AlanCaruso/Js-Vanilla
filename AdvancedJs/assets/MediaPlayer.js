//Generando clase y configuracion para el video
function MediaPlayer(config) {
  this.media = config.el;
}
//Metiendo metodos al prototype - trabajando con clases
MediaPlayer.prototype.play = function () {
  this.media.play();
};
MediaPlayer.prototype.pause = function () {
  this.media.pause();
};

MediaPlayer.prototype.togglePlay = function () {
  if (this.media.paused) {
    this.play();
  } else {
    this.pause();
  }
};

//Condicional si esta play o pause

export default MediaPlayer;
