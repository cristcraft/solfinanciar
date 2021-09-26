var playBtn = document.getElementById('play-btn');
var pauseBtn = document.getElementById('pause-btn');
var muteBtn = document.getElementById('mute-btn');
var unmuteBtn = document.getElementById('unmute-btn');
var stopBtn = document.getElementById('stop-btn');
var replayBtn = document.getElementById('replay-btn');

playBtn.addEventListener('click', pausePlayHandler, false);
pauseBtn.addEventListener('click', pausePlayHandler, false);
muteBtn.addEventListener('click', muteUnmuteHandler, false);
unmuteBtn.addEventListener('click', muteUnmuteHandler, false);
stopBtn.addEventListener('click', stopHandler, false);
replayBtn.addEventListener('click', replayHandler, false);

function pausePlayHandler(e) {
    if (video1.paused) {
        // Si está en pausa, reprodúzcalo
        video1.play();
        // Haga que se muestre el botón de pausa y se oculte el botón de reproducción
        pauseBtn.style.visibility = 'visible';
        playBtn.style.visibility = 'hidden';
    } else {
        // Si se está reproduciendo, páuselo
        video1.pause();
        // Haga que se muestre el botón de reproducción y se oculte el botón de pausa
        pauseBtn.style.visibility = 'hidden';
        playBtn.style.visibility = 'visible';
    }
}

function muteUnmuteHandler(e) {
    if (video1.volume == 0.0) {
        // Si está silenciado, active el sonido
        video1.volume = 1.0;
        // Haga que se muestre el botón de silencio y se oculte el botón de activación de sonido
        muteBtn.style.visibility = 'visible';
        unmuteBtn.style.visibility = 'hidden';
    } else {
        // Si el sonido está activado, siléncielo
        video1.volume = 0.0;
        // Haga que se muestre el botón de activación de sonido y se oculte el botón de silencio
        muteBtn.style.visibility = 'hidden';
        unmuteBtn.style.visibility = 'visible';
    }
}

function stopHandler(e) {
    // No hay método de detención para el vídeo en HTML5
    // Como solución, pause el vídeo
    // y establezca currentTime como 0
    video1.currentTime = 0;
    video1.pause();
    // Muestre u oculte otros botones de vídeo según corresponda
}

function replayHandler(e) {
    // No hay método de volver a reproducir en el vídeo en HTML5
    // Como solución, establezca currentTime como 0
    // y reproduzca el vídeo
    video1.currentTime = 0;
    video1.play();
    // Muestre u oculte otros botones de vídeo según corresponda
} var playBtn = document.getElementById('play-btn');
var pauseBtn = document.getElementById('pause-btn');
var muteBtn = document.getElementById('mute-btn');
var unmuteBtn = document.getElementById('unmute-btn');
var stopBtn = document.getElementById('stop-btn');
var replayBtn = document.getElementById('replay-btn');

playBtn.addEventListener('click', pausePlayHandler, false);
pauseBtn.addEventListener('click', pausePlayHandler, false);
muteBtn.addEventListener('click', muteUnmuteHandler, false);
unmuteBtn.addEventListener('click', muteUnmuteHandler, false);
stopBtn.addEventListener('click', stopHandler, false);
replayBtn.addEventListener('click', replayHandler, false);

function pausePlayHandler(e) {
    if (video1.paused) {
        // Si está en pausa, reprodúzcalo
        video1.play();
        // Haga que se muestre el botón de pausa y se oculte el botón de reproducción
        pauseBtn.style.visibility = 'visible';
        playBtn.style.visibility = 'hidden';
    } else {
        // Si se está reproduciendo, páuselo
        video1.pause();
        // Haga que se muestre el botón de reproducción y se oculte el botón de pausa
        pauseBtn.style.visibility = 'hidden';
        playBtn.style.visibility = 'visible';
    }
}

function muteUnmuteHandler(e) {
    if (video1.volume == 0.0) {
        // Si está silenciado, active el sonido
        video1.volume = 1.0;
        // Haga que se muestre el botón de silencio y se oculte el botón de activación de sonido
        muteBtn.style.visibility = 'visible';
        unmuteBtn.style.visibility = 'hidden';
    } else {
        // Si el sonido está activado, siléncielo
        video1.volume = 0.0;
        // Haga que se muestre el botón de activación de sonido y se oculte el botón de silencio
        muteBtn.style.visibility = 'hidden';
        unmuteBtn.style.visibility = 'visible';
    }
}

function stopHandler(e) {
    // No hay método de detención para el vídeo en HTML5
    // Como solución, pause el vídeo
    // y establezca currentTime como 0
    video1.currentTime = 0;
    video1.pause();
    // Muestre u oculte otros botones de vídeo según corresponda
}

function replayHandler(e) {
    // No hay método de volver a reproducir en el vídeo en HTML5
    // Como solución, establezca currentTime como 0
    // y reproduzca el vídeo
    video1.currentTime = 0;
    video1.play();
    // Muestre u oculte otros botones de vídeo según corresponda
}