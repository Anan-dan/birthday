window.addEventListener('load', function() {
    var audio = document.getElementById('myAudio');
    audio.play().catch(function(error) {
        console.error('自动播放被阻止:', error);
    });
});