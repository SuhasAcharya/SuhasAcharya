"use client";
import About from "@/app/main/about";
import Contact from "@/app/main/contact";
import Experience from "@/app/main/experience";
import Intro from "@/app/main/intro";
import Projects from "@/app/main/projects";
import SectionDivider from "@/components/section-divider";
import Skills from "@/app/main/skills";
import useStore from "./store";
import { useEffect } from "react";

export default function Home() {
  const login = useStore((state) => state.login);
  const setLoginFalse = useStore((state) => state.setLoginFalse);


  useEffect(() => {
    setLoginFalse();

    
  },[setLoginFalse])

  return (
    <main className="flex flex-col items-center px-4">
      <Intro />
      <SectionDivider />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Contact />
    </main>
  );
}
