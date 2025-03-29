const header = document.getElementById('header');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

// Scroll Reveal: usa IntersectionObserver para revelar seções
const reveals = document.querySelectorAll('.reveal');

const revealOnScroll = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealOnScroll.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.2
});

reveals.forEach(section => {
  revealOnScroll.observe(section);
});

// Scroll Indicator: ao clicar na seta, rola para a próxima seção (Sobre)
document.querySelector('.scroll-indicator').addEventListener('click', () => {
  document.querySelector('#sobre').scrollIntoView({ behavior: 'smooth' });
});
