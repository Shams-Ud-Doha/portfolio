// Theme Toggle with Local Storage
const themeToggle = document.getElementById("theme-toggle");
const body = document.body;

// Check for stored theme preference
if (localStorage.getItem("theme") === "dark") {
    body.classList.add("dark-mode");
    themeToggle.textContent = ":sunny:";
}

// Toggle theme and store preference
themeToggle.addEventListener("click", () => {
    body.classList.toggle("dark-mode");
    const theme = body.classList.contains("dark-mode") ? "dark" : "light";
    localStorage.setItem("theme", theme);
    themeToggle.textContent = theme === "dark" ? ":sunny:" : ":crescent_moon:";
});

// Smooth Scrolling for Navigation
const navLinks = document.querySelectorAll("nav a");
navLinks.forEach(link => {
    link.addEventListener("click", event => {
        event.preventDefault();
        const targetId = link.getAttribute("href").substring(1);
        const targetElement = document.getElementById(targetId);
        targetElement.scrollIntoView({ behavior: "smooth" });
    });
});

// Project Hover Interaction (Simple Scale Effect)
const projects = document.querySelectorAll(".project");
projects.forEach(project => {
    project.addEventListener("mouseenter", () => {
        project.style.transform = "scale(1.05)";
    });
    project.addEventListener("mouseleave", () => {
        project.style.transform = "scale(1)";
    });
});