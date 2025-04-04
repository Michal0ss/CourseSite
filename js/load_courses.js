export async function loadCourses(searchTerm = "") {
  const res = await fetch('data/main-courses.json');
  const courses = await res.json();
  const container = document.getElementById('courses-list');
  const pagination = document.getElementById('pagination');
  if (!container || !pagination) return;

  const itemsPerPage = 10;
  let currentPage = 1;

  // FILTRUJEMY jeśli searchTerm nie jest pusty
  let filteredCourses = courses;
  if (searchTerm) {
    filteredCourses = courses.filter(course =>
      course.title.toLowerCase().startsWith(searchTerm)
    );
  }

  function renderPage(page) {
    container.innerHTML = '';
    const start = (page - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const currentCourses = filteredCourses.slice(start, end);

    currentCourses.forEach(course => {
      const row = document.createElement('div');
      row.classList.add('row');
      row.setAttribute('data-category', course.id);

      const stars = Array(course.rating)
        .fill(`<a href="#"><i class="bx bxs-star"></i></a>`)
        .join('');

      row.innerHTML = `
        <img src="${course.image}" alt="${course.title}">
        <div class="courses-text">
          <h5>${course.price}$</h5>
          <h3>${course.title}</h3>
          <h6>${course.duration}</h6>
          <div class="rating">
            <div class="stars">${stars}</div>
            <div class="review"><p>${course.reviews} Reviews</p></div>
          </div>
        </div>
      `;
      container.appendChild(row);
    });
  }

  function renderPagination() {
    pagination.innerHTML = '';
    const totalPages = Math.ceil(filteredCourses.length / itemsPerPage);

    for (let i = 1; i <= totalPages; i++) {
      const btn = document.createElement('button');
      btn.textContent = i;
      btn.classList.add('page-btn');
      if (i === currentPage) btn.classList.add('active');

      btn.addEventListener('click', () => {
        currentPage = i;
        renderPage(currentPage);
        renderPagination();
        document.querySelector('.main-courses').scrollIntoView({ behavior: 'smooth' });
      });

      pagination.appendChild(btn);
    }
  }

  renderPage(currentPage);
  renderPagination();
}













// export async function loadCourses() {
//     const res = await fetch('data/main-courses.json');
//     const courses = await res.json();
//     const container = document.getElementById('courses-list');
//     if (!container) return;

//     container.innerHTML= '';

//     courses.forEach(course=>{
//         const row = document.createElement('div');
//         row.classList.add('row');
//         row.setAttribute('data-category', course.id);

//         const stars = Array(course.rating).fill(`<a href="#"><i class="bx bxs-star"></i></a>`).join('');

//         row.innerHTML = `
//         <img src="${course.image}" alt="${course.title}">
//         <div class="courses-text">
//           <h5>${course.price}$</h5>
//           <h3>${course.title}</h3>
//           <h6>${course.duration}</h6>
//           <div class="rating">
//             <div class="stars">${stars}</div>
//             <div class="review"><p>${course.reviews} Reviews</p></div>
//           </div>
//         </div>
//         `;
//         container.appendChild(row);
//     });
// }

