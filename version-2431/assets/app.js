(function () {
  function selectAll(selector, root) {
    return Array.prototype.slice.call((root || document).querySelectorAll(selector));
  }

  function escapeHtml(value) {
    return String(value || '').replace(/[&<>"]/g, function (char) {
      return {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;'
      }[char];
    });
  }

  function initMenu() {
    var button = document.querySelector('[data-menu-toggle]');
    var menu = document.querySelector('[data-mobile-menu]');
    if (!button || !menu) {
      return;
    }
    button.addEventListener('click', function () {
      menu.classList.toggle('is-open');
    });
  }

  function initSearch() {
    var index = Array.isArray(window.SITE_SEARCH) ? window.SITE_SEARCH : [];
    selectAll('[data-site-search]').forEach(function (input) {
      var box = input.closest('.search-box');
      var panel = box ? box.querySelector('[data-search-results]') : null;
      if (!panel) {
        return;
      }
      input.addEventListener('input', function () {
        var query = input.value.trim().toLowerCase();
        if (!query) {
          panel.classList.remove('is-open');
          panel.innerHTML = '';
          return;
        }
        var results = index.filter(function (item) {
          var haystack = [item.title, item.year, item.region, item.type, item.genre, item.category, item.summary, (item.tags || []).join(' ')].join(' ').toLowerCase();
          return haystack.indexOf(query) !== -1;
        }).slice(0, 10);
        if (!results.length) {
          panel.innerHTML = '<div class="search-empty">未找到相关影片</div>';
          panel.classList.add('is-open');
          return;
        }
        panel.innerHTML = results.map(function (item) {
          return '<a class="search-item" href="' + escapeHtml(item.url) + '">' +
            '<img src="' + escapeHtml(item.cover) + '" alt="' + escapeHtml(item.title) + '">' +
            '<span><strong>' + escapeHtml(item.title) + '</strong><span>' + escapeHtml(item.year) + ' · ' + escapeHtml(item.region) + ' · ' + escapeHtml(item.category) + '</span></span>' +
            '</a>';
        }).join('');
        panel.classList.add('is-open');
      });
      document.addEventListener('click', function (event) {
        if (box && !box.contains(event.target)) {
          panel.classList.remove('is-open');
        }
      });
    });
  }

  function initSlider() {
    var slider = document.querySelector('[data-slider]');
    if (!slider) {
      return;
    }
    var slides = selectAll('[data-slide]', slider);
    var dots = selectAll('[data-slide-dot]', slider);
    var prev = slider.querySelector('[data-slide-prev]');
    var next = slider.querySelector('[data-slide-next]');
    var current = 0;
    var timer;

    function show(index) {
      if (!slides.length) {
        return;
      }
      current = (index + slides.length) % slides.length;
      slides.forEach(function (slide, slideIndex) {
        slide.classList.toggle('is-active', slideIndex === current);
      });
      dots.forEach(function (dot, dotIndex) {
        dot.classList.toggle('is-active', dotIndex === current);
      });
    }

    function start() {
      stop();
      timer = window.setInterval(function () {
        show(current + 1);
      }, 5200);
    }

    function stop() {
      if (timer) {
        window.clearInterval(timer);
      }
    }

    if (prev) {
      prev.addEventListener('click', function () {
        show(current - 1);
        start();
      });
    }
    if (next) {
      next.addEventListener('click', function () {
        show(current + 1);
        start();
      });
    }
    dots.forEach(function (dot) {
      dot.addEventListener('click', function () {
        show(Number(dot.getAttribute('data-slide-dot')) || 0);
        start();
      });
    });
    slider.addEventListener('mouseenter', stop);
    slider.addEventListener('mouseleave', start);
    show(0);
    start();
  }

  function initFilters() {
    selectAll('[data-filter-form]').forEach(function (form) {
      var target = document.querySelector(form.getAttribute('data-filter-form'));
      if (!target) {
        return;
      }
      var cards = selectAll('.movie-card', target);
      var search = form.querySelector('[data-local-search]');
      var year = form.querySelector('[data-local-year]');

      function apply() {
        var query = search ? search.value.trim().toLowerCase() : '';
        var selectedYear = year ? year.value : '';
        cards.forEach(function (card) {
          var text = (card.getAttribute('data-search') || '').toLowerCase();
          var cardYear = card.getAttribute('data-year') || '';
          var matchQuery = !query || text.indexOf(query) !== -1;
          var matchYear = !selectedYear || cardYear === selectedYear;
          card.hidden = !(matchQuery && matchYear);
        });
      }

      if (search) {
        search.addEventListener('input', apply);
      }
      if (year) {
        year.addEventListener('change', apply);
      }
    });
  }

  function initPlayers() {
    selectAll('.movie-player').forEach(function (player) {
      var video = player.querySelector('video');
      var button = player.querySelector('.play-cover');
      var source = player.getAttribute('data-stream');
      var started = false;
      var hlsInstance = null;

      if (!video || !source) {
        return;
      }

      function reveal() {
        if (button) {
          button.classList.add('is-hidden');
        }
      }

      function attachAndPlay() {
        if (started) {
          video.play();
          return;
        }
        started = true;
        reveal();
        if (video.canPlayType('application/vnd.apple.mpegurl')) {
          video.src = source;
          video.play().catch(function () {
            if (button) {
              button.classList.remove('is-hidden');
            }
          });
          return;
        }
        if (window.Hls && window.Hls.isSupported()) {
          hlsInstance = new window.Hls({
            enableWorker: true,
            lowLatencyMode: true
          });
          hlsInstance.loadSource(source);
          hlsInstance.attachMedia(video);
          hlsInstance.on(window.Hls.Events.MANIFEST_PARSED, function () {
            video.play().catch(function () {
              if (button) {
                button.classList.remove('is-hidden');
              }
            });
          });
          return;
        }
        video.src = source;
        video.play().catch(function () {
          if (button) {
            button.classList.remove('is-hidden');
          }
        });
      }

      if (button) {
        button.addEventListener('click', attachAndPlay);
      }
      video.addEventListener('click', function () {
        if (!started) {
          attachAndPlay();
        }
      });
      window.addEventListener('pagehide', function () {
        if (hlsInstance) {
          hlsInstance.destroy();
        }
      });
    });
  }

  document.addEventListener('DOMContentLoaded', function () {
    initMenu();
    initSearch();
    initSlider();
    initFilters();
    initPlayers();
  });
})();
