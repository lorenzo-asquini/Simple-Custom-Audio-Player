document.addEventListener("DOMContentLoaded", function() { initiatePlayer(); }, false);

function initiatePlayer(){  //Remove default controls
    var customAudioPlayers = document.getElementsByClassName("customAudio");

    for(var i = 0; i++; i < customAudioPlayers.length){
        customAudioPlayers[i].controls = false;
    }
}

function start_pause(playButton){
    var parentId = playButton.parentNode.id;  //Id of the div where the button is
    var audioObj = document.getElementById(parentId).children["audioObj"];

    if(!audioObj.paused){  //Stop playing. The button shows the possibility to resume playing
        audioObj.pause();
        playButton.src="images/play-button.png";
    }else{  //Start playing. The button shows the possibility to stop playing
        audioObj.play();
        playButton.src="images/pause-button.png";
    }

    if(playButton.getAttribute("data-firstpress") == "true"){  //Start the handler only once
        playButton.setAttribute("data-firstpress", "false");
        setInterval( function() { handlePlayerStats(parentId);}, 500);
    }

    return false;
}

function handlePlayerStats(parentId) {
    var sliderObj = document.getElementById(parentId).children["timeSlider"];  //All the obj needed
    var audioObj = document.getElementById(parentId).children["audioObj"];
    var currentTimeObj = document.getElementById(parentId).children["currentTime"];
    var durationTimeObj = document.getElementById(parentId).children["durationTime"];

    if(audioObj.readyState > 0){  //Audio has loaded something (at least metadata)
        if(sliderObj.max == 0){  //First time setting everythings up
            sliderObj.max = audioObj.duration;
            durationTimeObj.innerHTML = secondsToString(audioObj.duration);

            if(audioObj.duration >= 3600){  //Adapt slider dimension according to audio duration
                sliderObj.style.width = "calc(98% - 170px)";
            }else{
                sliderObj.style.width = "calc(98% - 140px)";
            }
        }

        currentTimeObj.innerHTML = secondsToString(audioObj.currentTime);  //Change current time displayed

        if(Math.abs(sliderObj.value-audioObj.currentTime) >= 2 ){  //Less than a step difference is regular movement
            audioObj.currentTime = sliderObj.value;  //Jump in the audio track using the slider. The mapping of values is not necessary
        }

        sliderObj.value = audioObj.currentTime;  //Adjust slider according to the current timing
    }

    if(audioObj.ended){
        audioObj.pause();
        document.getElementById(parentId).children["controlButton"].src="images/play-button.png";
    }
}

function secondsToString(s){
    if(s >= 3600){
        var hours = Math.floor(s/3600);
        var minutes = Math.floor((s-hours*3600)/60);
        var seconds = Math.floor(s-minutes*60-hours*3600);
        return (hours+":"+minutes.toString().padStart(2, "0")+":"+seconds.toString().padStart(2, "0"));
    }else{
        var minutes = Math.floor(s/60);
        var seconds = Math.floor(s-minutes*60);
        return (minutes.toString().padStart(2, "0")+":"+seconds.toString().padStart(2, "0"));
    }
}
