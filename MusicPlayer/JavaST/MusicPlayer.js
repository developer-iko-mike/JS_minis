let                 $ = document;
const body =        $.body;
let musicCover =    $.getElementById("musicCover");
let nameSong =      $.getElementById("nameSong");
let nameRappers =   $.getElementById("nameRappers");
// let timePlay =   $.getElementById("time");
// let fullTime =   $.getElementById("fullTime");
let previousMusic = $.getElementById("previous");
let play =          $.getElementById("play");
let pause =         $.getElementById("pause");
let nextMusic =     $.getElementById("nextMusic");
let music =         $.querySelector("audio");
let timeContiner =  $.getElementById("progress-container");
let progress =      $.getElementById("progress");
let timePlay =      $.getElementById('current-time')
let timeDuration =  $.getElementById('duration')
let audioID = 1;

let musicPacks = [
  {
    id: 1,
    nameSong: "Straig Outta Copmton",
    rapears: "NWA",
    musicSrc: "./Assets/Musics/StraightOuttaCopton.mp3",
    MusicCover: "./Assets/NWA-st.png",
  },
  {
    id: 2,
    nameSong: "F The Police",
    rapears: "NWA",
    musicSrc: "./Assets/Musics/FthePolice.mp3",
    MusicCover: "./Assets/NWA-SOC.png",
  },
  {
    id: 3,
    nameSong: "No Vaslien",
    rapears: "Ice Cube",
    musicSrc: "./Assets/Musics/NoVaslien.mp3",
    MusicCover: "./Assets/icecubeNovaslienSong.png",
  },
];
function previousMusicsHandler() {
  audioID--;
  if (audioID < 0) {
    audioID = 3;
  }
  body.style.backgroundImage = "url(" + musicPacks[audioID].MusicCover + ")";
  musicCover.src = musicPacks[audioID].MusicCover;
  nameSong.innerHTML = musicPacks[audioID].nameSong;
  nameRappers.innerHTML = musicPacks[audioID].rapears;
  music.src = musicPacks[audioID].musicSrc;
  playHandler();
}
function nextMusicHandler() {
  audioID++;
  if (audioID > musicPacks.length - 1) {
    audioID = 0;
  }
  body.style.backgroundImage = "url(" + musicPacks[audioID].MusicCover + ")";
  musicCover.src = musicPacks[audioID].MusicCover;
  nameSong.innerHTML = musicPacks[audioID].nameSong;
  nameRappers.innerHTML = musicPacks[audioID].rapears;
  music.src = musicPacks[audioID].musicSrc;
  playHandler();
}
function playHandler() {
  play.style.display = "none";
  music.play();
  pause.style.display = "block";
  let musicTe = music.duration;
  // fullTime.innerHTML =  Math.round(musicTe / 60)
  if (music.currentTime === music.duration) {
    nextMusic();
  }
}
function pauseHandler() {
  pause.style.display = "none";
  music.pause();
  play.style.display = "block";
}
function qickControl(event) {
  if (event.keyCode === 32) {
    pauseHandler();
  }
  if (event.keyCode === 13) {
    playHandler();
  }
}

// تابع تبدیل ثانیه به فرمت دقیقه:ثانیه
function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
}

// تابع بروزرسانی نوار پیشرفت
function updateProgress(e) {
  const { duration, currentTime } = e.srcElement;
  const progressPercent = (currentTime / duration) * 100;
  progress.style.width = `${progressPercent}%`;
  timePlay.textContent = formatTime(currentTime);
  timeDuration.textContent = formatTime(duration);
}

// تابع تنظیم پیشرفت دستی با کلیک
function setProgress(e) {
  const width = this.clientWidth;
  const clickX = e.offsetX;
  const duration = music.duration;
  music.currentTime = (clickX / width) * duration;
}

// اضافه کردن event listeners
music.addEventListener('timeupdate', updateProgress);
music.addEventListener('ended', nextMusicHandler);
timeContiner.addEventListener('click', setProgress);

// تابع مقداردهی اولیه زمان
function updateTime() {
  timeDuration.textContent = formatTime(music.duration);
}

music.addEventListener('loadedmetadata', updateTime);

nextMusic.addEventListener("click", nextMusicHandler);
play.addEventListener("click", playHandler);
pause.addEventListener("click", pauseHandler);
previousMusic.addEventListener("click", previousMusicsHandler);
body.addEventListener("keydown", qickControl);

