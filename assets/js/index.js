"use strict";

class Multimedia {
  constructor(url, duration) {
    let _url = url;
    this._getUrl = () => _url;
    this._setUrl = (newUrl) => (_url = newUrl);

    let _duration = duration;
    this._getDuration = () => _url;
    this._setDuration = (newDuration) => (_duration = newDuration);
  }
  get url() {
    return this._getUrl();
  }

  set url(newUrl) {
    this._setUrl(newUrl);
  }

  get duration() {
    return this._getDuration();
  }

  set duration(newDuration) {
    this._setDuration(newDuration);
  }
}

class Reproductor extends Multimedia {
  constructor(url, duration, id, volume, width, currentTime) {
    super(url, duration);
    this.id = id;
    this.volume = volume;
    this.width = width;
    this.currentTime = currentTime;
  }
  play() {
    const reproductor = document.querySelector(`#${this.id}`);
    reproductor.play(); //metodo
    console.log("play");
  }
  stop() {
    const reproductor = document.querySelector(`#${this.id}`);
    reproductor.pause(); //metodo
  }
  setStartingTime(seconds) {
    const reproductor = document.querySelector(`#${this.id}`);
    reproductor.currentTime = seconds; //atributo
  }
}

const video = document.querySelector("video");
const [btnPlay, btnStop, btnSeconds] = document.querySelectorAll("button");

btnPlay.addEventListener("click", function () {
  whatever.play();
  console.log("play");
});

btnStop.addEventListener("click", function () {
  whatever.stop();
});

btnSeconds.addEventListener("click", function () {
  const { value: seconds } = document.querySelector("input");
  whatever.setStartingTime(seconds);
});

const whatever = new Reproductor(
  "./assets/img/astronauta.mp4",
  60,
  "pelicula",
  0.5,
  300,
  10
);

video.src = whatever.url;
console.log(video.src);
whatever.play();
