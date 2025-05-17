const prompts = [
  { title: "🔥 Viral Tweet Generator", desc: "Craft tweets that spark engagement & shares instantly.", premium: true },
  { title: "🧠 Idea Brainstormer", desc: "Get unique ideas for business, content, or writing.", premium: false },
  { title: "📸 Instagram Caption Creator", desc: "Write cool captions that match your photo vibe.", premium: false },
  { title: "🎬 YouTube Script Starter", desc: "Start your next viral video with this prompt!", premium: true },
  { title: "✍️ Creative Writing Spark", desc: "Unblock your creativity with a writing jumpstart.", premium: false },
  { title: "💼 Business Pitch Booster", desc: "Perfect your pitch with AI-enhanced language.", premium: true }
];

const container = document.getElementById("prompts");
const generateBtn = document.querySelector(".generate-btn");

function renderPrompt(p, i) {
  const div = document.createElement("div");
  div.className = "prompt";
  div.style.animationDelay = `${i * 0.1}s`;
  div.innerHTML = `
    <h2>${p.title}</h2>
    <p>${p.desc}</p>
    <button>${p.premium ? "Buy Prompt 💸" : "Copy Prompt 📋"}</button>
  `;
  container.appendChild(div);
}

function generateRandomPrompt() {
  container.innerHTML = "";
  const shuffled = prompts.sort(() => 0.5 - Math.random());
  shuffled.slice(0, 3).forEach(renderPrompt);
}

generateBtn.addEventListener("click", generateRandomPrompt);
window.onload = generateRandomPrompt;
