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
    })
    .catch(err => console.warn('[nav-loader] Failed to load nav.html:', err));
}());
