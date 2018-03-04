var start_btn = document.querySelector('.start');
var to_find = document.querySelector('.to_find');
var start_window = document.querySelector('#game-start');
var game_over_window = document.querySelector('#game-over');
var counter_disp = document.querySelector('.time span');

/* set the time in seconds for the game */
var time = 20;

function counter () {
    timer = setTimeout(function (){
        console.log('tic tac');
    }, 1000 * time);
}

function counterStart () {
    var counter = value;
    counter_disp.innerHTML = value;
    counter();
}

function gameLauncher () {
    start_window.classList.toggle('is-open');
    counterStart(); 
}

function gameOver () {
    game_over_window.classList.toggle('is-open');
}



start_btn.addEventListener('click', gameLauncher);
