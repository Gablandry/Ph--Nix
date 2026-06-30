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

  // ===== COUNTER ANIMATION =====
  const counters = document.querySelectorAll('[data-counter]');
  if (counters.length && 'IntersectionObserver' in window) {
    const co = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (!e.isIntersecting) return;
        co.unobserve(e.target);
        const el     = e.target;
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
  const usageBars = document.querySelectorAll('.usage-fill[data-width], .don-usage-fill[data-width], .don-progress-bar-fill[data-width]');
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

  // ===== ÉVÉNEMENTS DYNAMIQUES (modifiez events.json pour mettre à jour) =====
  const eventsContainer = document.getElementById('events-container');
  if (eventsContainer) {
    const pinSvg = `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>`;
    const clockSvg = `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>`;
    fetch('events.json')
      .then(r => r.json())
      .then(events => {
        if (!events.length) {
          eventsContainer.innerHTML = '<p style="color:rgba(0,0,0,0.4);text-align:center;font-family:Inter,sans-serif;padding:40px;grid-column:1/-1;">Aucun événement à venir pour le moment. Revenez bientôt !</p>';
          return;
        }
        eventsContainer.innerHTML = events.map((e, i) => {
          const spots = e.complet
            ? '<span class="spots-badge spots-low">Complet</span>'
            : e.placesRestantes <= 5
              ? `<span class="spots-badge spots-low">${e.placesRestantes} places restantes</span>`
              : `<span class="spots-badge">${e.placesRestantes} places disponibles</span>`;
          const titre = `Distribution ${e.ville}`;
          const titreComplet = `${titre} — ${e.jour} ${e.mois}`;
          return `<div class="event-card reveal reveal-d${(i % 4) + 1}">
            <div class="event-date-badge">
              <div class="event-month">${e.mois}</div>
              <div class="event-day">${e.jour}</div>
            </div>
            <div class="event-body">
              <div class="event-region-tag">${e.ville}</div>
              <h3>${titre} — ${e.quartier.split(',')[0]}</h3>
              <div class="event-meta">
                <span>${pinSvg}${e.quartier}</span>
                <span>${clockSvg}${e.heureDebut} – ${e.heureFin}</span>
              </div>
              ${spots}
            </div>
            <button class="btn btn-primary event-participe-btn"
              ${e.complet ? 'disabled style="opacity:0.4;cursor:not-allowed;"' : `onclick="selectEvent('${titreComplet}')"`}>
              ${e.complet ? 'Complet' : 'Je participe →'}
            </button>
          </div>`;
        }).join('');
        eventsContainer.querySelectorAll('.reveal').forEach(el => {
          setTimeout(() => el.classList.add('visible'), 80);
        });
      })
      .catch(() => {
        eventsContainer.innerHTML = '<p style="color:rgba(0,0,0,0.35);text-align:center;font-family:Inter,sans-serif;padding:40px;grid-column:1/-1;">Chargement des événements...</p>';
      });
  }

  // ===== CONTACT FORM =====
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const card = contactForm.closest('.form-card, [class*="form"]');
      const successEl = document.getElementById('contact-success');
      if (successEl) {
        contactForm.style.display = 'none';
        successEl.classList.add('show');
      }
    });
  }

  // ===== LOGO RÉEL PHÉ-NIX =====
  // Remplace le SVG placeholder par la vraie image logo si elle est disponible
  document.querySelectorAll('.nav-logo').forEach(function(navLogo) {
    var svg = navLogo.querySelector('svg');
    if (!svg) return;
    var img = document.createElement('img');
    img.src = 'logo-phenix.png';
    img.alt = 'Phé-Nix';
    img.width = 40;
    img.height = 40;
    img.style.cssText = 'border-radius:6px;object-fit:cover;flex-shrink:0;';
    img.onerror = function() { this.remove(); navLogo.insertBefore(svg, navLogo.firstChild); };
    navLogo.replaceChild(img, svg);
  });

  // ===== BLOG FILTERS =====
  const filterBtns = document.querySelectorAll('.filter-btn[data-cat]');
  if (filterBtns.length) {
    const blogCards = document.querySelectorAll('.blog-card[data-cat], .blog-featured[data-cat]');
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const cat = btn.dataset.cat;
        blogCards.forEach(card => {
          const match = cat === 'tous' || card.dataset.cat === cat;
          card.style.display = match ? '' : 'none';
          card.style.opacity = match ? '1' : '0';
        });
      });
    });
  }

})();
