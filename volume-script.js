var video;

$(document).ready(function(){
	video = $('video');
    
    for(var i = 0; i < video.length; i++){
        video[i].onvolumechange = function(e){
            console.log();
            setVolume(e.target.volume);
        }
    }
    
    function setVolume(val){
        for(var i = 0; i < video.length; i++){
            video[i].volume = val;
        }
    }
});