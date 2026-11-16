import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";
import dhanvittaImg from "@/public/dhanvitta.jpg";
import nammabhasheImg from "@/public/nammabhashe.jpg";
import synkdripImg from "@/public/synkdrip.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },

] as const;

export const experiencesData = [
  {
    title: "Bachelor of Engineering in Computer Science",
    location: "Sahyadri College of Engineering and Management, Mangaluru",
    description:
      "I graduated with a Bachelor of Engineering in Computer Science and immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2018 - 2022",
  },
  {
    title: "Frontend Developer",
    location: "GeekyAnts, Bangalore",
    description:
      "I authored core reusable UI components for NativeBase, an open-source cross-platform component library (20K+ GitHub stars, 50K+ dependents) for iOS, Android and web. I engineered a UK maid-booking platform and a real-estate portal with role-based access control (RBAC), live chat, and Hasura GraphQL with Apollo Client. I also built a custom Chrome extension for NFT token extraction and led internal engineering seminars on Zustand state management.",
    icon: React.createElement(CgWorkAlt),
    date: "Aug 2022 - Aug 2024",
  },
  {
    title: "Solution Engineer",
    location: "GammaStack",
    description:
      "I architected and delivered 3 high-traffic online casino gaming platforms in the iGaming domain, supporting 10K+ concurrent players at peak, using Next.js, React, Redux and TypeScript. I engineered real-time multiplayer game state with WebSockets and mobile-first responsive interfaces, and cut page load time from 8s to 3s by shrinking the initial JavaScript bundle and deferring non-critical game assets. I led end-to-end client engagements from technical specification to production rollout, meeting strict SLA requirements.",
    icon: React.createElement(CgWorkAlt),
    date: "Aug 2024 - Feb 2026",
  },
  {
    title: "Software Engineer II",
    location: "XCaliber Health",
    description:
      "I lead a distributed team of 5+ engineers and interns building the enterprise Web Control Plane platform, used by all 50+ XCaliber Health customer organizations to manage healthcare operations and integrated with major U.S. Electronic Health Record (EHR) systems. I drive frontend architecture with Next.js, React and TypeScript, and reduced page load time by ~80% by streamlining API data fetching and eliminating redundant re-renders in data-heavy views. I also contribute to backend services and workflow orchestration with Go, Java and Temporal, build features for AgentX, an AI-powered medical voice agent that handles patient calls, appointment booking and medication-related workflows, and automate zero-downtime production deployments with Argo CD and GitHub Actions.",
    icon: React.createElement(CgWorkAlt),
    date: "Feb 2026 - Present",
  },
  // {
  //   title: "Full-Stack Developer",
  //   location: "Houston, TX",
  //   description:
  //     "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
  //   icon: React.createElement(FaReact),
  //   date: "2021 - present",
  // },
] as const;

export const projectsData = [
  {
    title: "SynkDrip",
    description:
      "My startup — premium t-shirts and hoodies with a scannable QR on the back that you control. Wearers set the QR to music, work, or anything they want people to find. Live at synkdrip.com.",
    tags: ["Startup", "E-commerce", "QR Commerce"],
    imageUrl: synkdripImg,
    size: "big",
    url: "https://synkdrip.com/",
  },
  {
    title: "Dhanvitta",
    description:
      "A live fintech learning and market analytics platform. I co-architected it as an initial core developer, and it grew to $100K in revenue within 7 months of launch. I built real-time Nifty 50 and Bank Nifty sentiment analytics (bullish/bearish) and interactive charts.",
    tags: ["Fintech", "Real-time Analytics", "Data Visualization"],
    imageUrl: dhanvittaImg,
    size: "big",
  },
  {
    title: "Namma Bhashe",
    description:
      "A live AI-powered Kannada language trainer. A conversational AI app built with the Google Gemini API, Web Speech API and Text-to-Speech, with bilingual speech recognition, AI grammar correction and animated real-time feedback.",
    tags: ["Generative AI", "Gemini API", "Web Speech API", "Framer Motion"],
    imageUrl: nammabhasheImg,
    size: "big",
  },
  {
    title: "NativeBase",
    description:
      "Authored core reusable UI components for NativeBase at GeekyAnts, an open-source cross-platform component library (20K+ GitHub stars, 50K+ dependents) for iOS, Android and web.",
    tags: ["React", "React Native", "CSS", "Tailwind", "Redux"],
    imageUrl: corpcommentImg,
    size:"small"
  },
  {
    title: "Landlord-Tenant Hub",
    description:
      " Built the user-facing front-end of a Next.js platform for real estate management (UK market), showcasing expertise in building responsive web applications.",
    tags: ["Next js","Tailwind CSS","Redux Toolkit","Redux Saga","Redux Persist","REST Api"],
    imageUrl: rmtdevImg,
    size:"small"
  },
  {
    title: "Maid Booking Platform",
    description:
      "Led the front-end development team from scratch, utilizing Next.js to build a complex maid booking platform (UK). This demonstrates leadership in managing a Next.js project, building a user-centric interface, and taking ownership from initial concept to completion.",
    tags: ["Next Js 14", "Tailwind CSS","Redux Toolkit","GraphQl","Apollo Client"],
    imageUrl: wordanalyticsImg,
    size:"big"
  },
] as const;

export const skillsData = [
  {
    category: "Languages",
    skills: [
      "TypeScript",
      "JavaScript (ES6+)",
      "Go",
      "Java",
      "HTML5",
      "CSS3",
      "SQL",
    ],
  },
  {
    category: "Frontend & Mobile",
    skills: [
      "React",
      "Next.js",
      "React Native",
      "Redux Toolkit",
      "Redux Saga",
      "Zustand",
      "Tailwind CSS",
      "Framer Motion",
      "Chart.js",
      "Responsive Design",
      "Web Performance Optimization",
      "Chrome Extensions",
      "Expo",
      "Bootstrap",
    ],
  },
  {
    category: "Backend & APIs",
    skills: [
      "Node.js",
      "Temporal",
      "GraphQL",
      "Apollo Client",
      "Hasura",
      "REST APIs",
      "WebSockets",
      "Supabase",
      "MongoDB",
    ],
  },
  {
    category: "Testing",
    skills: ["Jest", "Unit Testing"],
  },
  {
    category: "DevOps & Cloud",
    skills: [
      "CI/CD",
      "GitHub Actions",
      "Argo CD",
      "Docker",
      "Git",
      "Google Cloud (GCP)",
      "AWS",
    ],
  },
  {
    category: "AI & LLM",
    skills: [
      "Generative AI",
      "LLM Integration",
      "Google Gemini API",
      "AI Voice Agents",
      "Speech Recognition",
      "Text-to-Speech (TTS)",
    ],
  },
] as const;
