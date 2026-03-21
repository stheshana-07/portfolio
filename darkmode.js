// Remove the duplicate button from HTML and setup the logic
const existingBtn = document.querySelector('.dark-toggle');
if (existingBtn) existingBtn.remove();

const toggle = document.createElement("button");
toggle.innerHTML = "🌙";
toggle.className = "dark-toggle";
document.body.appendChild(toggle);

// Fix hardcoded backgrounds so they use the variables
document.querySelectorAll('#about, .card, footer, #chat-widget, #chat-display').forEach(el => {
    el.style.backgroundColor = 'var(--card-bg)';
    el.style.color = 'var(--text-main)';
});

toggle.onclick = () => {
    const isDark = document.body.classList.toggle("dark-mode");
    toggle.innerHTML = isDark ? "☀️" : "🌙";
    localStorage.setItem("theme", isDark ? "dark" : "light");
};

// Persistent Theme Load
if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
    toggle.innerHTML = "☀️";
}
