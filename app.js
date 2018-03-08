var el = document.querySelectorAll('.img');
var active_flags = [0, 1, 2, 3];


function generateFlags() {
  for (var i = 0; i < 4; i++) {
    var nb = Math.floor(Math.random() * flags.length);

    var drapeau = flags[nb].code.toLowerCase();
    el[i].setAttribute('src', 'flags/' + drapeau + '.svg');

    var random = Math.floor(Math.random() * active_flags.length);



    var number = active_flags[random];
    active_flags.splice(random, 1);
    console.log(active_flags);


    if (number === 1) {
      var name = document.querySelector('.name_flag');
      name.innerHTML = flags[nb].name;

    }
  }

}


start_btn.addEventListener('click', generateFlags());


// écouter les clicks sur les imgs


/*el.forEach(function(e) {
  this.addEventListener('click', function() {
    console.log(e);
  });
});
*/
