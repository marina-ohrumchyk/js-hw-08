import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);
const LOCALSTORAGE_KEY = 'videoplayer-current-time';


player.on(
  'timeupdate',
  throttle(function (data) {
    const time = data.seconds;
    console.log(time);
    localStorage.setItem(LOCALSTORAGE_KEY, time);
  }, 1000)
);
player.setCurrentTime(localStorage.getItem(LOCALSTORAGE_KEY));
