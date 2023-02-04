import Player from "@vimeo/player"
// import throttle from "lodash.throttle"

const iframe = document.querySelector('#vimeo-player');
    const player = new Player(iframe);

    const onPlay = ({ seconds }) => {
        localStorage.setItem ("videoplayer-current-time", seconds);

    };

    player.on("timeupdate", throttle(onPlay, 1000));
player.setCurrentTime(localStorage.getItem("videoplayer-current-time"))


// player.on("timeupdate", throttle(function (data) {
//     const time = data.seconds;
//     console.log(time);
//    localStorage.setItem(TIME_DATA_PLAYER, time)
// },1000))