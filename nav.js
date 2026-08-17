// ===== PHÉ-NIX — Navigation partagée + Animations =====

(function () {
  const header      = document.getElementById('site-header');
  const hamburger   = document.getElementById('nav-hamburger');
  const mobilePanel = document.getElementById('nav-mobile-panel');

  // Scroll → header opaque
  if (header) {
    const onScroll = () => header.classList.toggle('scrolled', window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  // Hamburger / menu mobile
  if (hamburger && mobilePanel) {
    hamburger.addEventListener('click', () => {
      const isOpen = mobilePanel.classList.contains('open');
      hamburger.classList.toggle('open', !isOpen);
      mobilePanel.classList.toggle('open', !isOpen);
      document.body.style.overflow = !isOpen ? 'hidden' : '';
    });
    mobilePanel.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('open');
        mobilePanel.classList.remove('open');
        document.body.style.overflow = '';
      });
    });
  }

  // FAQ accordion (partagé)
  // texte du recit fondateur : deplie sur place, sans changer de page
  window.toggleRecit = function (btn) {
    const bloc = btn.closest('.recit');
    const ouvert = bloc.classList.toggle('ouvert');
    btn.setAttribute('aria-expanded', ouvert ? 'true' : 'false');
    btn.querySelector('span').textContent = ouvert ? 'Lire moins' : 'Lire plus';
  };

  window.toggleFaq = function (btn) {
    const item    = btn.closest('.faq-item');
    const wasOpen = item.classList.contains('open');
    document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
    if (!wasOpen) item.classList.add('open');
  };

  // ===== SCROLL REVEAL =====
  const revealEls = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
  if (revealEls.length && 'IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -60px 0px' });
    revealEls.forEach(el => io.observe(el));
  } else {
    revealEls.forEach(el => el.classList.add('visible'));
  }

  // ===== ANIMATIONS REJOUABLES (se relancent à chaque passage à l'écran) =====
  const replayEls = document.querySelectorAll('[data-replay]');
  if (replayEls.length && 'IntersectionObserver' in window) {
    const ro = new IntersectionObserver((entries) => {
      entries.forEach(e => e.target.classList.toggle('actif', e.isIntersecting));
    }, { threshold: 0.25 });
    replayEls.forEach(el => ro.observe(el));
  } else {
    replayEls.forEach(el => el.classList.add('actif'));
  }

  // ===== COUNTER ANIMATION =====
  const counters = document.querySelectorAll('[data-counter]');
  if (counters.length && 'IntersectionObserver' in window) {
    const co = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        const el = e.target;
        // Sortie d'écran : on réarme pour que le compte reparte au prochain passage
        if (!e.isIntersecting) { el.dataset.counting = ''; return; }
        // Déjà en cours ou terminé pendant cette visite : on ne relance pas
        if (el.dataset.counting === '1') return;
        el.dataset.counting = '1';
        const target = parseFloat(el.dataset.target);
        const suffix = el.dataset.suffix || '';
        const prefix = el.dataset.prefix || '';
        const dur    = 1800;
        const t0     = performance.now();
        const isInt  = (target % 1 === 0);
        (function tick(now) {
          const p     = Math.min((now - t0) / dur, 1);
          const eased = 1 - Math.pow(1 - p, 3);
          const raw   = isInt ? Math.round(target * eased) : (target * eased).toFixed(1);
          const val   = isInt ? raw.toLocaleString('fr-CA') : raw;
          el.textContent = prefix + val + suffix;
          if (p < 1) requestAnimationFrame(tick);
        })(t0);
      });
    }, { threshold: 0.4 });
    counters.forEach(el => co.observe(el));
  }

  // ===== SCROLL TO TOP =====
  const scrollTopBtn = document.getElementById('scroll-top-btn');
  if (scrollTopBtn) {
    window.addEventListener('scroll', () => {
      scrollTopBtn.classList.toggle('visible', window.scrollY > 700);
    }, { passive: true });
    scrollTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // ===== TESTIMONIALS CAROUSEL =====
  const tSlides = document.getElementById('t-slides');
  const tDotBtns = document.querySelectorAll('.t-dot');
  const tPrevBtn = document.querySelector('.t-prev');
  const tNextBtn = document.querySelector('.t-next');
  if (tSlides && tDotBtns.length) {
    let tCurrent = 0;
    let tTimer;

    const tGoTo = (idx) => {
      tCurrent = ((idx % tDotBtns.length) + tDotBtns.length) % tDotBtns.length;
      tSlides.style.transform = `translateX(-${tCurrent * 100}%)`;
      tDotBtns.forEach((d, i) => d.classList.toggle('active', i === tCurrent));
    };

    const tAutoStart = () => { tTimer = setInterval(() => tGoTo(tCurrent + 1), 5500); };
    const tAutoReset = () => { clearInterval(tTimer); tAutoStart(); };

    tDotBtns.forEach((d, i) => d.addEventListener('click', () => { tGoTo(i); tAutoReset(); }));
    if (tPrevBtn) tPrevBtn.addEventListener('click', () => { tGoTo(tCurrent - 1); tAutoReset(); });
    if (tNextBtn) tNextBtn.addEventListener('click', () => { tGoTo(tCurrent + 1); tAutoReset(); });

    let tTouchX = 0;
    tSlides.addEventListener('touchstart', e => { tTouchX = e.touches[0].clientX; }, { passive: true });
    tSlides.addEventListener('touchend', e => {
      const diff = tTouchX - e.changedTouches[0].clientX;
      if (Math.abs(diff) > 50) { tGoTo(tCurrent + (diff > 0 ? 1 : -1)); tAutoReset(); }
    }, { passive: true });

    tAutoStart();
  }

  // ===== BARRES ANIMÉES AU SCROLL (don usage + progress) =====
  const usageBars = document.querySelectorAll('.usage-fill[data-width], .repart-fill[data-width], .don-usage-fill[data-width], .don-progress-bar-fill[data-width]');
  if (usageBars.length && 'IntersectionObserver' in window) {
    const barIO = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (!e.isIntersecting) return;
        barIO.unobserve(e.target);
        setTimeout(() => { e.target.style.width = e.target.dataset.width; }, 150);
      });
    }, { threshold: 0.3 });
    usageBars.forEach(bar => barIO.observe(bar));
  } else {
    usageBars.forEach(bar => { bar.style.width = bar.dataset.width; });
  }

  // ===== NEWSLETTER FORM =====
  const nlForm = document.getElementById('newsletter-form');
  if (nlForm) {
    nlForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const inp = nlForm.querySelector('.newsletter-input');
      if (inp && inp.value.includes('@')) {
        nlForm.style.opacity = '0';
        nlForm.style.pointerEvents = 'none';
        const ok = document.getElementById('newsletter-success');
        if (ok) ok.classList.add('show');
      }
    });
  }

  // ===== LIGHTBOX =====
  const lightbox     = document.getElementById('lightbox');
  const lightboxImg  = document.getElementById('lightbox-img');
  const lightboxClose = document.getElementById('lightbox-close');
  if (lightbox && lightboxImg && lightboxClose) {
    const openLightbox = (src, alt) => {
      lightboxImg.src = src;
      lightboxImg.alt = alt;
      lightbox.classList.add('open');
      document.body.style.overflow = 'hidden';
    };
    const closeLightbox = () => {
      lightbox.classList.remove('open');
      document.body.style.overflow = '';
      setTimeout(() => { lightboxImg.src = ''; }, 300);
    };
    document.querySelectorAll('.galerie-img-wrap').forEach(wrap => {
      wrap.style.cursor = 'zoom-in';
      wrap.addEventListener('click', () => {
        const img = wrap.querySelector('img');
        if (img) openLightbox(img.src, img.alt);
      });
    });
    lightboxClose.addEventListener('click', closeLightbox);
    lightbox.addEventListener('click', (e) => { if (e.target === lightbox) closeLightbox(); });
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && lightbox.classList.contains('open')) closeLightbox(); });
  }

  /* Retirés : calendrier d'événements, formulaire de contact, remplacement du
     logo et filtres du blogue. Plus aucune page ne les utilisait depuis la
     simplification du site. Le calendrier fabriquait du HTML à partir d'un
     fichier externe (events.json), ce qui aurait permis d'injecter du code
     dans la page si ce fichier avait un jour été modifié. */

})();
