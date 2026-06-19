(function () {
  function setupPlayer(card) {
    var video = card.querySelector("[data-video]");
    var button = card.querySelector("[data-play-button]");
    if (!video || !button) {
      return;
    }
    var source = video.getAttribute("data-source");
    var hls = null;
    var initialized = false;

    function showError() {
      card.classList.add("has-error");
      button.innerHTML = "<span>视频暂时无法播放，请稍后再试</span>";
      button.style.opacity = "1";
      button.style.visibility = "visible";
      button.style.pointerEvents = "auto";
    }

    function initialize() {
      if (initialized) {
        return Promise.resolve();
      }
      initialized = true;
      if (window.Hls && window.Hls.isSupported()) {
        hls = new window.Hls({
          enableWorker: true,
          lowLatencyMode: false,
          xhrSetup: function (xhr) {
            xhr.withCredentials = false;
          }
        });
        hls.loadSource(source);
        hls.attachMedia(video);
        hls.on(window.Hls.Events.ERROR, function (event, data) {
          if (!data || !data.fatal) {
            return;
          }
          if (data.type === window.Hls.ErrorTypes.NETWORK_ERROR) {
            hls.startLoad();
          } else if (data.type === window.Hls.ErrorTypes.MEDIA_ERROR) {
            hls.recoverMediaError();
          } else {
            showError();
          }
        });
        return Promise.resolve();
      }
      if (video.canPlayType("application/vnd.apple.mpegurl")) {
        video.src = source;
        return Promise.resolve();
      }
      showError();
      return Promise.reject(new Error("unsupported"));
    }

    function play() {
      initialize().then(function () {
        var result = video.play();
        if (result && typeof result.catch === "function") {
          result.catch(showError);
        }
      }).catch(showError);
    }

    button.addEventListener("click", function () {
      play();
    });
    video.addEventListener("click", function () {
      if (video.paused) {
        play();
      } else {
        video.pause();
      }
    });
    video.addEventListener("play", function () {
      card.classList.add("is-playing");
    });
    video.addEventListener("pause", function () {
      card.classList.remove("is-playing");
    });
    video.addEventListener("ended", function () {
      card.classList.remove("is-playing");
    });
    video.addEventListener("error", function () {
      showError();
    });
    window.addEventListener("beforeunload", function () {
      if (hls) {
        hls.destroy();
      }
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll("[data-player]").forEach(setupPlayer);
  });
})();
