(function () {
  function ready(callback) {
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", callback);
    } else {
      callback();
    }
  }

  function loadScript(src, marker, callback, fallback) {
    var current = marker ? document.querySelector("script[" + marker + "]") : null;

    if (current) {
      current.addEventListener("load", callback, { once: true });
      current.addEventListener("error", fallback, { once: true });
      return;
    }

    var script = document.createElement("script");
    script.src = src;
    script.async = true;

    if (marker) {
      script.setAttribute(marker, "1");
    }

    script.addEventListener("load", callback, { once: true });
    script.addEventListener("error", fallback, { once: true });
    document.head.appendChild(script);
  }

  ready(function () {
    var players = Array.prototype.slice.call(document.querySelectorAll("[data-player]"));

    players.forEach(function (box) {
      var video = box.querySelector("video");
      var button = box.querySelector(".play-layer");

      if (!video) {
        return;
      }

      var src = video.getAttribute("data-src");
      var started = false;

      function directPlay() {
        if (!video.src) {
          video.src = src;
        }
        video.play().catch(function () {});
      }

      function playWithHls() {
        if (window.Hls && window.Hls.isSupported()) {
          if (!video.hlsInstance) {
            var hls = new window.Hls();
            video.hlsInstance = hls;
            hls.loadSource(src);
            hls.attachMedia(video);
            hls.on(window.Hls.Events.MANIFEST_PARSED, function () {
              video.play().catch(function () {});
            });
          } else {
            video.play().catch(function () {});
          }
        } else {
          directPlay();
        }
      }

      function start() {
        if (!src) {
          return;
        }

        if (!started) {
          started = true;
          box.classList.add("is-playing");
        }

        if (video.canPlayType("application/vnd.apple.mpegurl")) {
          directPlay();
          return;
        }

        if (window.Hls) {
          playWithHls();
          return;
        }

        loadScript(
          "assets/hls.js",
          "data-hls-local",
          playWithHls,
          function () {
            loadScript(
              "https://cdn.jsdelivr.net/npm/hls.js@1",
              "data-hls-cdn",
              playWithHls,
              directPlay
            );
          }
        );
      }

      if (button) {
        button.addEventListener("click", start);
      }

      video.addEventListener("click", function () {
        if (!started) {
          start();
        }
      });
    });
  });
})();
