import { loadStats } from "./load_stats.js";
import { loadPopularCourses } from "./load_stats.js";
import { loadCourses } from "./load_courses.js";
import { loadPartners } from "./loadPartners.js";

document.addEventListener("DOMContentLoaded", () => {
  loadStats();
  loadPopularCourses();
  loadCourses();
  loadPartners();

  const searchInput = document.getElementById("course-search");
  if (searchInput) {
    searchInput.addEventListener("input", () => {
      const query = searchInput.value.toLowerCase();
      console.log("Wpisano:", query); // <- sprawdź czy działa w konsoli!
      loadCourses(query); // <-- tu przekazujemy tekst do Twojej funkcji
    });
  }
});