document.addEventListener('DOMContentLoaded', function() {
    let  immigrant = document.getElementById('immigrant');
    let replayButton = document.getElementById('replayButton');
    let stopButton = document.getElementById('stopButton')
    var playAudio = new Audio('Led Zeppelin Immigrant Song.mp3');

    immigrant.addEventListener('click', function(){

        playAudio.play();
        });

    replayButton.addEventListener('click', function() {
          playAudio.pause()
          playAudio.currentTime = 0
          playAudio.play()
        });

    stopButton.addEventListener('click', function(){
       playAudio.pause()
    });
    });


