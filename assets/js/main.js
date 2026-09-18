// Mobile navigation toggle.
(function () {
  var btn = document.querySelector('.nav-toggle');
  var nav = document.getElementById('site-nav');
  if (!btn || !nav) return;

  var mq = window.matchMedia('(max-width: 860px)');

  function sync() {
    if (mq.matches) {
      nav.hidden = true;
      btn.setAttribute('aria-expanded', 'false');
    } else {
      nav.hidden = false;
    }
  }

  btn.addEventListener('click', function () {
    var open = nav.hidden;
    nav.hidden = !open;
    btn.setAttribute('aria-expanded', String(open));
  });

  nav.addEventListener('click', function (e) {
    if (mq.matches && e.target.tagName === 'A') sync();
  });

  mq.addEventListener('change', sync);
  sync();
})();
