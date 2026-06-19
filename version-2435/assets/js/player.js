(function () {
  window.setupMoviePlayer = function (options) {
    var video = document.getElementById(options.videoId);
    var cover = document.getElementById(options.coverId);
    var trigger = document.getElementById(options.triggerId);
    var src = options.src;
    var hls = null;
    var loaded = false;

    if (!video || !src) {
      return;
    }

    function loadStream() {
      if (loaded) {
        return;
      }
      if (video.canPlayType("application/vnd.apple.mpegurl")) {
        video.src = src;
      } else if (window.Hls && window.Hls.isSupported()) {
        hls = new window.Hls({
          enableWorker: true,
          lowLatencyMode: true
        });
        hls.loadSource(src);
        hls.attachMedia(video);
      } else {
        video.src = src;
      }
      loaded = true;
    }

    function hideCover() {
      if (cover) {
        cover.classList.add("is-hidden");
      }
    }

    function playVideo() {
      loadStream();
      hideCover();
      video.controls = true;
      var result = video.play();
      if (result && typeof result.catch === "function") {
        result.catch(function () {});
      }
    }

    if (cover) {
      cover.addEventListener("click", playVideo);
    }
    if (trigger) {
      trigger.addEventListener("click", playVideo);
    }
    video.addEventListener("click", function () {
      if (video.paused) {
        playVideo();
      }
    });
    video.addEventListener("play", hideCover);
    window.addEventListener("beforeunload", function () {
      if (hls) {
        hls.destroy();
      }
    });
  };
}());
