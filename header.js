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

        // Show the Home section specifically
        document.getElementById('home').classList.add('visible');
        document.getElementById('about').classList.add('visible');
        document.getElementById('projects').classList.add('visible');
        document.getElementById('contact').classList.add('visible');

    }, 100);

}, 3000);

document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll(".nav-link");

    links.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1); // Get section ID
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 80, // Adjusted for fixed header
                    behavior: "smooth"
                });
            }
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("view-work-btn").addEventListener("click", function () {
        document.getElementById("projects").scrollIntoView({ behavior: "smooth" });
    });
});

document.getElementById("contactForm").addEventListener("submit", function(event) {
    setTimeout(() => {
        document.getElementById("contactForm").reset(); // Clears input fields after submission
    }, 1000); // Wait for 1 second before clearing
});
