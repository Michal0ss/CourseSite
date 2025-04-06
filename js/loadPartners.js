export async function loadPartners() {
    const res = await fetch("data/partners.json");
    const logos = await res.json();
    const container = document.getElementById("cta-container");
    if (!container) return;
  
    container.innerHTML = "";
  
    logos.forEach(logo => {
      const wrapper = document.createElement("div");
      wrapper.classList.add("cta-img");
      wrapper.innerHTML = `<img src="${logo.image}" alt="Partner Logo">`;
      container.appendChild(wrapper);
    });
};
  