(function () {
    function ready(callback) {
        if (document.readyState === "loading") {
            document.addEventListener("DOMContentLoaded", callback);
        } else {
            callback();
        }
    }

    function initMobileMenu() {
        var toggle = document.querySelector("[data-mobile-toggle]");
        var panel = document.querySelector("[data-mobile-panel]");
        if (!toggle || !panel) {
            return;
        }
        toggle.addEventListener("click", function () {
            panel.classList.toggle("is-open");
        });
    }

    function initHeroCarousel() {
        var carousel = document.querySelector("[data-hero-carousel]");
        if (!carousel) {
            return;
        }
        var slides = Array.prototype.slice.call(carousel.querySelectorAll("[data-hero-slide]"));
        var dots = Array.prototype.slice.call(carousel.querySelectorAll("[data-hero-dot]"));
        var nextButton = carousel.querySelector("[data-hero-next]");
        var prevButton = carousel.querySelector("[data-hero-prev]");
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
            }, 5000);
        }

        function stop() {
            if (timer) {
                window.clearInterval(timer);
            }
        }

        dots.forEach(function (dot, index) {
            dot.addEventListener("click", function () {
                show(index);
                start();
            });
        });

        if (nextButton) {
            nextButton.addEventListener("click", function () {
                show(current + 1);
                start();
            });
        }

        if (prevButton) {
            prevButton.addEventListener("click", function () {
                show(current - 1);
                start();
            });
        }

        carousel.addEventListener("mouseenter", stop);
        carousel.addEventListener("mouseleave", start);
        show(0);
        start();
    }

    function initCardFilters() {
        var toolbars = Array.prototype.slice.call(document.querySelectorAll("[data-filter-toolbar]"));
        toolbars.forEach(function (toolbar) {
            var section = toolbar.closest("section") || document;
            var input = toolbar.querySelector("[data-filter-input]");
            var buttons = Array.prototype.slice.call(toolbar.querySelectorAll("[data-filter-type]"));
            var grid = section.querySelector("[data-filter-grid]");
            var empty = section.querySelector("[data-filter-empty]");
            var count = toolbar.querySelector("[data-filter-count]");
            var activeType = "all";

            if (!grid) {
                return;
            }

            var cards = Array.prototype.slice.call(grid.querySelectorAll("[data-movie-card]"));

            function apply() {
                var keyword = input ? input.value.trim().toLowerCase() : "";
                var visible = 0;
                cards.forEach(function (card) {
                    var haystack = [
                        card.getAttribute("data-title"),
                        card.getAttribute("data-region"),
                        card.getAttribute("data-type"),
                        card.getAttribute("data-year"),
                        card.getAttribute("data-tags")
                    ].join(" ").toLowerCase();
                    var typeValue = card.getAttribute("data-type") || "";
                    var typeOk = activeType === "all" || typeValue.indexOf(activeType) !== -1;
                    var keywordOk = !keyword || haystack.indexOf(keyword) !== -1;
                    var shouldShow = typeOk && keywordOk;
                    card.hidden = !shouldShow;
                    if (shouldShow) {
                        visible += 1;
                    }
                });
                if (empty) {
                    empty.hidden = visible !== 0;
                }
                if (count) {
                    count.textContent = "当前显示 " + visible + " 部";
                }
            }

            if (input) {
                input.addEventListener("input", apply);
            }

            buttons.forEach(function (button) {
                button.addEventListener("click", function () {
                    activeType = button.getAttribute("data-filter-type") || "all";
                    buttons.forEach(function (item) {
                        item.classList.toggle("is-active", item === button);
                    });
                    apply();
                });
            });

            apply();
        });
    }

    function createSearchCard(movie) {
        var tags = (movie.tags || []).slice(0, 3).map(function (tag) {
            return "<span>" + escapeHtml(tag) + "</span>";
        }).join("");
        return [
            "<article class=\"movie-card\" data-movie-card>",
            "<a class=\"movie-poster\" href=\"" + movie.href + "\" aria-label=\"观看 " + escapeHtml(movie.title) + "\">",
            "<img src=\"" + movie.cover + "\" alt=\"" + escapeHtml(movie.title) + "\" loading=\"lazy\">",
            "<span class=\"play-float\">▶</span>",
            "</a>",
            "<div class=\"movie-card-body\">",
            "<div class=\"movie-meta-line\"><span>" + escapeHtml(movie.region) + "</span><span>" + escapeHtml(movie.year) + "</span><span>" + escapeHtml(movie.type) + "</span></div>",
            "<h3><a href=\"" + movie.href + "\">" + escapeHtml(movie.title) + "</a></h3>",
            "<p>" + escapeHtml(movie.oneLine) + "</p>",
            "<div class=\"movie-tags\">" + tags + "</div>",
            "</div>",
            "</article>"
        ].join("");
    }

    function escapeHtml(value) {
        return String(value || "")
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/\"/g, "&quot;")
            .replace(/'/g, "&#039;");
    }

    function initSearchPage() {
        var page = document.querySelector("[data-search-page]");
        if (!page || !window.MOVIE_SEARCH_INDEX) {
            return;
        }
        var form = page.querySelector("[data-search-form]");
        var input = page.querySelector("[data-search-input]");
        var summary = page.querySelector("[data-search-summary]");
        var results = page.querySelector("[data-search-results]");
        var defaults = page.querySelector("[data-search-default]");
        var params = new URLSearchParams(window.location.search);
        var initialQuery = params.get("q") || "";

        function runSearch(query) {
            var keyword = query.trim().toLowerCase();
            if (input) {
                input.value = query;
            }
            if (!keyword) {
                if (summary) {
                    summary.textContent = "请输入关键词开始搜索。";
                }
                if (results) {
                    results.innerHTML = "";
                }
                if (defaults) {
                    defaults.hidden = false;
                }
                return;
            }
            var found = window.MOVIE_SEARCH_INDEX.filter(function (movie) {
                return movie.searchText.indexOf(keyword) !== -1;
            }).slice(0, 120);
            if (summary) {
                summary.textContent = "关键词 “" + query + "” 找到 " + found.length + " 个结果";
            }
            if (results) {
                results.innerHTML = found.map(createSearchCard).join("");
            }
            if (defaults) {
                defaults.hidden = true;
            }
        }

        if (form) {
            form.addEventListener("submit", function (event) {
                event.preventDefault();
                var query = input ? input.value.trim() : "";
                var url = new URL(window.location.href);
                if (query) {
                    url.searchParams.set("q", query);
                } else {
                    url.searchParams.delete("q");
                }
                window.history.replaceState({}, "", url.toString());
                runSearch(query);
            });
        }

        if (input) {
            input.addEventListener("input", function () {
                runSearch(input.value);
            });
        }

        runSearch(initialQuery);
    }

    ready(function () {
        initMobileMenu();
        initHeroCarousel();
        initCardFilters();
        initSearchPage();
    });
}());
