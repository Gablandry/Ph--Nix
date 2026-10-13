/* Charge la carte Google seulement quand la personne la demande. Avant le
   clic, aucune donnee du visiteur ne part vers Google. */
function afficherCarte(btn) {
  var boite = btn.parentElement;
  var f = document.createElement('iframe');
  var adresse = boite.dataset.carte || '';
  /* seule une carte Google peut etre chargee ici, quoi que contienne la page */
  if (adresse.indexOf('https://www.google.com/maps') !== 0) return;
  f.src = adresse;
  f.setAttribute('sandbox', 'allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox');
  f.loading = 'lazy';
  f.title = btn.getAttribute('aria-label');
  f.setAttribute('referrerpolicy', 'no-referrer');
  f.setAttribute('allowfullscreen', '');
  btn.remove();
  boite.appendChild(f);
}
