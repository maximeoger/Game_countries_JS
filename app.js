var start_btn = document.querySelector('.start');
var restart_btn = document.querySelector('.restart');
var to_find = document.querySelector('.to_find');
var start_window = document.querySelector('#game-start');
var game_over_window = document.querySelector('#game-over');
var counter_disp = document.querySelector('.time span');
// var active_flags = [0, 1, 2, 3];
var flags_code = [];
var timeMax = 20;
var bonus = 4;
var el = document.querySelectorAll('.flags .img');
var yourname = document.querySelector('.name_flag');
var life = document.querySelectorAll('.lives img');

// init
function generateFlags() {

  flags_code = [];

  for (let i = 0; i < el.length; i++) {
    let nb = Math.floor(Math.random() * flags.length);
    let random = Math.floor(Math.random() * el.length);

    el[i].setAttribute('src', 'flags/' + flags[nb].code.toLowerCase() + '.svg');
    Array.from(el).splice(random, 1);
    flags_code.push(flags[nb].name);

    console.log(flags_code);
    el[i].dataset.name = flags_code[i];
  }
  yourname.innerHTML = flags_code[Math.floor(Math.random() * el.length)];
}

for (let i = 0; i < el.length; i++) {
  el[i].addEventListener('click', function() {
    //console.log(el[i].dataset.name);
    if (el[i].dataset.name === yourname.innerHTML){
      generateFlags();
      timeMax+=3;
      if (timeMax > 30) {
        timeMax = 30;
      }
      counter_disp.innerHTML = timeMax;

    } else {
      el[i].classList.add('is-active');
    }
  });
}

start_btn.addEventListener('click', generateFlags());
/* temps d'un Round en secondes ( modifiable selon la difficultée ) */


function init(){
  timeMax = 20;
  counter_disp.innerHTML = timeMax;

  var timer = setInterval(function() {
   timeMax--;
   counter_disp.innerHTML = timeMax;
   if (timeMax < 1) {
     clearInterval(timer);
     gameOver();
   }
 }, 1000);
}

/* affiche la fenetre de jeu et démarre le compteur ( fonction précédente ) */
function gameLauncher() {
  start_window.classList.toggle('is-open');
  init();
}
/* fonction qui lance la fenettre du game over (résultant de la fonction counterStart si timeMax arrive à zéro) */
function gameOver() {
  game_over_window.classList.toggle('is-open');
}
/* lance le jeu */
start_btn.addEventListener('click', gameLauncher);

restart_btn.addEventListener('click', function() {
  game_over_window.classList.remove('is-open');
  init();
  lifePts = 3;
  generateFlags();
});
