(function () {
  function ready(fn) {
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", fn);
    } else {
      fn();
    }
  }

  ready(function () {
    var toggle = document.querySelector(".nav-toggle");
    var mobileNav = document.querySelector(".mobile-nav");

    if (toggle && mobileNav) {
      toggle.addEventListener("click", function () {
        var open = mobileNav.classList.toggle("open");
        toggle.setAttribute("aria-expanded", String(open));
      });
    }

    var carousels = document.querySelectorAll(".hero-carousel");

    carousels.forEach(function (carousel) {
      var slides = Array.prototype.slice.call(carousel.querySelectorAll(".hero-slide"));
      var dots = Array.prototype.slice.call(carousel.querySelectorAll(".hero-dot"));
      var prev = carousel.querySelector(".hero-prev");
      var next = carousel.querySelector(".hero-next");
      var index = 0;
      var timer = null;

      function showSlide(nextIndex) {
        if (!slides.length) {
          return;
        }

        index = (nextIndex + slides.length) % slides.length;

        slides.forEach(function (slide, slideIndex) {
          slide.classList.toggle("active", slideIndex === index);
        });

        dots.forEach(function (dot, dotIndex) {
          dot.classList.toggle("active", dotIndex === index);
        });
      }

      function startTimer() {
        if (timer) {
          window.clearInterval(timer);
        }

        timer = window.setInterval(function () {
          showSlide(index + 1);
        }, 5200);
      }

      if (prev) {
        prev.addEventListener("click", function () {
          showSlide(index - 1);
          startTimer();
        });
      }

      if (next) {
        next.addEventListener("click", function () {
          showSlide(index + 1);
          startTimer();
        });
      }

      dots.forEach(function (dot, dotIndex) {
        dot.addEventListener("click", function () {
          showSlide(dotIndex);
          startTimer();
        });
      });

      showSlide(0);
      startTimer();
    });

    var searchInputs = Array.prototype.slice.call(document.querySelectorAll(".site-search"));

    searchInputs.forEach(function (input) {
      input.addEventListener("input", function () {
        var keyword = input.value.trim().toLowerCase();
        var scopes = Array.prototype.slice.call(document.querySelectorAll(".search-scope"));
        var targets = [];

        if (scopes.length) {
          scopes.forEach(function (scope) {
            targets = targets.concat(Array.prototype.slice.call(scope.querySelectorAll("[data-search]")));
          });
        } else {
          targets = Array.prototype.slice.call(document.querySelectorAll("[data-search]"));
        }

        targets.forEach(function (item) {
          var text = (item.getAttribute("data-search") || item.textContent || "").toLowerCase();
          item.classList.toggle("is-hidden", keyword.length > 0 && text.indexOf(keyword) === -1);
        });
      });
    });

    var video = document.getElementById("moviePlayer");
    var button = document.querySelector(".player-play");
    var hlsInstance = null;

    function playStream(src) {
      if (!video || !src) {
        return;
      }

      if (hlsInstance && typeof hlsInstance.destroy === "function") {
        hlsInstance.destroy();
        hlsInstance = null;
      }

      if (window.Hls && window.Hls.isSupported()) {
        hlsInstance = new window.Hls({
          enableWorker: true,
          lowLatencyMode: true,
          backBufferLength: 90
        });
        hlsInstance.loadSource(src);
        hlsInstance.attachMedia(video);
        hlsInstance.on(window.Hls.Events.MANIFEST_PARSED, function () {
          video.play().catch(function () {});
        });
      } else if (video.canPlayType("application/vnd.apple.mpegurl")) {
        video.src = src;
        video.addEventListener("loadedmetadata", function () {
          video.play().catch(function () {});
        }, { once: true });
      } else {
        video.src = src;
        video.play().catch(function () {});
      }

      if (button) {
        button.classList.add("playing");
      }
    }

    if (button && video) {
      button.addEventListener("click", function () {
        playStream(button.getAttribute("data-video"));
      });

      video.addEventListener("click", function () {
        if (!video.getAttribute("src") && button) {
          playStream(button.getAttribute("data-video"));
        }
      });
    }
  });
})();
