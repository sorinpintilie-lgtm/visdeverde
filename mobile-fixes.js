(function () {
  var header = document.querySelector('.site-header');
  if (!header) return;

  var toggle = header.querySelector('.menu-toggle');
  var mobileMenu = header.querySelector('#mobileMenu') || header.querySelector('.mobile-menu');
  var closeButton = header.querySelector('.menu-close');

  if (!toggle || !mobileMenu) return;
  if (toggle.dataset.mobileBound === 'true') return;

  toggle.dataset.mobileBound = 'true';
  toggle.type = 'button';
  toggle.setAttribute('aria-expanded', 'false');

  function closeMenu() {
    header.classList.remove('menu-open');
    toggle.setAttribute('aria-expanded', 'false');
    document.body.classList.remove('menu-lock');
  }

  function toggleMenu(event) {
    event.stopPropagation();
    var isOpen = header.classList.toggle('menu-open');
    toggle.setAttribute('aria-expanded', String(isOpen));
    document.body.classList.toggle('menu-lock', isOpen);
  }

  toggle.addEventListener('click', toggleMenu);

  if (closeButton) {
    closeButton.addEventListener('click', function (event) {
      event.stopPropagation();
      closeMenu();
    });
  }

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

(function () {
  var contactForm = document.getElementById('contactForm');
  var formStatus = document.getElementById('formStatus');

  if (!contactForm || !formStatus) return;

  function setStatus(message, type) {
    formStatus.textContent = message;
    formStatus.classList.remove('success', 'error');

    if (type) {
      formStatus.classList.add(type);
    }
  }

  contactForm.addEventListener('submit', async function (event) {
    event.preventDefault();

    if (!contactForm.checkValidity()) {
      contactForm.reportValidity();
      setStatus('Te rugăm să completezi toate câmpurile obligatorii.', 'error');
      return;
    }

    var submitButton = contactForm.querySelector('button[type="submit"]');
    var originalButtonText = submitButton ? submitButton.textContent : '';

    if (submitButton) {
      submitButton.disabled = true;
      submitButton.textContent = 'Se trimite...';
    }

    setStatus('Se trimite mesajul...', '');

    var formData = new FormData(contactForm);

    var payload = {
      name: String(formData.get('name') || '').trim(),
      email: String(formData.get('email') || '').trim(),
      phone: String(formData.get('phone') || '').trim(),
      message: String(formData.get('message') || '').trim()
    };

    try {
      var response = await fetch('/.netlify/functions/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      });

      var result = await response.json().catch(function () {
        return {};
      });

      if (!response.ok) {
        throw new Error(result.message || 'Mesajul nu a putut fi trimis.');
      }

      contactForm.reset();
      setStatus('Mesajul a fost trimis cu succes. Vă vom contacta în cel mai scurt timp.', 'success');
    } catch (error) {
      setStatus(error.message || 'A apărut o eroare. Te rugăm să încerci din nou.', 'error');
    } finally {
      if (submitButton) {
        submitButton.disabled = false;
        submitButton.textContent = originalButtonText || 'Trimite mesaj';
      }
    }
  });
})();
