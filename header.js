// Typing effect for welcome text
const text = "Welcome to My Portfolio";
let i = 0;
const speed = 100; // Typing speed

function typeEffect() {
    if (i < text.length) {
        document.querySelector(".welcome-text").textContent += text.charAt(i);
        i++;
        setTimeout(typeEffect, speed);
    }
}

// Start typing animation when page loads
document.addEventListener("DOMContentLoaded", () => {
    typeEffect();
});

// Wait for 3 seconds, then show the main content
setTimeout(() => {
    document.getElementById('welcome-screen').style.display = 'none';
    document.getElementById('main-content').style.display = 'block';

    // Fade-in animation for main content
    setTimeout(() => {
        document.getElementById('main-content').style.opacity = '1';
    }, 100);
}, 3000);

