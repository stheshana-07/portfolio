document.addEventListener("DOMContentLoaded", () => {
    const toggleBtn = document.createElement("button");
    toggleBtn.className = "dark-toggle";
    toggleBtn.innerHTML = "🌙";
    document.body.appendChild(toggleBtn);

    const setTheme = (isDark) => {
        document.body.classList.toggle("dark-mode", isDark);
        toggleBtn.innerHTML = isDark ? "☀️" : "🌙";
        localStorage.setItem("theme", isDark ? "dark" : "light");
    };

    toggleBtn.onclick = () => setTheme(!document.body.classList.contains("dark-mode"));
    if (localStorage.getItem("theme") === "dark") setTheme(true);

    const typeText = `I am a South African based Web Developer and Cybersecurity Analyst. I specialize in building high-performance web applications...`;
    let idx = 0;
    const speed = 35;
    const type = () => {
        if (idx < typeText.length) {
            document.getElementById("typewriter").innerHTML += typeText.charAt(idx++);
            setTimeout(type, speed);
        }
    };
    type();
    const reveal = () => {
        document.querySelectorAll(".reveal").forEach(r => {
            if (r.getBoundingClientRect().top < window.innerHeight - 100) r.classList.add("active");
        });
    };
    window.onscroll = reveal;
    reveal();

    const chatWidget = document.getElementById('chat-widget');
    const chatInput = document.getElementById('chat-input');
    const chatDisplay = document.getElementById('chat-display');

    window.toggleChat = () => {
        chatWidget.style.display = (chatWidget.style.display === 'flex') ? 'none' : 'flex';
    };

    document.getElementById('chatToggle').onclick = toggleChat;
    document.getElementById('closeChat').onclick = toggleChat;

    const responses = {
        "help": "Commands: <b>'skills'</b>, <b>'hacking'</b>, <b>'projects'</b>.",
        "skills": "Athabile is lethal with Python and Kali Linux.",
        "hacking": "If you're not secured by Mr. Dinilanga, you're cooked."
    };

    window.sendMessage = () => {
        const val = chatInput.value.trim().toLowerCase();
        if (!val) return;

        chatDisplay.innerHTML += `<div class="user-msg">${chatInput.value}</div>`;
        let reply = "I don't know that one. Type <b>'help'</b>.";
        
        for (let key in responses) {
            if (val.includes(key)) { reply = responses[key]; break; }
        }

        setTimeout(() => {
            chatDisplay.innerHTML += `<div class="bot-msg"><b>StheshBot:</b> ${reply}</div>`;
            chatDisplay.scrollTop = chatDisplay.scrollHeight;
        }, 400);
        chatInput.value = '';
    };

    document.getElementById('sendBtn').onclick = sendMessage;
    chatInput.onkeypress = (e) => { if(e.key === 'Enter') sendMessage(); };
});
