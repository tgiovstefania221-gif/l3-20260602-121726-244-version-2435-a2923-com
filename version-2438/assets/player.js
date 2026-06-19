import { H as Hls } from "./hls.js";

export function startMoviePlayer(options) {
    var video = document.getElementById(options.videoId);
    var cover = document.getElementById(options.coverId);
    var loaded = false;

    if (!video || !cover || !options.source) {
        return;
    }

    var loadVideo = function () {
        if (!loaded) {
            loaded = true;

            if (video.canPlayType("application/vnd.apple.mpegurl")) {
                video.src = options.source;
            } else if (Hls.isSupported()) {
                var hls = new Hls({
                    lowLatencyMode: true,
                    backBufferLength: 90
                });
                hls.loadSource(options.source);
                hls.attachMedia(video);
            } else {
                video.src = options.source;
            }
        }

        cover.classList.add("is-hidden");
        video.controls = true;

        var playPromise = video.play();
        if (playPromise && typeof playPromise.catch === "function") {
            playPromise.catch(function () {
                video.controls = true;
            });
        }
    };

    cover.addEventListener("click", loadVideo);
    video.addEventListener("click", function () {
        if (!loaded) {
            loadVideo();
        }
    });
}
