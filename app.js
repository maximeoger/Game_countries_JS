var start_btn = document.querySelector('.start');
var restart_btn = document.querySelector('.restart');
var to_find = document.querySelector('.to_find');
var start_window = document.querySelector('#game-start');
var game_over_window = document.querySelector('#game-over');
var counter_disp = document.querySelector('.time span');
var lifePts = 3;

/* temps d'un Round en secondes ( modifiable selon la difficultée ) */
var timeMax = 20;

/* cette fonction gère le compteur, toutes les 1000 ms (1sec) il décrémente de 1 la valeur de timeMax */
function counterStart (value) {
    var timeLeft = value;
    counter_disp.innerHTML = timeLeft;

    timer = setInterval (function (){

        timeLeft --;
        counter_disp.innerHTML = timeLeft;

        if (timeLeft == 0){
            clearInterval(timer);
            gameOver();
        }  
    }, 1000);
    
}

/* affiche la fenetre de jeu et démarre le compteur ( fonction précédente ) */
function gameLauncher () {
    start_window.classList.toggle('is-open');
    counterStart(timeMax); 
}

/* fonction qui lance la fenettre du game over (résultant de la fonction counterStart si timeMax arrive à zéro) */ 
function gameOver () {
    game_over_window.classList.toggle('is-open');
}

function missed() {
    lifePts--;
    if(lifePts == 0){
        gameOver();
    }
    timeMax - 4;
}
/* lance le jeu */
start_btn.addEventListener('click', gameLauncher);
restart_btn.addEventListener('click', function(){
    game_over_window.classList.remove('is-open');
    counterStart(timeMax);
});

