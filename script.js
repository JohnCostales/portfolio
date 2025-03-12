// Scroll reveal animation
window.addEventListener('scroll', function() {
    const reveals = document.querySelectorAll('.reveal');
    
    for(let i = 0; i < reveals.length; i++) {
        const windowHeight = window.innerHeight;
        const revealTop = reveals[i].getBoundingClientRect().top;
        const revealPoint = 150;
        
        if(revealTop < windowHeight - revealPoint) {
            reveals[i].classList.add('active');
        }
    }
});

// Initial reveal check
window.addEventListener('load', function() {
    const reveals = document.querySelectorAll('.reveal');
    
    for(let i = 0; i < reveals.length; i++) {
        const windowHeight = window.innerHeight;
        const revealTop = reveals[i].getBoundingClientRect().top;
        const revealPoint = 150;
        
        if(revealTop < windowHeight - revealPoint) {
            reveals[i].classList.add('active');
        }
    }
});

// Theme toggle functionality
const colorOptions = document.querySelectorAll('.color-option');
const root = document.documentElement;

colorOptions.forEach(option => {
    option.addEventListener('click', function() {
        const primaryColor = this.getAttribute('data-primary');
        root.style.setProperty('--primary', primaryColor);
    });
});

// Smooth scrolling for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});