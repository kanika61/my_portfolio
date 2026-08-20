// Kanika Prajapati — Portfolio v2 (minimal, card-based)
document.getElementById('year').textContent = new Date().getFullYear();

const cards = document.querySelectorAll('.card');
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      entry.target.style.transitionDelay = (i % 3) * 0.06 + 's';
      entry.target.classList.add('in');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.08, rootMargin: '0px 0px -30px 0px' });

cards.forEach(card => observer.observe(card));
