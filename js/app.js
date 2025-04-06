import { loadStats } from "./load_stats.js";
import { loadPopularCourses } from "./load_stats.js";
import { loadCourses } from "./load_courses.js";
import { loadPartners } from "./loadPartners.js";
import { loadCategoryDropdown } from "./drop_down.js";

let currentCategory = "all";

document.addEventListener("DOMContentLoaded", () => {
  loadStats();
  loadPopularCourses();
  loadCourses();
  loadPartners();
  loadCategoryDropdown(setCategory);

  const searchInput = document.getElementById("course-search");
  if (searchInput) {
    searchInput.addEventListener("input", () => {
      const query = searchInput.value.toLowerCase();
      loadCourses(query, currentCategory);
    });
  }
});

function setCategory(newCategory) {
  currentCategory = newCategory;

  const searchInput = document.getElementById("course-search");
  const query = searchInput?.value.toLowerCase() || "";

  loadCourses(query, currentCategory);
}

new Swiper(".card-wrapper", {
  loop: true,
  spaceBetween: 30,

  // Pagination bullets
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },

  // Responsive breakpoints
  breakpoints: {
    0: {
      slidesPerView: 1
    },
    768: {
      slidesPerView: 2
    },
    1024: {
      slidesPerView: 3
    }
  }
});
