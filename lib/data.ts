import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

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
    title: "Graduated B.Tech",
    location: "Sahyadri College, Mangalore",
    description:
      "I graduated as an Engineer in Computer Science and Information Technology. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2018-2022",
  },
  {
    title: "Front-End Developer",
    location: "Geekyants, Bangalore",
    description:
      "Im currently working as a Frontend Developer here since 2 years with experience across all the platforms and frameworks",
    icon: React.createElement(CgWorkAlt),
    date: "2022 - Current",
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
    title: "GeekyAnts",
    description:
      " Developed reusable and well-documented UI components for a popular open-source UI library (20k+ stars on GitHub), demonstrating strong IOS and Android Application development skills.",
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
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "React Native",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Redux",
  "GraphQL",
  "Apollo",
  "Framer Motion",
  "REST API",
  "Expo",
  "Bootstrap",
] as const;
