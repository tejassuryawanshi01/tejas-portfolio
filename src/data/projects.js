const projects = [
  {
    id: 1,
    featured: true,

    title: "MediPulse AI",

    category: "Generative AI",
    filter: "GenAI",

    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Clerk",
      "Neon PostgreSQL",
      "Drizzle ORM",
      "OpenRouter",
      "GPT-4o",
      "Gemini",
      "Llama",
      "Vapi AI",
      "Tesseract OCR",
    ],

    image: "/projects/medipulse.webp",

    github: "",

    live: "",

    status: "Completed",

    description:
      "AI-powered healthcare platform featuring AI doctor agents, intelligent medical consultations, OCR-based medical report analysis, voice assistance, and nearby doctor recommendations.",
  },

  {
    id: 2,
    featured: false,

    title: "Stress Detection System",

    category: "Artificial Intelligence",
    filter: "AI",

    technologies: [
      "JavaScript",
      "MediaPipe Face Mesh",
      "Chart.js",
      "HTML",
      "CSS",
    ],

    image: "/projects/stress-detection.webp",

    github:
      "https://github.com/tejassuryawanshi01/AI-Stress-Detection-System-Mediapipe",

    live: "",

    status: "Completed",

    description:
      "Real-time AI-based stress detection system that analyzes facial landmarks and facial movements using MediaPipe Face Mesh.",
  },

  {
    id: 3,
    featured: false,

    title: "Fake News Detection",

    category: "Machine Learning",
    filter: "ML",

    technologies: [
      "Python",
      "Streamlit",
      "Scikit-learn",
      "TF-IDF",
      "Logistic Regression",
      "NLTK",
      "Pandas",
    ],

    image: "/projects/fake-news.webp",

    github:
      "https://github.com/tejassuryawanshi01/Fake-News-Detection-using-ml",

    live: "",

    status: "Completed",

    description:
      "Machine Learning application that detects fake news articles using TF-IDF vectorization, Logistic Regression, and Natural Language Processing.",
  },

  {
    id: 4,
    featured: false,

    title: "AI ChatBot",

    category: "Generative AI",
    filter: "GenAI",

    technologies: ["Python", "OpenAI API", "GPT-4.1 Mini", "LLM"],

    image: "/projects/chatbot.webp",

    github: "",

    live: "",

    status: "Completed",

    description:
      "LLM-powered conversational chatbot built using the OpenAI API with contextual multi-turn conversations.",
  },

  {
    id: 5,
    featured: false,

    title: "VP Photography",

    category: "Web Development",
    filter: "Web",

    technologies: [
      "React",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "shadcn/ui",
      "Lovable AI",
    ],

    image: "/projects/vp-photography.webp",

    github: "https://github.com/tejassuryawanshi01/vpphotography",

    live: "https://vpphotography.lovable.app",

    status: "Completed",

    description:
      "Modern photography portfolio website built using React and AI-assisted development workflows.",
  },

  {
    id: 6,
    featured: false,

    title: "Wildlife Sanctuary Website",

    category: "Web Development",
    filter: "Web",

    technologies: ["HTML", "CSS", "JavaScript", "PHP", "Bootstrap"],

    image: "/projects/wildlife.webp",

    github:
      "https://github.com/tejassuryawanshi01/Final-project-wildlife-website",

    live: "",

    status: "Completed",

    description:
      "Wildlife information portal developed using PHP and Bootstrap, featuring animal categories and conservation awareness.",
  },
];
export default projects;
