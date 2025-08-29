// Menu burger responsive
const burger = document.getElementById("burger");
const navLinks = document.getElementById("navLinks");

burger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});


// === Compteurs dynamiques ===
function animateCounter(id, target) {
  const el = document.getElementById(id);
  let count = 0;
  const interval = setInterval(() => {
    count++;
    el.textContent = count;
    if (count >= target) clearInterval(interval);
  }, 30); // vitesse
}
animateCounter("counter1", 10000); // 10K
animateCounter("counter2", 50);    // 50 projets
animateCounter("counter3", 95);    // 95%

// === Slider Témoignages ===
const slides = document.querySelectorAll(".slide");
let index = 0;

document.getElementById("next").addEventListener("click", () => {
  slides[index].classList.remove("active");
  index = (index + 1) % slides.length;
  slides[index].classList.add("active");
});
document.getElementById("prev").addEventListener("click", () => {
  slides[index].classList.remove("active");
  index = (index - 1 + slides.length) % slides.length;
  slides[index].classList.add("active");
});

// === Icônes Lucide ===
lucide.createIcons();
