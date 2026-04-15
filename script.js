// script.js

// Functionality for interactive elements

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Mobile menu toggle
const menuToggle = document.getElementById('menu-toggle');
const menu = document.getElementById('mobile-menu');

menuToggle.addEventListener('click', () => {
    menu.classList.toggle('active');
});

// Adding interactive elements functionality can be continued here.