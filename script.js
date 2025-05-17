const prompts = [
  {
    topic: "Digital Marketing & Sales",
    title: "🚀 Advanced Facebook Ad Copy",
    desc: "Generate persuasive Facebook ad copy that increases clicks and conversions by targeting specific demographics with tailored messages and emotional triggers."
  },
  {
    topic: "Digital Marketing & Sales",
    title: "📈 SEO Keyword Strategy",
    desc: "Develop a comprehensive SEO keyword strategy focusing on long-tail keywords, competitor analysis, and content optimization for higher Google rankings."
  },
  {
    topic: "Productivity & Time Management",
    title: "⏰ Pomodoro Technique Planner",
    desc: "Create a detailed Pomodoro schedule that maximizes focus periods and includes breaks to boost productivity and avoid burnout."
  },
  {
    topic: "Productivity & Time Management",
    title: "📅 Weekly Task Prioritization",
    desc: "Organize your week by priority and deadlines using Eisenhower’s urgent-important matrix to focus on impactful tasks first."
  },
  {
    topic: "Instagram & TikTok Content",
    title: "🎬 Viral TikTok Video Ideas",
    desc: "Generate trendy and unique TikTok video concepts designed to increase engagement and follower growth, including hashtag recommendations."
  },
  {
    topic: "Instagram & TikTok Content",
    title: "📱 Reels Caption Writer",
    desc: "Craft captivating captions for Instagram Reels to grab attention and encourage viewer interaction using humor or curiosity."
  }
];

const container = document.getElementById("prompts");
const messageCopy = document.createElement("div");
messageCopy.className = "message-copy";
messageCopy.textContent = "Copied to clipboard!";
document.body.appendChild(messageCopy);

function renderPrompts() {
  container.innerHTML = "";
  prompts.forEach((p, i) => {
    const promptDiv = document.createElement("div");
    promptDiv.className = "prompt";
    promptDiv.style.animationDelay = `${i * 0.15}s`;
    promptDiv.innerHTML = `
      <h2>${p.title}</h2>
      <p>${p.desc}</p>
      <button class="copy-btn">Copy Prompt 📋</button>
    `;

    const copyBtn = promptDiv.querySelector(".copy-btn");
    copyBtn.addEventListener("click", () => {
      navigator.clipboard.writeText(`${p.title}\n\n${p.desc}\n\nGenerated from Promptify.com`);
      showCopyMessage();
    });

    container.appendChild(promptDiv);
  });
}

function showCopyMessage() {
  messageCopy.classList.add("show");
  setTimeout(() => {
    messageCopy.classList.remove("show");
  }, 1800);
}

// Dark mode toggle
const toggleBtn = document.getElementById("toggle-theme");
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("light");
  toggleBtn.textContent = document.body.classList.contains("light") ? "🌞" : "🌙";
});

renderPrompts();