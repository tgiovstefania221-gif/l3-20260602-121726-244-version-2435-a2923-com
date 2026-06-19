(function () {
    var navButton = document.querySelector("[data-nav-toggle]");
    var nav = document.querySelector("[data-main-nav]");

    if (navButton && nav) {
        navButton.addEventListener("click", function () {
            nav.classList.toggle("open");
        });
    }

    var hero = document.querySelector("[data-hero]");

    if (hero) {
        var slides = Array.prototype.slice.call(hero.querySelectorAll("[data-hero-slide]"));
        var dots = Array.prototype.slice.call(hero.querySelectorAll("[data-hero-dot]"));
        var current = 0;
        var timer = null;

        var showSlide = function (index) {
            current = (index + slides.length) % slides.length;
            slides.forEach(function (slide, slideIndex) {
                slide.classList.toggle("active", slideIndex === current);
            });
            dots.forEach(function (dot, dotIndex) {
                dot.classList.toggle("active", dotIndex === current);
            });
        };

        var startTimer = function () {
            timer = window.setInterval(function () {
                showSlide(current + 1);
            }, 5200);
        };

        dots.forEach(function (dot) {
            dot.addEventListener("click", function () {
                window.clearInterval(timer);
                showSlide(Number(dot.getAttribute("data-hero-dot")) || 0);
                startTimer();
            });
        });

        if (slides.length > 1) {
            startTimer();
        }
    }

    var input = document.getElementById("movie-search-input");
    var typeSelect = document.getElementById("movie-search-type");
    var button = document.getElementById("movie-search-button");
    var results = document.getElementById("search-results");
    var count = document.getElementById("search-result-count");

    if (input && button && results && count && window.SEARCH_MOVIES) {
        var params = new URLSearchParams(window.location.search);
        var initial = params.get("q") || "";

        var card = function (movie) {
            var tags = movie.tags.slice(0, 4).map(function (tag) {
                return "<span>" + escapeHtml(tag) + "</span>";
            }).join("");

            return "<article class=\"movie-card\">" +
                "<a class=\"poster\" href=\"./movies/" + movie.file + "\" title=\"" + escapeHtml(movie.title) + "\">" +
                "<img src=\"./" + movie.image + "\" alt=\"" + escapeHtml(movie.title) + "\" loading=\"lazy\">" +
                "<span class=\"score\">" + movie.rating.toFixed(1) + "</span>" +
                "</a>" +
                "<div class=\"movie-card-body\">" +
                "<h2><a href=\"./movies/" + movie.file + "\">" + escapeHtml(movie.title) + "</a></h2>" +
                "<p class=\"meta-line\">" + movie.year + " · " + escapeHtml(movie.region) + " · " + escapeHtml(movie.type) + "</p>" +
                "<p class=\"one-line\">" + escapeHtml(movie.oneLine) + "</p>" +
                "<div class=\"tag-row\">" + tags + "</div>" +
                "</div>" +
                "</article>";
        };

        var runSearch = function () {
            var keyword = input.value.trim().toLowerCase();
            var typeValue = typeSelect ? typeSelect.value : "";

            if (!keyword && !typeValue) {
                results.innerHTML = "";
                count.textContent = "输入关键词后显示匹配影片";
                return;
            }

            var found = window.SEARCH_MOVIES.filter(function (movie) {
                var haystack = [
                    movie.title,
                    movie.region,
                    movie.type,
                    String(movie.year),
                    movie.genre,
                    movie.tags.join(" "),
                    movie.oneLine
                ].join(" ").toLowerCase();

                var matchKeyword = keyword ? haystack.indexOf(keyword) !== -1 : true;
                var matchType = typeValue ? movie.type.indexOf(typeValue) !== -1 : true;
                return matchKeyword && matchType;
            }).slice(0, 120);

            count.textContent = found.length ? "找到 " + found.length + " 条相关影片" : "没有找到匹配影片";
            results.innerHTML = found.map(card).join("");
        };

        input.value = initial;
        button.addEventListener("click", runSearch);
        input.addEventListener("keydown", function (event) {
            if (event.key === "Enter") {
                event.preventDefault();
                runSearch();
            }
        });

        if (typeSelect) {
            typeSelect.addEventListener("change", runSearch);
        }

        if (initial) {
            runSearch();
        }
    }

    function escapeHtml(value) {
        return String(value)
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/\"/g, "&quot;")
            .replace(/'/g, "&#039;");
    }
})();
