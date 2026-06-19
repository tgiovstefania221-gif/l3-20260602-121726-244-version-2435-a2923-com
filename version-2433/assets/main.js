(function () {
  function ready(fn) {
    if (document.readyState !== "loading") {
      fn();
    } else {
      document.addEventListener("DOMContentLoaded", fn);
    }
  }

  function getRoot() {
    return document.body.getAttribute("data-root") || "";
  }

  function setupMenu() {
    var toggle = document.querySelector("[data-menu-toggle]");
    var panel = document.querySelector("[data-mobile-panel]");
    if (!toggle || !panel) {
      return;
    }
    toggle.addEventListener("click", function () {
      panel.classList.toggle("is-open");
    });
  }

  function setupGlobalSearch() {
    var forms = document.querySelectorAll("[data-global-search]");
    forms.forEach(function (form) {
      form.addEventListener("submit", function (event) {
        event.preventDefault();
        var input = form.querySelector("input[name='q']");
        var query = input ? input.value.trim() : "";
        var url = getRoot() + "movies.html";
        if (query) {
          url += "?q=" + encodeURIComponent(query);
        }
        window.location.href = url;
      });
    });
  }

  function setupHero() {
    var slider = document.querySelector("[data-hero-slider]");
    if (!slider) {
      return;
    }
    var slides = Array.prototype.slice.call(slider.querySelectorAll("[data-hero-slide]"));
    var dots = Array.prototype.slice.call(slider.querySelectorAll("[data-hero-dot]"));
    if (slides.length < 2) {
      return;
    }
    var current = 0;
    var timer = null;

    function show(index) {
      current = (index + slides.length) % slides.length;
      slides.forEach(function (slide, slideIndex) {
        slide.classList.toggle("is-active", slideIndex === current);
      });
      dots.forEach(function (dot, dotIndex) {
        dot.classList.toggle("is-active", dotIndex === current);
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
        timer = null;
      }
    }

    dots.forEach(function (dot) {
      dot.addEventListener("click", function () {
        var index = parseInt(dot.getAttribute("data-hero-dot"), 10) || 0;
        show(index);
        start();
      });
    });
    slider.addEventListener("mouseenter", stop);
    slider.addEventListener("mouseleave", start);
    start();
  }

  function setupFilters() {
    var panel = document.querySelector("[data-filter-panel]");
    var cards = Array.prototype.slice.call(document.querySelectorAll("[data-movie-card]"));
    if (!panel || !cards.length) {
      return;
    }
    var search = panel.querySelector("[data-filter-search]");
    var type = panel.querySelector("[data-filter-type]");
    var region = panel.querySelector("[data-filter-region]");
    var year = panel.querySelector("[data-filter-year]");
    var empty = document.querySelector("[data-result-empty]");
    var params = new URLSearchParams(window.location.search);

    if (search && params.get("q")) {
      search.value = params.get("q");
    }
    if (type && params.get("type")) {
      type.value = params.get("type");
    }
    if (region && params.get("region")) {
      region.value = params.get("region");
    }
    if (year && params.get("year")) {
      year.value = params.get("year");
    }

    function filter() {
      var keyword = search ? search.value.trim().toLowerCase() : "";
      var selectedType = type ? type.value : "";
      var selectedRegion = region ? region.value : "";
      var selectedYear = year ? year.value : "";
      var visible = 0;

      cards.forEach(function (card) {
        var matched = true;
        if (keyword && card.getAttribute("data-search").indexOf(keyword) === -1) {
          matched = false;
        }
        if (selectedType && card.getAttribute("data-type") !== selectedType) {
          matched = false;
        }
        if (selectedRegion && card.getAttribute("data-region") !== selectedRegion) {
          matched = false;
        }
        if (selectedYear && card.getAttribute("data-year") !== selectedYear) {
          matched = false;
        }
        card.classList.toggle("is-hidden", !matched);
        if (matched) {
          visible += 1;
        }
      });

      if (empty) {
        empty.classList.toggle("is-visible", visible === 0);
      }
    }

    [search, type, region, year].forEach(function (control) {
      if (control) {
        control.addEventListener("input", filter);
        control.addEventListener("change", filter);
      }
    });
    filter();
  }

  ready(function () {
    setupMenu();
    setupGlobalSearch();
    setupHero();
    setupFilters();
  });
})();
