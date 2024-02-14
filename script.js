document.addEventListener('DOMContentLoaded', function () {
    const audioPlayer = document.getElementById('audioPlayer');
    const playButton = document.getElementById('playButton');
    const pauseButton = document.getElementById('pauseButton');
    const stopButton = document.getElementById('stopButton');
    const progress = document.getElementById('progress');
    const currentTimeDisplay = document.getElementById('currentTime');
    const durationDisplay = document.getElementById('duration');
  
    playButton.addEventListener('click', function () {
      audioPlayer.play();
    });
  
    pauseButton.addEventListener('click', function () {
      audioPlayer.pause();
    });
  
    stopButton.addEventListener('click', function () {
      audioPlayer.pause();
      audioPlayer.currentTime = 0;
    });
  
    audioPlayer.addEventListener('timeupdate', function () {
      const duration = audioPlayer.duration;
      const currentTime = audioPlayer.currentTime;
      const progressWidth = (currentTime / duration) * 100;
      progress.style.width = `${progressWidth}%`;
  
      const minutes = Math.floor(currentTime / 60);
      let seconds = Math.floor(currentTime % 60);
      if (seconds < 10) {
        seconds = `0${seconds}`;
      }
      currentTimeDisplay.textContent = `${minutes}:${seconds}`;
  
      const durationMinutes = Math.floor(duration / 60);
      let durationSeconds = Math.floor(duration % 60);
      if (durationSeconds < 10) {
        durationSeconds = `0${durationSeconds}`;
      }
      durationDisplay.textContent = `${durationMinutes}:${durationSeconds}`;
    });
  });
  