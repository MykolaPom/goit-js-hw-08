import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const PLAYER_STORAGE_KEY = 'videoplayer-current-time';

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);

player.on(
  'timeupdate',
  throttle(function () {
    player.getCurrentTime().then(function (seconds) {
      localStorage.setItem(PLAYER_STORAGE_KEY, seconds);
    });
  }, 1000)
);

  player.setCurrentTime(localStorage.getItem(PLAYER_STORAGE_KEY) || 0);
