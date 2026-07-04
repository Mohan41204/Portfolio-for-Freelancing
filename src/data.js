// Central place for all portfolio content.
// Edit values here to update the whole site.

export const profile = {
  name: "Mohankumar U",
  firstName: "Mohankumar",
  role: "Web & App Developer",
  subroles: ["Web Developer", "App Developer", "DevOps Engineer"],
  tagline:
    "I build fast, modern websites and mobile apps — and deploy them to the cloud. Turning ideas into reliable, scalable products.",
  location: "Kallakurichi, Tamil Nadu, India",
  email: "mohan.webdevop@gmail.com",
  phone: "+91 7667021761",
  // International format without symbols for wa.me links
  whatsapp: "917667021761",
  linkedin: "https://www.linkedin.com/in/mohandevop",
  github: "https://github.com/mohan41204",
};

export const stats = [
  { value: "10+", label: "UI Components Built" },
  { value: "3+", label: "Projects Shipped" },
  { value: "5+", label: "Cloud Resources Managed" },
  { value: "24/7", label: "Uptime Mindset" },
];

// Each skill group is one card in the Skills section.
export const skillGroups = [
  {
    title: "Frontend",
    icon: "🎨",
    skills: ["HTML", "CSS", "JavaScript", "React.js", "Responsive Design"],
  },
  {
    title: "Backend",
    icon: "⚙️",
    skills: ["Node.js", "Python", "REST APIs"],
  },
  {
    title: "Databases",
    icon: "🗄️",
    skills: ["SQL", "PostgreSQL"],
  },
  {
    title: "App Development",
    icon: "📱",
    skills: ["Flutter", "Android Studio"],
  },
  {
    title: "DevOps & Cloud",
    icon: "☁️",
    skills: ["Azure", "Docker", "Kubernetes", "Terraform"],
  },
  {
    title: "Tools & Workflow",
    icon: "🔧",
    skills: ["Git", "GitHub", "CI/CD", "Linux"],
  },
];

export const services = [
  {
    icon: "🌐",
    title: "Web Development",
    imgSrc:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=800&auto=format&fit=crop",
    description:
      "Responsive, high-performance websites and web apps built with React — clean code, fast loading, and pixel-perfect on every device.",
    features: [
      "Responsive landing pages & sites",
      "React.js single-page apps",
      "SEO-friendly & accessible markup",
      "Clean, maintainable frontend code",
    ],
  },
  {
    icon: "📱",
    title: "App Development",
    imgSrc:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=800&auto=format&fit=crop",
    description:
      "Cross-platform mobile apps with Flutter and native Android with Android Studio — one codebase, Android & iOS ready.",
    features: [
      "Cross-platform apps with Flutter",
      "Native Android with Android Studio",
      "Smooth, modern UI/UX",
      "API & database integration",
    ],
  },
  {
    icon: "🚀",
    title: "Backend & Deployment",
    imgSrc:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop",
    description:
      "Robust backends with Node.js & Python, PostgreSQL databases, and automated cloud deployment with Docker & CI/CD.",
    features: [
      "Node.js / Python backends",
      "PostgreSQL database design",
      "Docker containerization",
      "CI/CD + cloud deployment",
    ],
  },
];

export const pricing = [
  {
    name: "Basic",
    price: "₹2,999",
    period: "starting price",
    description: "Perfect for personal sites and small business presence.",
    features: [
      "1–3 page responsive website",
      "Mobile-friendly design",
      "Contact form / WhatsApp",
      "Basic design",
      "Delivery in 3–5 days",
    ],
    popular: false,
    cta: "Get Started",
  },
  {
    name: "Medium",
    price: "₹7,999",
    period: "starting price",
    description: "For growing businesses that need more power and pages.",
    features: [
      "Up to 7 custom pages",
      "React.js web app",
      "Backend + database (Node.js/PostgreSQL)",
      "Admin / dashboard panel",
      "Deployment",
      "Delivery in 1–2 weeks",
    ],
    popular: true,
    cta: "Most Popular",
  },
  {
    name: "Premium",
    price: "₹14,999",
    period: "starting price",
    description: "Full-stack web / mobile app with everything included.",
    features: [
      "Multi-page web app / mobile app",
      "Flutter / Android app",
      "Full backend & REST API",
      "Docker + CI/CD pipeline",
      "Cloud deployment & support",
      "Priority support + revisions",
    ],
    popular: false,
    cta: "Let's Talk",
  },
];
