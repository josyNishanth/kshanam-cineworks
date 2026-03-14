/* =========================================================
   SCROLL REVEAL
   ========================================================= */
(function () {
  'use strict';

  // Elements to animate on scroll
  const revealTargets = [
    '.feature-item',
    '.bento-card',
    '.result-card',
    '.bento-header',
    '.results-header',
    '.cta-banner',
  ];

  function addRevealClasses() {
    revealTargets.forEach(function (selector) {
      document.querySelectorAll(selector).forEach(function (el, i) {
        el.classList.add('reveal');
        const delay = Math.min(i, 3);
        if (delay > 0) el.classList.add('reveal-delay-' + delay);
      });
    });
  }

  function checkReveal() {
    document.querySelectorAll('.reveal').forEach(function (el) {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight - 60) {
        el.classList.add('visible');
      }
    });
  }

  /* NAV: add glass effect on scroll */
  const nav = document.querySelector('.nav');

  function handleNavScroll() {
    if (window.scrollY > 40) {
      nav.style.background = 'rgba(245,240,232,0.88)';
      nav.style.backdropFilter = 'blur(12px)';
      nav.style.webkitBackdropFilter = 'blur(12px)';
      nav.style.boxShadow = '0 1px 0 rgba(0,0,0,0.06)';
    } else {
      nav.style.background = 'transparent';
      nav.style.backdropFilter = 'none';
      nav.style.webkitBackdropFilter = 'none';
      nav.style.boxShadow = 'none';
    }
  }

  /* Marquee: pause on hover is handled via CSS, nothing extra needed */
  function handleMouseMove() {}


  /* -------------------------------------------------------
     Generate subtle animated word in hero subtitle area
     ------------------------------------------------------- */
  const heroSub = document.querySelector('.hero-sub');
  let tickerEl = null;

  if (heroSub) {
    tickerEl = document.createElement('span');
    tickerEl.className = 'ticker-word';
    tickerEl.textContent = 'faster';
    tickerEl.style.cssText = [
      'display:inline-block',
      'font-weight:600',
      'color:var(--text-dark)',
      'min-width:70px',
      'transition:opacity 0.3s ease',
    ].join(';');

    // Wrap the "faster" in the subtitle with the ticker
    heroSub.innerHTML = heroSub.innerHTML.replace(
      'faster and smarter',
      '<span id="hero-ticker">faster</span> and smarter'
    );

    const tickWords = ['faster', 'smarter', 'together', 'better', 'simpler'];
    let tickIdx = 0;
    const tickerNode = document.getElementById('hero-ticker');

    if (tickerNode) {
      tickerNode.style.cssText = 'font-weight:600; color:var(--text-dark); transition:opacity 0.3s ease;';

      setInterval(function () {
        tickerNode.style.opacity = '0';
        setTimeout(function () {
          tickIdx = (tickIdx + 1) % tickWords.length;
          tickerNode.textContent = tickWords[tickIdx];
          tickerNode.style.opacity = '1';
        }, 320);
      }, 2400);
    }
  }

  /* INIT */
  window.addEventListener('DOMContentLoaded', function () {
    addRevealClasses();
    checkReveal();
    handleNavScroll();
  });

  window.addEventListener('scroll', function () {
    checkReveal();
    handleNavScroll();
  }, { passive: true });

  window.addEventListener('mousemove', handleMouseMove, { passive: true });

})();
