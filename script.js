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

const smartPrompts = [
  `You are ChatGPT, an advanced AI language model. Your task is to assist the user by generating a detailed, well-structured response for the topic given below. Your response should be clear, concise, and informative. Avoid repetition and maintain a friendly tone. Use examples where applicable.

Topic: The impact of artificial intelligence on modern education.

Instructions:
1. Introduce the topic with background information.
2. Discuss key benefits AI brings to education.
3. Address potential challenges and ethical concerns.
4. Provide future outlook and possible improvements.
5. Conclude with a summary and encouraging remarks.`,
  
  `You are ChatGPT, a professional copywriter. Generate a compelling marketing email for a new AI-powered productivity app aimed at small businesses. Include a catchy subject line, introduction, benefits, call-to-action, and closing.

Remember to keep the tone enthusiastic and engaging, and emphasize how the app simplifies daily tasks and boosts efficiency.`,
  
  `You are ChatGPT, a creative writing assistant. Help the user write a suspenseful opening scene for a thriller novel. Describe the setting, introduce the main character with a hint of mystery, and set the mood using vivid imagery and emotional cues. Keep it gripping and leave readers wanting more.`,

  `You are ChatGPT, an expert career advisor. Provide detailed tips and strategies for recent graduates entering the job market in tech industries. Cover resume building, networking, interview preparation, and continuous learning.`,

  `You are ChatGPT, a language tutor. Create a 5-day beginner's lesson plan to learn conversational Spanish. Include daily goals, topics, and example phrases.`,

  `You are ChatGPT, a coding mentor. Write a step-by-step tutorial for beginners on how to create a simple to-do list app using JavaScript, HTML, and CSS. Include explanations for each part of the code.`,

  `You are ChatGPT, a nutrition expert. Suggest a balanced weekly meal plan for a vegetarian aiming to increase protein intake. Include recipes and nutritional tips.`,

  `You are ChatGPT, a personal finance advisor. Outline a budget plan for someone looking to save money effectively over 6 months. Include practical steps and mindset advice.`,

  `You are ChatGPT, a travel guide. Create an itinerary for a 3-day trip to Paris, including top attractions, dining recommendations, and tips for tourists.`,

  `You are ChatGPT, a mindfulness coach. Provide daily mindfulness exercises and meditation techniques to reduce stress and improve focus over a month.`,

  `You are ChatGPT, a health consultant. Explain the benefits of regular exercise on mental health and suggest an easy weekly workout routine.`,

  `You are ChatGPT, a history teacher. Summarize the causes and consequences of the Industrial Revolution in a detailed essay.`,

  `You are ChatGPT, a movie critic. Write a review of the latest blockbuster, including plot summary, acting, direction, and overall impression.`,

  `You are ChatGPT, an environmentalist. Discuss the importance of renewable energy and practical ways individuals can contribute to sustainability.`,

  `You are ChatGPT, a motivational speaker. Compose an inspiring speech for graduates about embracing challenges and lifelong learning.`,

  `You are ChatGPT, a social media strategist. Suggest a month-long content plan for a startup launching a new eco-friendly product.`,

  `You are ChatGPT, a UX designer. Explain key principles of user-centered design and how they improve digital products.`,

  `You are ChatGPT, an event planner. Detail a checklist and timeline for organizing a successful virtual conference.`,

  `You are ChatGPT, a data scientist. Describe the basics of machine learning and its applications in everyday life.`,

  `You are ChatGPT, a cybersecurity expert. Provide best practices for protecting personal data online and avoiding scams.`
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

const generateBtn = document.getElementById("generateBtn");
const generatedPrompt = document.getElementById("generatedPrompt");

generateBtn.addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * smartPrompts.length);
  const prompt = smartPrompts[randomIndex];
  generatedPrompt.textContent = prompt;
  generatedPrompt.scrollTop = 0;
});
