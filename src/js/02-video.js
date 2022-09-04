import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

// const throttle = require('lodash.throttle');

const iframe = document.querySelector('#vimeo-player');
const player = new Vimeo.Player(iframe);

player.on('play', function () {
  console.log('played the video!');
});

// localStorage.setItem('videoplayer-current-time', 'time');
// timeupdate;
console.log(localStorage.getItem('videoplayer-current-time'));


const onPlay = function (data) {

  // let currentPlayTime = 0;





  // player
  //   .setCurrentTime(30.456)
  //   .then(function (seconds) {
  //     // seconds = the actual time that the player seeked to
  //   })
  //   .catch(function (error) {
  //     switch (error.name) {
  //       case 'RangeError':
  //         // the time was less than 0 or greater than the video’s duration
  //         break;

  //       default:
  //         // some other error occurred
  //         break;
  //     }
  //   });

// console.log('played the video!');

  // data is an object containing properties specific to that event
};

// player.on(throttle(1000), onPlay);