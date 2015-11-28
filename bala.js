var horizontal = 1;
var vertical = 1;
var tempo = 0;
        
function moveBala() {
    tempo = (tempo + 0.1);
     horizontal = (70 * tempo);
     vertical = (5 * (tempo * tempo));
     document.querySelector('#bala').style.left = horizontal + 'px';
     document.querySelector('#bala').style.top = vertical + 'px';
 }
var relogio = setInterval(moveBala, 20);
function paraBala() {
     clearInterval(relogio);
 }
<<<<<<< HEAD
document.querySelector('#parar').onclick = paraBala;
=======
document.querySelector('#parar').onclick = paraBala;
>>>>>>> 34ced9944da2b01b3b023121569472f40b169287
