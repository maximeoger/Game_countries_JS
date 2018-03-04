var start_btn = document.querySelector('.start');
var to_find = document.querySelector('.to_find');
var start_window = document.querySelector('#game-start');


function gameLauncher() {
    start_window.classList.toggle('is-open');
}

start_btn.addEventListener('click', gameLauncher);