import { H as Hls } from "./hls-vendor-dru42stk.js";

const menuButton = document.querySelector("[data-menu-toggle]");
const mobileMenu = document.querySelector("[data-mobile-menu]");

if (menuButton && mobileMenu) {
  menuButton.addEventListener("click", () => {
    mobileMenu.classList.toggle("open");
  });
}

const hero = document.querySelector("[data-hero]");

if (hero) {
  const slides = Array.from(hero.querySelectorAll("[data-hero-slide]"));
  const dots = Array.from(hero.querySelectorAll("[data-hero-dot]"));
  let index = 0;

  const showSlide = (nextIndex) => {
    index = (nextIndex + slides.length) % slides.length;
    slides.forEach((slide, slideIndex) => {
      slide.classList.toggle("active", slideIndex === index);
    });
    dots.forEach((dot, dotIndex) => {
      dot.classList.toggle("active", dotIndex === index);
    });
  };

  dots.forEach((dot) => {
    dot.addEventListener("click", () => {
      const nextIndex = Number(dot.getAttribute("data-hero-dot"));
      showSlide(nextIndex);
    });
  });

  if (slides.length > 1) {
    setInterval(() => showSlide(index + 1), 5200);
  }
}

const params = new URLSearchParams(window.location.search);
const queryFromUrl = params.get("q");
const searchInput = document.querySelector("[data-search-input]");

if (queryFromUrl && searchInput) {
  searchInput.value = queryFromUrl;
}

const normalize = (value) => (value || "").toString().trim().toLowerCase();
const cards = Array.from(document.querySelectorAll("[data-filter-list] .movie-card"));
const yearFilter = document.querySelector("[data-year-filter]");
const typeFilter = document.querySelector("[data-type-filter]");

const applyFilters = () => {
  if (!cards.length) {
    return;
  }

  const q = normalize(searchInput ? searchInput.value : "");
  const year = yearFilter ? yearFilter.value : "all";
  const type = typeFilter ? typeFilter.value : "all";

  cards.forEach((card) => {
    const text = normalize([
      card.dataset.title,
      card.dataset.year,
      card.dataset.type,
      card.dataset.region,
      card.dataset.tags
    ].join(" "));
    const cardYear = card.dataset.year || "";
    const cardType = card.dataset.type || "";
    const matchQuery = !q || text.includes(q);
    const matchYear = year === "all" || cardYear === year || (year === "older" && Number(cardYear) < 2020);
    const matchType = type === "all" || cardType.includes(type);
    card.classList.toggle("is-hidden", !(matchQuery && matchYear && matchType));
  });
};

[searchInput, yearFilter, typeFilter].forEach((control) => {
  if (control) {
    control.addEventListener("input", applyFilters);
    control.addEventListener("change", applyFilters);
  }
});

applyFilters();

const startPlayer = async (button) => {
  const video = document.getElementById(button.dataset.video);
  const src = button.dataset.src;

  if (!video || !src) {
    return;
  }

  if (!video.dataset.ready) {
    if (video.canPlayType("application/vnd.apple.mpegurl")) {
      video.src = src;
    } else if (Hls && Hls.isSupported()) {
      const hls = new Hls({ enableWorker: true, lowLatencyMode: false });
      hls.loadSource(src);
      hls.attachMedia(video);
      video._hlsInstance = hls;
    } else {
      video.src = src;
    }
    video.dataset.ready = "true";
  }

  button.classList.add("hidden");
  try {
    await video.play();
  } catch (error) {
    button.classList.remove("hidden");
  }
};

document.querySelectorAll("[data-play-button]").forEach((button) => {
  button.addEventListener("click", () => startPlayer(button));
});
