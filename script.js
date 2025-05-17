const prompts = [
  {
    title: "🔥 Viral Tweet Generator",
    desc: "Craft tweets that spark engagement & shares instantly.",
    premium: true
  },
  {
    title: "🧠 Idea Brainstormer",
    desc: "Get unique ideas for business, content, or writing.",
    premium: false
  },
  {
    title: "📸 Instagram Caption Creator",
    desc: "Write cool captions that match your photo vibe.",
    premium: false
  }
];

const container = document.getElementById("prompts");

prompts.forEach((p, i) => {
  const div = document.createElement("div");
  div.className = "prompt";
  div.style.animationDelay = `${i * 0.2}s`;
  div.innerHTML = `
    <h2>${p.title}</h2>
    <p>${p.desc}</p>
    <button>${p.premium ? "Buy Prompt 💸" : "Copy Prompt 📋"}</button>
  `;
  container.appendChild(div);
});