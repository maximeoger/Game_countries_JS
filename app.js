var start_btn = document.querySelector('.start');
var restart_btn = document.querySelector('.restart');
var to_find = document.querySelector('.to_find');
var start_window = document.querySelector('#game-start');
var game_over_window = document.querySelector('#game-over');
var counter_disp = document.querySelector('.time span');

/* set the time in seconds for the game */
var timeMax = 20;

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

function gameLauncher () {
    start_window.classList.toggle('is-open');
    counterStart(timeMax); 
}

function gameOver () {
    game_over_window.classList.toggle('is-open');
}

start_btn.addEventListener('click', gameLauncher);
restart_btn.addEventListener('click', function(){
    game_over_window.classList.remove('is-open');
    counterStart(timeMax);
});