import { H as Hls } from "./hls-vendor-dru42stk.js";

const M3U8_SOURCES = [
    "https://customer-7t103rn8rocxo5v6.cloudflarestream.com/e398cb38b257828eeedbcaa0ae2856da/manifest/video.m3u8",
    "https://customer-7t103rn8rocxo5v6.cloudflarestream.com/77ae15566dde5cfb920bae4712a38399/manifest/video.m3u8",
    "https://customer-7t103rn8rocxo5v6.cloudflarestream.com/41cb67b47a3668efaea014219666e659/manifest/video.m3u8",
    "https://customer-7t103rn8rocxo5v6.cloudflarestream.com/31227358d3c181b7168e28ad248cfb4e/manifest/video.m3u8",
    "https://customer-7t103rn8rocxo5v6.cloudflarestream.com/d0af4221b8947fda8c23f4955947cb58/manifest/video.m3u8",
    "https://customer-7t103rn8rocxo5v6.cloudflarestream.com/e70b98acb53eb889d108057988609efb/manifest/video.m3u8",
    "https://customer-7t103rn8rocxo5v6.cloudflarestream.com/86ea18f9954dbaf22eff5e16c41b4a25/manifest/video.m3u8",
    "https://customer-7t103rn8rocxo5v6.cloudflarestream.com/2df81e778442675885257ce3e84c7173/manifest/video.m3u8",
    "https://customer-7t103rn8rocxo5v6.cloudflarestream.com/af3d3f3b4940cee04efcd8ff2c9eef0a/manifest/video.m3u8",
    "https://customer-7t103rn8rocxo5v6.cloudflarestream.com/60b4ddb3d166e1239abfc7adf611a6a3/manifest/video.m3u8",
    "https://customer-7t103rn8rocxo5v6.cloudflarestream.com/a27121d514ff0079e1e81a6678f14e0c/manifest/video.m3u8",
    "https://customer-7t103rn8rocxo5v6.cloudflarestream.com/f0d38b8679a1231eff816a8e04cc1a0c/manifest/video.m3u8",
    "https://customer-7t103rn8rocxo5v6.cloudflarestream.com/c66b5309b3b64d15ed856810d6cc0b72/manifest/video.m3u8",
    "https://customer-7t103rn8rocxo5v6.cloudflarestream.com/c99d86ece73a935b77e57d322461ddb5/manifest/video.m3u8",
    "https://customer-7t103rn8rocxo5v6.cloudflarestream.com/fe0c41d994d01211debb24e84e3384a9/manifest/video.m3u8",
    "https://customer-7t103rn8rocxo5v6.cloudflarestream.com/929fdb8e536c1fc43a83b32d1a838547/manifest/video.m3u8",
    "https://customer-7t103rn8rocxo5v6.cloudflarestream.com/fbc04ae173a0e633458658e80ee78c2a/manifest/video.m3u8",
    "https://customer-7t103rn8rocxo5v6.cloudflarestream.com/0ba4f146b0e6ea192526706f495d460f/manifest/video.m3u8",
    "https://customer-7t103rn8rocxo5v6.cloudflarestream.com/1e53f0e1aef7ec2fb5f30ef5d309d69c/manifest/video.m3u8",
    "https://customer-7t103rn8rocxo5v6.cloudflarestream.com/1116997bf50b78f22bbfaced8975a021/manifest/video.m3u8"
];

function getSource(index) {
    const numericIndex = Number.parseInt(index || "0", 10);
    const safeIndex = Number.isFinite(numericIndex) ? numericIndex : 0;
    return M3U8_SOURCES[safeIndex % M3U8_SOURCES.length];
}

function setMessage(shell, message) {
    const output = shell.querySelector("[data-player-message]");
    if (output) {
        output.textContent = message || "";
    }
}

function startPlayer(shell) {
    const video = shell.querySelector(".js-player");
    const startButton = shell.querySelector("[data-player-start]");
    if (!video) {
        return;
    }

    const source = getSource(video.dataset.sourceIndex || shell.dataset.sourceIndex);
    setMessage(shell, "正在加载播放线路...");

    if (startButton) {
        startButton.classList.add("is-hidden");
    }

    if (video.canPlayType("application/vnd.apple.mpegurl")) {
        video.src = source;
        video.play().catch(function () {
            setMessage(shell, "浏览器已拦截自动播放，请再次点击播放器。 ");
        });
        setMessage(shell, "");
        return;
    }

    if (Hls && Hls.isSupported()) {
        if (video._hlsInstance) {
            video._hlsInstance.destroy();
        }
        const hls = new Hls({
            enableWorker: true,
            lowLatencyMode: true
        });
        video._hlsInstance = hls;
        hls.loadSource(source);
        hls.attachMedia(video);
        hls.on(Hls.Events.MANIFEST_PARSED, function () {
            video.play().catch(function () {
                setMessage(shell, "线路已就绪，请点击播放器开始播放。 ");
            });
            setMessage(shell, "");
        });
        hls.on(Hls.Events.ERROR, function (event, data) {
            if (data && data.fatal) {
                setMessage(shell, "当前线路加载失败，请刷新页面或稍后再试。 ");
            }
        });
        return;
    }

    setMessage(shell, "当前浏览器不支持 HLS 播放，请换用新版浏览器。 ");
}

function initPlayers() {
    document.querySelectorAll(".js-player-shell").forEach(function (shell) {
        const startButton = shell.querySelector("[data-player-start]");
        if (startButton) {
            startButton.addEventListener("click", function () {
                startPlayer(shell);
            });
        }
    });
}

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initPlayers);
} else {
    initPlayers();
}
