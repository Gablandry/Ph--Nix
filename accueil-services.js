/* Accordeon des services : le panneau atteint par la souris ou le clavier
   s'ouvre et le reste jusqu'au suivant. Sans JavaScript, le premier reste
   ouvert et les quatre liens fonctionnent. */
(function () {
  var panneaux = document.querySelectorAll('.vitrine-liste li');
  function ouvrir(li) {
    for (var k = 0; k < panneaux.length; k++) panneaux[k].classList.toggle('ouvert', panneaux[k] === li);
  }
  panneaux.forEach(function (li) {
    li.addEventListener('mouseenter', function () { ouvrir(li); });
    li.addEventListener('focusin', function () { ouvrir(li); });
  });
})();
