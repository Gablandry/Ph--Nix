/* Marque que le JavaScript fonctionne : sans cette classe, les sections
   animees restent visibles au lieu de disparaitre. Le minuteur les revele
   si le script d'animation n'a pas pris le relais apres 3 secondes. */
document.documentElement.className += ' js';
setTimeout(function () {
  if (!document.querySelector('.reveal.visible, .reveal-left.visible, .reveal-right.visible')) {
    document.documentElement.className += ' reveal-secours';
  }
}, 3000);
