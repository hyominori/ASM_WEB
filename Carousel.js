let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-item');
const indicators = document.querySelectorAll('.carousel-indicators span');

function showSlide(index) {
    currentSlide = (index + slides.length) % slides.length; // Loop slides
    const offset = -currentSlide * 100;
    document.querySelector('.carousel-inner').style.transform = `translateX(${offset}%)`;
    
    // Update active indicator
    indicators.forEach(ind => ind.classList.remove('active'));
    indicators[currentSlide].classList.add('active');
}

function moveSlide(step) {
    showSlide(currentSlide + step);
}

function goToSlide(index) {
    showSlide(index);
}

setInterval(() => moveSlide(1), 3000);
