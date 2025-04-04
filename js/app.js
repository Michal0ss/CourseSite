import { loadStats } from "./load_stats.js";
import { loadPopularCourses } from "./load_stats.js";
import { loadCourses } from "./load_courses.js";
import { loadPartners } from "./loadPartners.js";
import { loadCategoryDropdown } from "./drop_down.js";

let currentCategory = "all"; // ✅ dodaj to na górze

document.addEventListener("DOMContentLoaded", () => {
  loadStats();
  loadPopularCourses();
  loadCourses(); // ← domyślnie wszystko
  loadPartners();
  loadCategoryDropdown(setCategory); // 🆕 przekaż funkcję zwrotną

  const searchInput = document.getElementById("course-search");
  if (searchInput) {
    searchInput.addEventListener("input", () => {
      const query = searchInput.value.toLowerCase();
      loadCourses(query, currentCategory); // 🧠 razem z kategorią
    });
  }
});

// 🧩 funkcja pomocnicza – callback dla dropdownu
function setCategory(newCategory) {
  currentCategory = newCategory;

  const searchInput = document.getElementById("course-search");
  const query = searchInput?.value.toLowerCase() || "";

  loadCourses(query, currentCategory);
}
