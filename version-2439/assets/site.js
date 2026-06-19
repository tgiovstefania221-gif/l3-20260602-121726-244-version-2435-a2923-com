(function () {
  function ready(callback) {
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", callback);
    } else {
      callback();
    }
  }

  ready(function () {
    var navToggle = document.querySelector(".nav-toggle");
    var siteNav = document.querySelector(".site-nav");

    if (navToggle && siteNav) {
      navToggle.addEventListener("click", function () {
        var open = siteNav.classList.toggle("open");
        navToggle.setAttribute("aria-expanded", open ? "true" : "false");
      });
    }

    var hero = document.querySelector(".hero-carousel");

    if (hero) {
      var slides = Array.prototype.slice.call(hero.querySelectorAll(".hero-slide"));
      var dots = Array.prototype.slice.call(hero.querySelectorAll(".hero-dot"));
      var index = 0;
      var timer = null;

      function showSlide(nextIndex) {
        index = (nextIndex + slides.length) % slides.length;
        slides.forEach(function (slide, slideIndex) {
          slide.classList.toggle("is-active", slideIndex === index);
        });
        dots.forEach(function (dot, dotIndex) {
          dot.classList.toggle("is-active", dotIndex === index);
        });
      }

      function startTimer() {
        if (slides.length <= 1) {
          return;
        }
        timer = window.setInterval(function () {
          showSlide(index + 1);
        }, 5200);
      }

      dots.forEach(function (dot, dotIndex) {
        dot.addEventListener("click", function () {
          if (timer) {
            window.clearInterval(timer);
          }
          showSlide(dotIndex);
          startTimer();
        });
      });

      showSlide(0);
      startTimer();
    }

    var input = document.querySelector("[data-filter-input]");
    var genreSelect = document.querySelector("[data-filter-genre]");
    var regionSelect = document.querySelector("[data-filter-region]");
    var yearSelect = document.querySelector("[data-filter-year]");
    var cards = Array.prototype.slice.call(document.querySelectorAll("[data-title][data-genre][data-region][data-year]"));
    var empty = document.querySelector("[data-filter-empty]");

    if (input && cards.length) {
      var params = new URLSearchParams(window.location.search);
      var query = params.get("q");

      if (query && !input.value) {
        input.value = query;
      }

      function applyFilters() {
        var text = input.value.trim().toLowerCase();
        var genre = genreSelect ? genreSelect.value : "";
        var region = regionSelect ? regionSelect.value : "";
        var year = yearSelect ? yearSelect.value : "";
        var visible = 0;

        cards.forEach(function (card) {
          var haystack = [
            card.getAttribute("data-title"),
            card.getAttribute("data-genre"),
            card.getAttribute("data-region"),
            card.getAttribute("data-year")
          ].join(" ").toLowerCase();
          var matchText = !text || haystack.indexOf(text) !== -1;
          var matchGenre = !genre || card.getAttribute("data-genre").indexOf(genre) !== -1;
          var matchRegion = !region || card.getAttribute("data-region").indexOf(region) !== -1;
          var matchYear = !year || card.getAttribute("data-year") === year;
          var show = matchText && matchGenre && matchRegion && matchYear;
          card.hidden = !show;
          if (show) {
            visible += 1;
          }
        });

        if (empty) {
          empty.classList.toggle("show", visible === 0);
        }
      }

      [input, genreSelect, regionSelect, yearSelect].forEach(function (control) {
        if (control) {
          control.addEventListener("input", applyFilters);
          control.addEventListener("change", applyFilters);
        }
      });

      applyFilters();
    }
  });
})();
