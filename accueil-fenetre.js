/* La fenetre apparait apres 5 s et presente les services un a la fois, sans
   jamais bloquer la page. Pour rester discrete :
   - un seul message visible, remplace en fondu toutes les 10 s ;
   - un seul tour : apres le troisieme, elle revient au premier et s'arrete ;
   - la rotation se met en pause tant que la souris ou le clavier est dessus ;
   - aucune rotation si le visiteur a demande moins d'animations ;
   - fermee, elle ne revient pas tant que l'onglet reste ouvert. */
(function () {
  var pop = document.getElementById('aide-pop');
  if (!pop) return;
  var fermee = false;
  try { fermee = sessionStorage.getItem('aidePopFermee') === '1'; } catch (e) {}
  if (fermee) { pop.hidden = true; return; }

  var msgs = pop.querySelectorAll('.aide-pop-lien');
  var n = 0, vus = 1, minuteur = null, pause = false;
  var calme = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function montrer(k) {
    for (var i = 0; i < msgs.length; i++) msgs[i].classList.toggle('actif', i === k);
    n = k;
  }
  function suivant() {
    if (pause) return;
    if (vus >= msgs.length) { montrer(0); clearInterval(minuteur); minuteur = null; return; }
    montrer((n + 1) % msgs.length); vus++;
  }

  setTimeout(function () {
    pop.classList.add('visible');
    document.documentElement.classList.add('aide-pop-on');
    if (!calme && msgs.length > 1) minuteur = setInterval(suivant, 10000);
  }, 5000);

  pop.addEventListener('mouseenter', function () { pause = true; });
  pop.addEventListener('mouseleave', function () { pause = false; });
  pop.addEventListener('focusin', function () { pause = true; });
  pop.addEventListener('focusout', function () { pause = false; });

  document.getElementById('aide-pop-fermer').addEventListener('click', function () {
    pop.classList.remove('visible');
    document.documentElement.classList.remove('aide-pop-on');
    if (minuteur) clearInterval(minuteur);
    try { sessionStorage.setItem('aidePopFermee', '1'); } catch (e) {}
  });
})();
