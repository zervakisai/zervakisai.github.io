// Burger Menu Toggle
const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Parallax Effect
window.addEventListener('scroll', function() {
    const offset = window.pageYOffset;
    const layer2 = document.querySelector('.layer2');
    
    // Προσάρμοσε το δεύτερο layer για parallax
    layer2.style.transform = `translateY(${offset * 0.5}px)`;
});
