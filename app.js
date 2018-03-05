var start_btn = document.querySelector('.start');
var to_find = document.querySelector('.to_find');
var start_window = document.querySelector('#game-start');
var game_over_window = document.querySelector('#game-over');
var counter_disp = document.querySelector('.time span');

/* set the time in seconds for the game */
var maxTime = 20;

function counterStart (value) {
    var timeLeft = value;
    counter_disp.innerHTML = timeLeft;

    timer = setInterval (function (){
        timeLeft --;
        counter_disp.innerHTML = timeLeft;
        console.log(timeLeft);
        if(timeLeft % 2 == 0){
            console.log('tac');
        }else{
            console.log('tic');
        }
        if (timeLeft == 0){
            clearInterval(timer);
           
            console.log('BOUM');
            gameOver();
        }  
    }, 1000);
    
}

function gameLauncher () {
    start_window.classList.toggle('is-open');
    counterStart(maxTime); 
}

function gameOver () {
    game_over_window.classList.toggle('is-open');
}



start_btn.addEventListener('click', gameLauncher);
