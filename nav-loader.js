(function () {
  const mount = document.getElementById('nav-mount');
  if (!mount) return;

  const root    = mount.dataset.navRoot    ?? '';
  const pages   = mount.dataset.navPages   ?? '';
  const current = mount.dataset.navCurrent ?? '';
  const isHome  = root === '';

  fetch(root + 'nav.html')
    .then(r => { if (!r.ok) throw new Error('HTTP ' + r.status); return r.text(); })
    .then(html => {
      html = html.replaceAll('{{ROOT}}',  root)
                 .replaceAll('{{PAGES}}', pages);

      if (isHome) {
        html = html
          .replace('href="index.html"', 'href="#"')
          .replace('aria-label="Back to home"', 'aria-label="Garv Aggarwal — home"');
      }

      mount.insertAdjacentHTML('afterend', html);
      mount.remove();

      const nav = document.getElementById('nav');

      if (isHome) {
        nav.querySelector('.back-arrow')?.remove();
      }

      if (current) {
        nav.querySelector('[data-nav-key="' + current + '"]')?.classList.add('current');
      }

      const onNavScroll = () => nav.classList.toggle('is-scrolled', window.scrollY > 8);
      window.addEventListener('scroll', onNavScroll, { passive: true });
      onNavScroll();

      // close delay: keep dropdown open for 180ms after cursor leaves
      nav.querySelectorAll('.nav-dropdown-wrap').forEach(function(wrap) {
        var timer;
        wrap.addEventListener('mouseenter', function() {
          clearTimeout(timer);
          wrap.classList.add('dd-open');
        });
        wrap.addEventListener('mouseleave', function() {
          timer = setTimeout(function() { wrap.classList.remove('dd-open'); }, 180);
        });
      });

      // Mobile hamburger
      const burger    = document.getElementById('nav-burger');
      const mobileNav = document.getElementById('mobile-nav');
      const mobileClose = document.getElementById('mobile-nav-close');

      function openMobileNav() {
        burger.classList.add('is-open');
        burger.setAttribute('aria-expanded', 'true');
        mobileNav.classList.add('is-open');
        mobileNav.setAttribute('aria-hidden', 'false');
        document.body.classList.add('nav-open');
      }

      function closeMobileNav() {
        burger.classList.remove('is-open');
        burger.setAttribute('aria-expanded', 'false');
        mobileNav.classList.remove('is-open');
        mobileNav.setAttribute('aria-hidden', 'true');
        document.body.classList.remove('nav-open');
      }

      if (burger && mobileNav) {
        burger.addEventListener('click', function() {
          burger.classList.contains('is-open') ? closeMobileNav() : openMobileNav();
        });
        mobileClose && mobileClose.addEventListener('click', closeMobileNav);
        mobileNav.querySelectorAll('a').forEach(function(link) {
          link.addEventListener('click', closeMobileNav);
        });
      }
    })
    .catch(err => console.warn('[nav-loader] Failed to load nav.html:', err));
}());
