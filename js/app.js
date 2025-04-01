async function loadStats() {
    const res = await fetch('data/stats.json');
    const stats = await res.json();
    const container = document.getElementById('stats-container');
    if (!container) return;
  
    container.innerHTML = '';
  
    stats.forEach(item => {
      const box = document.createElement('div');
      box.classList.add('container-box');
      box.innerHTML = `
        <div class="container-i">
          <img src="${item.image}"  width="60" alt="${item.label}" />
        </div>
        <div class="container-text">
          <h4>${item.value}</h4>
          <p>${item.label}</p>
        </div>`;
      container.appendChild(box);
    });
  }
  
  // Załaduj dane po wczytaniu strony
  document.addEventListener("DOMContentLoaded", loadStats);
  