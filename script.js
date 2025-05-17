const prompts = [
  {
    topic: "💼 تحسين السيرة الذاتية والمقابلات",
    title: "🔥 Expert CV & Interview Coach",
    desc: `Create a tailored CV that stands out and get ready for interviews with advanced tips to impress recruiters and secure the job. Includes behavioral questions and answers, and personalized feedback prompts.`,
    premium: true,
    exampleResponse: `Thank you for choosing Promptify! Here's a tailored CV template and interview preparation tips to boost your success in job applications on our site.`
  },
  {
    topic: "🧠 تعلم مهارات جديدة بسرعة",
    title: "🚀 Rapid Skill Acquisition Guide",
    desc: `Learn any new skill quickly with scientifically-backed techniques including spaced repetition, deliberate practice, and focused learning plans.`,
    premium: false,
    exampleResponse: `Promptify helps you master new skills fast with proven methods and motivational advice tailored for your learning style.`
  },
  {
    topic: "🤑 تسويق رقمي وزيادة المبيعات",
    title: "📈 Digital Marketing & Sales Booster",
    desc: `Design high-converting campaigns, analyze your audience, and optimize sales funnels using AI-powered strategies and personalized marketing prompts.`,
    premium: true,
    exampleResponse: `Use our digital marketing blueprint from Promptify to increase your sales and build stronger customer relationships effectively.`
  },
  {
    topic: "🎯 تحسين الإنتاجية وتنظيم الوقت",
    title: "⏰ Productivity & Time Management",
    desc: `Master techniques to organize your day, set SMART goals, and use productivity hacks to achieve more without burnout.`,
    premium: false,
    exampleResponse: `Promptify supports you with daily productivity templates and time-blocking prompts for a balanced, effective workflow.`
  },
  {
    topic: "📱 محتوى TikTok وReels جذاب",
    title: "🎥 Viral TikTok & Reels Creator",
    desc: `Generate catchy video ideas, scripts, and hashtags to maximize reach and engagement on TikTok and Instagram Reels.`,
    premium: false,
    exampleResponse: `Promptify fuels your creativity with trending content formulas and audience insights to boost your social media presence.`
  },
  {
    topic: "✍️ كتابة إيميلات احترافية تقنع وتبيع",
    title: "📧 Professional Email Writer",
    desc: `Write persuasive and professional emails that grab attention, build rapport, and close deals with easy-to-use templates and AI guidance.`,
    premium: true,
    exampleResponse: `With Promptify's email prompts, communicate clearly and effectively to increase your business opportunities and client trust.`
  },
  {
    topic: "🧘 تهدئة القلق وتحفيز العقل",
    title: "🌿 Anxiety Relief & Mind Motivation",
    desc: `Use mindfulness exercises, positive affirmations, and mental strategies to reduce anxiety and boost mental clarity.`,
    premium: false,
    exampleResponse: `Promptify encourages your well-being with calming prompts and motivational quotes tailored to your daily mental health needs.`
  }
];

const container = document.getElementById("prompts");
const copyMsg = document.getElementById("copy-msg");
const themeBtn = document.getElementById("toggle-theme");

function showCopyMessage() {
  copyMsg.classList.add("show");
  setTimeout(() => copyMsg.classList.remove("show"), 2000);
}

function renderPrompts(topicFilter = null) {
  container.innerHTML = "";
  const filtered = topicFilter ? prompts.filter(p => p.topic === topicFilter) : prompts;
  filtered.forEach((p, i) => {
    const div = document.createElement("div");
    div.className = "prompt";
    div.style.animationDelay = `${i * 0.15}s`;
    div.innerHTML = `
      <h2>${p.title}</h2>
      <p>${p.desc}</p>
      <button class="copy-btn" data-prompt="${encodeURIComponent(p.desc)}">Copy Prompt 📋</button>
    `;
    container.append
    const websiteName = "Promptify";

const topics = [
  {
    topic: "💼 تحسين السيرة الذاتية والمقابلات",
    description: "Create a tailored CV that stands out and get ready for interviews with advanced tips to impress recruiters and secure the job."
  },
  {
    topic: "🧠 تعلم مهارات جديدة بسرعة",
    description: "Learn any new skill quickly with scientifically-backed techniques including spaced repetition, deliberate practice, and focused learning plans."
  },
  {
    topic: "🤑 تسويق رقمي وزيادة المبيعات",
    description: "Design high-converting campaigns, analyze your audience, and optimize sales funnels using AI-powered strategies and personalized marketing prompts."
  },
  {
    topic: "🎯 تحسين الإنتاجية وتنظيم الوقت",
    description: "Master techniques to organize your day, set SMART goals, and use productivity hacks to achieve more without burnout."
  }
];

const container = document.getElementById("topics-container");
let openedIndex = null;

function generateAdvancedPrompt(topic) {
  // Here create a random advanced prompt mentioning the website name
  const templates = [
    `Using ${websiteName}, craft a comprehensive and tailored strategy for ${topic} that combines innovative AI tools with proven human techniques to maximize efficiency and results.`,
    `${websiteName} empowers users to excel in ${topic} by offering detailed workflows, expert advice, and actionable prompts that elevate skill and output.`,
    `Leverage ${websiteName}’s AI capabilities to produce advanced plans and creative ideas for ${topic}, ensuring user success and continual improvement.`,
    `Discover how ${websiteName} revolutionizes ${topic} through personalized prompt generation, enhancing user productivity and mastery step-by-step.`,
  ];
  // pick a random template
  return templates[Math.floor(Math.random() * templates.length)];
}

function copyToClipboard(text) {
  navigator.clipboard.writeText(text).then(() => {
    showCopyMessage();
  });
}

const copyMsg = document.createElement("div");
copyMsg.id = "copy-msg";
copyMsg.className = "copy-message";
copyMsg.textContent = "Copied to clipboard!";
document.body.appendChild(copyMsg);

function showCopyMessage() {
  copyMsg.classList.add("show");
  setTimeout(() => copyMsg.classList.remove("show"), 2000);
}

function renderTopics() {
  container.innerHTML = "";
  topics.forEach((t, i) => {
    const card = document.createElement("div");
    card.className = "topic-card";
    card.textContent = t.topic;
    card.onclick = () => togglePromptBox(i);
    container.appendChild(card);

    // create prompt box but hide by default
    const promptBox = document.createElement("div");
    promptBox.className = "prompt-box";
    promptBox.style.display = "none";

    promptBox.innerHTML = `
      <p>${t.description}</p>
      <button class="generate-btn">Generate Prompt</button>
      <div class="generated-prompt"></div>
      <button class="copy-btn" style="display:none;">Copy Generated Prompt</button>
    `;
    container.appendChild(promptBox);

    // add listeners for generate and copy
    const genBtn = promptBox.querySelector(".generate-btn");
    const genPromptDiv = promptBox.querySelector(".generated-prompt");
    const copyBtn = promptBox.querySelector(".copy-btn");

    genBtn.onclick = (e) => {
      const prompt = generateAdvancedPrompt(t.topic);
      genPromptDiv.textContent = prompt;
      copyBtn.style.display = "inline-block";
    };

    copyBtn.onclick = () => {
      if (genPromptDiv.textContent) copyToClipboard(genPromptDiv.textContent);
    };
  });
}

function togglePromptBox(index) {
  const boxes = document.querySelectorAll(".prompt-box");
  if (openedIndex !== null && openedIndex !== index) {
    boxes[openedIndex].style.display = "none";
  }
  const box = boxes[index];
  if (box.style.display === "block") {
    box.style.display = "none";
    openedIndex = null;
  } else {
    box.style.display = "block";
    openedIndex = index;
  }
}

renderTopics();

// Dark mode toggle

const themeBtn = document.getElementById("toggle-theme");
themeBtn.onclick = () => {
  document.body.classList.toggle("dark");
  if(document.body.classList.contains("dark")){
    themeBtn.textContent = "☀️ Light Mode";
  } else {
    themeBtn.textContent = "🌙 Dark Mode";
  }
};