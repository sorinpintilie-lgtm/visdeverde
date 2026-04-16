(function () {
  var header = document.querySelector('.site-header');
  if (!header) return;

  var nav = header.querySelector('.main-nav');
  var toggle = header.querySelector('.menu-toggle');
  if (!nav || !toggle) return;

  if (!toggle.hasAttribute('aria-controls')) {
    var menu = header.querySelector('.mobile-menu');
    if (!menu) {
      menu = document.createElement('div');
      menu.className = 'mobile-menu';
      menu.id = 'mobileMenu';

      var current = (window.location.pathname.split('/').pop() || 'index.html').toLowerCase();
      Array.prototype.forEach.call(nav.querySelectorAll('a'), function (link) {
        var clone = link.cloneNode(true);
        var href = (clone.getAttribute('href') || '').toLowerCase();
        if (href === current) {
          clone.classList.add('active');
        }
        menu.appendChild(clone);
      });

      header.querySelector('.header-inner').appendChild(menu);
    }

    toggle.type = 'button';
    toggle.setAttribute('aria-label', 'Deschide meniul');
    toggle.setAttribute('aria-controls', 'mobileMenu');
    toggle.setAttribute('aria-expanded', 'false');
  }

  if (toggle.dataset.mobileBound === 'true') return;
  toggle.dataset.mobileBound = 'true';

  var mobileMenu = header.querySelector('#mobileMenu') || header.querySelector('.mobile-menu');
  if (!mobileMenu) return;

  function closeMenu() {
    header.classList.remove('menu-open');
    toggle.setAttribute('aria-expanded', 'false');
  }

  toggle.addEventListener('click', function () {
    var isOpen = header.classList.toggle('menu-open');
    toggle.setAttribute('aria-expanded', String(isOpen));
  });

  Array.prototype.forEach.call(mobileMenu.querySelectorAll('a'), function (link) {
    link.addEventListener('click', closeMenu);
  });

  document.addEventListener('click', function (event) {
    if (!header.contains(event.target)) {
      closeMenu();
    }
  });

  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
      closeMenu();
    }
  });
})();
