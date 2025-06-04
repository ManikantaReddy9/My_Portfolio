// Typing effect for welcome text
const text = "Welcome to My Portfolio";
let i = 0;
const speed = 100; 

function typeEffect() {
    if (i < text.length) {
        document.querySelector(".welcome-text").textContent += text.charAt(i);
        i++;
        setTimeout(typeEffect, speed);
    }
}

function toggleMenu() {
    const menu = document.getElementById('mobileMenu');
    menu.classList.toggle('active');
  }
  
document.addEventListener("DOMContentLoaded", () => {
    typeEffect();
});

setTimeout(() => {
    document.getElementById('welcome-screen').style.display = 'none';
    document.getElementById('main-content').style.display = 'block';

    setTimeout(() => {
        document.getElementById('main-content').style.opacity = '1';

        document.getElementById('home').classList.add('visible');
        document.getElementById('about').classList.add('visible');
        document.getElementById('projects').classList.add('visible');
        document.getElementById('contact').classList.add('visible');
        document.getElementById('thank-you').classList.add('visible');

    }, 100);

}, 3000);

document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll(".nav-link");

    links.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1); 
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 80, 
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
        document.getElementById("contactForm").reset(); 
    }, 1000); 
});

document.getElementById("ebbtn").addEventListener("click", function () {
    document.getElementById("home").scrollIntoView({ behavior: "smooth" });
});
