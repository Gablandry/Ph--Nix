/* Défileur vertical des régions — une ville à la fois, mouvement lent et discret */
(function () {
  var list = document.getElementById('ticker-list');
  if (!list) return;
  if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  var step = 1.25; // doit correspondre à la hauteur d'item (em)
  var total = list.children.length - 1; // exclut le clone final
  var i = 0;
  setInterval(function () {
    i++;
    list.style.transition = 'transform 0.55s cubic-bezier(0.5,0,0.2,1)';
    list.style.transform = 'translateY(-' + (i * step) + 'em)';
    if (i === total) {
      setTimeout(function () {
        list.style.transition = 'none';
        list.style.transform = 'translateY(0)';
        i = 0;
      }, 570);
    }
  }, 1900);
})();
