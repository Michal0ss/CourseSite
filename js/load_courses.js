async function loadCourses() {
    const res = await fetch('data/main-courses.json');
    const courses = await res.json();
    const container = document.getElementById('courses-list');
    if (!container) return;

    container.innerHTML= '';

    courses.forEach(course=>{
        const row = document.createElement('div');
        row.classList.add('row');
        row.setAttribute('data-category', course.id);

        const stars = Array(course.rating).fill(`<a href="#"><i class="bx bxs-star"></i></a>`).join('');

        row.innerHTML = `
        <img src="${course.image}" alt="${course.title}">
        <div class="courses-text">
          <h5>${course.price}$</h5>
          <h3>${course.title}</h3>
          <h6>${course.duration}</h6>
          <div class="rating">
            <div class="stars">${stars}</div>
            <div class="review"><p>{${course.reviews} Reviews}</p></div>
          </div>
        </div>
        `;
        container.appendChild(row);
    });
}


document.addEventListener("DOMContentLoaded", () => {
    loadCourses();
  });