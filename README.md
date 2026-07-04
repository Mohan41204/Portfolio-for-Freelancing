# Mohankumar U — Freelance Portfolio

A modern, responsive single-page portfolio for my freelance web & app
development journey. Built with **React + Vite**.

## ✨ Sections

- **Hero** — intro, animated typewriter role, live code card, quick stats
- **Skills** — frontend, backend, databases, app dev, DevOps & tools
- **Services** — Web Development, App Development, Backend & Deployment
- **Pricing** — Basic / Medium / Premium tiers (one-tap WhatsApp inquiry)
- **Contact** — email, phone, WhatsApp, location + working contact form

## 🛠 Tech

React 19 · Vite · CSS (custom design system, light/dark) · Zero UI dependencies.

## 🚀 Run locally

```bash
npm install      # first time only
npm run dev      # start dev server (http://localhost:5173)
npm run build    # production build → /dist
npm run preview  # preview the production build
```

## 📝 Editing content

All text (name, skills, services, pricing, contact info) lives in one file:

```
src/data.js
```

Change a value there and it updates across the whole site — no need to dig
through components.

## 📂 Project structure

```
src/
├── data.js                 # ← all your content lives here
├── App.jsx                 # page composition + scroll reveal
├── index.css               # design tokens & global styles
├── App.css                 # component styles
└── components/
    ├── Navbar.jsx
    ├── Hero.jsx
    ├── Skills.jsx
    ├── Services.jsx
    ├── Pricing.jsx
    ├── Contact.jsx
    └── Footer.jsx
```

---

Built by Mohankumar U · [GitHub](https://github.com/mohan41204) ·
[LinkedIn](https://www.linkedin.com/in/mohandevop)
