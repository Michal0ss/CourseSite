export function loadCategoryDropdown(onCategorySelect) {
  const container = document.getElementById("category-dropdown-container");
  if (!container) return;

  container.innerHTML = `
    <div class="dropdown-menu">
      <form>
        <input type="search" class="form-control" autocomplete="off" placeholder="Type to filter..." id="dropdown-search">
      </form>
      <ul class="dropdown-list">
        <li><a href="#" data-category="all"><span class="dot bg-dark"></span>All</a></li>
        <li><a href="#" data-category="frontend"><span class="dot bg-success"></span>Frontend</a></li>
        <li><a href="#" data-category="backend"><span class="dot bg-primary"></span>Backend</a></li>
        <li><a href="#" data-category="design"><span class="dot bg-danger"></span>Design</a></li>
        <li><a href="#" data-category="marketing"><span class="dot bg-info"></span>Marketing</a></li>
      </ul>
    </div>
  `;

  const links = container.querySelectorAll(".dropdown-list a");
  const searchInput = container.querySelector("#dropdown-search");


  if (searchInput) {
    searchInput.addEventListener("input", () => {
      const query = searchInput.value.toLowerCase();
      links.forEach(link => {
        const text = link.textContent.toLowerCase();
        link.parentElement.style.display = text.includes(query) ? "block" : "none";
      });
    });
  }

  links.forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();

      links.forEach(l => l.classList.remove("active"));
      link.classList.add("active");

      const selected = link.getAttribute("data-category");

      if (typeof onCategorySelect === "function") {
        onCategorySelect(selected); // ⬅ wywołujemy przekazaną funkcję z `app.js`
      }
    });
  });
}
