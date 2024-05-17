document.addEventListener('DOMContentLoaded', function() {
    let  playButton = document.getElementById('playButton');
    let replayButton = document.getElementById('replayButton');
    var playAudio = new Audio('10 Immigrant Song.mp3');

    playButton.addEventListener('click', function(){

        playAudio.play();
        });

    replayButton.addEventListener('click', function() {
          playAudio.pause()
          playAudio.currentTime = 0
          playAudio.play()
    });
    });


