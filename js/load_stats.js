export async function loadStats() {
  const res = await fetch("data/stats.json");
  const stats = await res.json();
  const container = document.getElementById("stats-container");
  if (!container) return;

  container.innerHTML = "";

  stats.forEach(item => {
    const box = document.createElement("div");
    box.classList.add("container-box");
    box.innerHTML = `
      <div class="container-i">
        <img src="${item.image}" alt="${item.label}"/>
      </div>
      <div class="container-text">
        <h4>${item.value}</h4>
        <p>${item.label}</p>
      </div>`;
    container.appendChild(box);
  });
}

export async function loadPopularCourses() {
  const res = await fetch("data/courses.json");
  const popular_course = await res.json();
  const container = document.getElementById("courses-container");
  if (!container) return;

  container.innerHTML = "";

  popular_course.forEach(course => {
    const card = document.createElement("div");
    card.classList.add("box");
    card.innerHTML = `
      <img src="${course.image}" alt="${course.name}" width="60">
      <h4>${course.name}</h4>
      <p>${course.courses} Courses</p>
    `;
    container.appendChild(card);
  });
}
