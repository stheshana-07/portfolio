const btn = document.createElement("button");
btn.innerHTML = "🌙";
btn.style.cssText = "position:fixed;top:20px;right:20px;z-index:1000;padding:10px;cursor:pointer;border-radius:50%;border:none;background:#eee;";
document.body.appendChild(btn);
btn.onclick = () => {
  document.body.classList.toggle("dark-mode");
  btn.innerHTML = document.body.classList.contains("dark-mode") ? "☀️" : "🌙";
};
