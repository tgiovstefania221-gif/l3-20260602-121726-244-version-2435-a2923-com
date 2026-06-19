(function () {
  function ready(callback) {
    if (document.readyState !== "loading") {
      callback();
    } else {
      document.addEventListener("DOMContentLoaded", callback);
    }
  }

  function normalize(value) {
    return String(value || "").trim().toLowerCase();
  }

  function initMobileNav() {
    var toggle = document.querySelector("[data-mobile-toggle]");
    var nav = document.querySelector("[data-mobile-nav]");
    if (!toggle || !nav) {
      return;
    }
    toggle.addEventListener("click", function () {
      nav.classList.toggle("open");
    });
  }

  function initHero() {
    var root = document.querySelector("[data-hero]");
    if (!root) {
      return;
    }
    var slides = Array.prototype.slice.call(root.querySelectorAll("[data-hero-slide]"));
    var dots = Array.prototype.slice.call(root.querySelectorAll("[data-hero-dot]"));
    var prev = root.querySelector("[data-hero-prev]");
    var next = root.querySelector("[data-hero-next]");
    var index = 0;
    var timer = null;

    function show(nextIndex) {
      index = (nextIndex + slides.length) % slides.length;
      slides.forEach(function (slide, i) {
        slide.classList.toggle("active", i === index);
      });
      dots.forEach(function (dot, i) {
        dot.classList.toggle("active", i === index);
      });
    }

    function start() {
      stop();
      timer = window.setInterval(function () {
        show(index + 1);
      }, 5000);
    }

    function stop() {
      if (timer) {
        window.clearInterval(timer);
        timer = null;
      }
    }

    if (prev) {
      prev.addEventListener("click", function () {
        show(index - 1);
        start();
      });
    }
    if (next) {
      next.addEventListener("click", function () {
        show(index + 1);
        start();
      });
    }
    dots.forEach(function (dot, i) {
      dot.addEventListener("click", function () {
        show(i);
        start();
      });
    });
    root.addEventListener("mouseenter", stop);
    root.addEventListener("mouseleave", start);
    show(0);
    start();
  }

  function initFilters() {
    var panels = Array.prototype.slice.call(document.querySelectorAll("[data-filter-panel]"));
    panels.forEach(function (panel) {
      var input = panel.querySelector("[data-filter-input]");
      var scope = panel.closest("main") || document;
      var cards = Array.prototype.slice.call(scope.querySelectorAll("[data-movie-card]"));
      var emptyState = scope.querySelector("[data-empty-state]");
      var chips = Array.prototype.slice.call(panel.querySelectorAll(".filter-chip"));
      var state = {
        type: "",
        year: ""
      };

      function apply() {
        var keyword = normalize(input ? input.value : "");
        var visible = 0;
        cards.forEach(function (card) {
          var text = normalize([
            card.getAttribute("data-title"),
            card.getAttribute("data-keywords"),
            card.getAttribute("data-type"),
            card.getAttribute("data-year"),
            card.getAttribute("data-region")
          ].join(" "));
          var type = card.getAttribute("data-type") || "";
          var year = card.getAttribute("data-year") || "";
          var matchKeyword = !keyword || text.indexOf(keyword) !== -1;
          var matchType = !state.type || type.indexOf(state.type) !== -1;
          var matchYear = !state.year || year === state.year;
          var show = matchKeyword && matchType && matchYear;
          card.classList.toggle("is-hidden-by-filter", !show);
          if (show) {
            visible += 1;
          }
        });
        if (emptyState) {
          emptyState.classList.toggle("show", visible === 0);
        }
      }

      if (input) {
        input.addEventListener("input", apply);
      }
      chips.forEach(function (chip) {
        chip.addEventListener("click", function () {
          if (chip.hasAttribute("data-filter-all")) {
            state.type = "";
            state.year = "";
            if (input) {
              input.value = "";
            }
          }
          if (chip.hasAttribute("data-filter-type")) {
            state.type = chip.getAttribute("data-filter-type") || "";
            state.year = "";
          }
          if (chip.hasAttribute("data-filter-year")) {
            state.year = chip.getAttribute("data-filter-year") || "";
            state.type = "";
          }
          chips.forEach(function (item) {
            item.classList.remove("active");
          });
          chip.classList.add("active");
          apply();
        });
      });
      apply();
    });
  }

  ready(function () {
    initMobileNav();
    initHero();
    initFilters();
  });
}());
