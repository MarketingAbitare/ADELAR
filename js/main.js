// Animación fundido al scroll
const images = document.querySelectorAll('.grid img');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.2 });

images.forEach(img => observer.observe(img));

const carouselImages = document.querySelectorAll('.carrusel img');

const carouselObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.2 });

carouselImages.forEach(img => carouselObserver.observe(img));
