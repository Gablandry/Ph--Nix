/* Fondateurs — les deux portraits défilent à des vitesses très légèrement différentes.
   C'est ce décalage, à peine perceptible, qui donne l'impression de profondeur. */
(function () {
  var els = document.querySelectorAll('[data-parallax]');
  if (!els.length) return;
  if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  if (window.matchMedia && window.matchMedia('(max-width: 860px)').matches) return;

  var enAttente = false;
  function placer() {
    var milieu = window.innerHeight / 2;
    els.forEach(function (el) {
      var r = el.getBoundingClientRect();
      if (r.bottom < 0 || r.top > window.innerHeight) return;
      var centre = r.top + r.height / 2;
      var decalage = (centre - milieu) * parseFloat(el.dataset.parallax);
      el.style.transform = 'translateY(' + decalage.toFixed(1) + 'px)';
    });
    enAttente = false;
  }
  window.addEventListener('scroll', function () {
    if (!enAttente) { enAttente = true; requestAnimationFrame(placer); }
  }, { passive: true });
  placer();
})();

/* Ruban « Sur le terrain » — la piste est dupliquee pour boucler sans raccord */
(function () {
  var ruban = document.getElementById('galerie-ruban');
  var piste = document.getElementById('ruban-piste');
  if (!ruban || !piste) return;

  // On duplique une seule fois : l'animation va jusqu'a -50 %, donc la seconde
  // moitie prend exactement la place de la premiere au moment du retour.
  var originaux = Array.prototype.slice.call(piste.children);
  originaux.forEach(function (el) {
    var copie = el.cloneNode(true);
    copie.setAttribute('aria-hidden', 'true');
    // La visionneuse est branchee sur les originaux : la copie relaie le clic.
    copie.addEventListener('click', function () { el.click(); });
    piste.appendChild(copie);
  });

  // La duree suit le nombre de photos, sinon un ruban plus long defile plus vite.
  ruban.style.setProperty('--duree', (originaux.length * 5.5) + 's');
  piste.style.animationDuration = (originaux.length * 5.5) + 's';

  // Les vidéos ne se téléchargent qu'à l'approche de la galerie : ceux qui ne
  // descendent pas jusqu'ici n'en paient jamais le poids.
  function activerVideos() {
    ruban.querySelectorAll('video[data-src]').forEach(function (v) {
      v.src = v.dataset.src;
      v.removeAttribute('data-src');
      v.play().catch(function () {});
    });
  }
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      if (entries[0].isIntersecting) { activerVideos(); io.disconnect(); }
    }, { rootMargin: '300px' });
    io.observe(ruban);
  } else {
    activerVideos();
  }
})();

/* Entrevue — on ne charge YouTube qu'au clic sur la miniature */
(function () {
  var btn = document.getElementById('testi-facade');
  if (!btn) return;
  btn.addEventListener('click', function () {
    var frame = document.createElement('iframe');
    frame.src = 'https://www.youtube-nocookie.com/embed/OJ-6xagkNmM?start=947&rel=0&autoplay=1';
    frame.title = 'Entrevue avec Michel Couture, fondateur de Phé-Nix';
    frame.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
    frame.allowFullscreen = true;
    frame.setAttribute('sandbox', 'allow-scripts allow-same-origin allow-presentation allow-popups');
    frame.setAttribute('referrerpolicy', 'strict-origin');
    btn.replaceWith(frame);
  });
})();

/* Hero — le logo reste fixe ; le texte, les boutons et le menu se révèlent au scroll. */
(function () {
  var section = document.getElementById('intro-phenix');
  var hint = document.getElementById('intro-phenix-hint');
  if (!section) return;

  var reduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduced || !window.gsap || !window.ScrollTrigger) {
    // Sans animation : tout est visible d'emblée.
    if (hint) hint.style.display = 'none';
    return;
  }

  // À partir d'ici le scroll pilote l'affichage : on masque texte + menu au départ.
  document.body.classList.add('hero-anim');

  var header = document.getElementById('site-header');
  var content = document.getElementById('hero-content');
  var scrim = document.getElementById('intro-phenix-scrim');

  gsap.registerPlugin(ScrollTrigger);

  var tl = gsap.timeline({
    scrollTrigger: {
      trigger: section,
      start: 'top top',
      end: '+=85%',
      scrub: true,
      pin: true,
      anticipatePin: 1
    }
  });

  if (hint) tl.to(hint, { opacity: 0, ease: 'none', duration: 0.25 }, 0);
  if (scrim) tl.to(scrim, { opacity: 1, ease: 'none', duration: 0.45 }, 0.15);
  if (content) tl.to(content, { opacity: 1, ease: 'none', duration: 0.4 }, 0.4);
})();
