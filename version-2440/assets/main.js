(function() {
  var nav = document.querySelector('.main-nav');
  var toggle = document.querySelector('.menu-toggle');
  if (toggle && nav) {
    toggle.addEventListener('click', function() {
      nav.classList.toggle('is-open');
    });
  }

  var slides = Array.prototype.slice.call(document.querySelectorAll('.hero-slide'));
  var dots = Array.prototype.slice.call(document.querySelectorAll('.hero-controls button'));
  var active = 0;

  function setSlide(index) {
    if (!slides.length) {
      return;
    }
    active = (index + slides.length) % slides.length;
    slides.forEach(function(slide, pos) {
      slide.classList.toggle('is-active', pos === active);
    });
    dots.forEach(function(dot, pos) {
      dot.classList.toggle('is-active', pos === active);
    });
  }

  dots.forEach(function(dot, pos) {
    dot.addEventListener('click', function() {
      setSlide(pos);
    });
  });

  if (slides.length > 1) {
    setInterval(function() {
      setSlide(active + 1);
    }, 5200);
  }

  var searchInputs = Array.prototype.slice.call(document.querySelectorAll('.site-search'));
  searchInputs.forEach(function(input) {
    input.addEventListener('input', function() {
      var value = input.value.trim().toLowerCase();
      var cards = Array.prototype.slice.call(document.querySelectorAll('.movie-card, .ranking-item'));
      cards.forEach(function(card) {
        var text = (card.getAttribute('data-search') || card.textContent || '').toLowerCase();
        card.classList.toggle('is-filtered-out', value && text.indexOf(value) === -1);
      });
    });
  });
})();
