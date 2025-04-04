import { loadStats } from "./load_stats.js";
import { loadPopularCourses } from "./load_stats.js";
import { loadCourses } from "./load_courses.js";
import { loadPartners } from "./loadPartners.js";

document.addEventListener("DOMContentLoaded", () => {
  loadStats();
  loadPopularCourses();
  loadCourses();
  loadPartners();
});