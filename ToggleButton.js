const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.navigator ul');

// Toggle menu visibility
navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});