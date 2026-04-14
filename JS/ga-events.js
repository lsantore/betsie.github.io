/**
 * GA4 delegated link tracking (gtag). Expects the global gtag snippet in <head>.
 */
(function () {
  'use strict';

  function linkLabel(anchor) {
    var t = (anchor.textContent || '').replace(/\s+/g, ' ').trim();
    if (t) return t.slice(0, 120);
    var img = anchor.querySelector && anchor.querySelector('img[alt]');
    if (img) {
      var alt = img.getAttribute('alt');
      if (alt) return String(alt).slice(0, 120);
    }
    return '';
  }

  function resolveHref(href) {
    try {
      return new URL(href, window.location.href).href;
    } catch (e) {
      return href;
    }
  }

  function classifyLink(resolved, raw) {
    var r = raw.trim();
    if (r.indexOf('mailto:') === 0) return 'mailto';
    if (r.indexOf('tel:') === 0) return 'tel';
    if (!/^https?:\/\//i.test(r)) return 'internal';
    try {
      return new URL(resolved).origin === window.location.origin ? 'internal' : 'external';
    } catch (e2) {
      return 'external';
    }
  }

  function clickSection(anchor) {
    if (anchor.closest('header')) {
      if (anchor.classList.contains('header-logo-link')) return 'logo';
      if (anchor.closest('nav[aria-label="Primary"]')) return 'primary_nav';
      return 'header';
    }
    if (anchor.closest('footer')) return 'footer';
    if (anchor.closest('main')) {
      if (anchor.matches('.btn-primary, .nav-cta, .app-store-wrap, #app-store-button')) {
        return 'cta_primary';
      }
      if (anchor.matches('.btn-ghost')) return 'cta_secondary';
      return 'main_content';
    }
    return 'unknown';
  }

  document.addEventListener(
    'click',
    function (e) {
      var anchor = e.target && e.target.closest && e.target.closest('a[href]');
      if (!anchor || anchor.hasAttribute('data-ga-skip')) return;

      var hrefAttr = anchor.getAttribute('href');
      if (!hrefAttr) return;
      var trimmed = hrefAttr.trim();
      if (trimmed.charAt(0) === '#' || trimmed.indexOf('javascript:') === 0) return;

      if (typeof window.gtag !== 'function') return;

      var resolved = resolveHref(hrefAttr);
      window.gtag('event', 'betsie_link_click', {
        link_url: resolved.slice(0, 500),
        link_text: linkLabel(anchor),
        click_section: clickSection(anchor),
        link_type: classifyLink(resolved, trimmed),
        page_path: window.location.pathname || '/',
        engagement_time_msec: 1
      });
    },
    true
  );
})();
