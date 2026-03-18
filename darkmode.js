const toggle = document.createElement("button");
toggle.innerHTML = "🌙";
toggle.className = "dark-toggle";
toggle.style.cssText = "position:fixed;top:20px;right:20px;z-index:9999;padding:12px;cursor:pointer;border-radius:50%;border:none;background:#0066FF;color:white;font-size:20px;box-shadow:0 4px 12px rgba(0,0,0,0.2);";
document.body.appendChild(toggle);

toggle.onclick = () => {
    document.body.classList.toggle("dark-mode");
    const isDark = document.body.classList.contains("dark-mode");
    toggle.innerHTML = isDark ? "☀️" : "🌙";
    toggle.style.background = isDark ? "#facc15" : "#0066FF";
};
