"use client";

import React from "react";
import SectionHeading from "../../components/section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        After graduating with a Bachelor of Engineering in{" "}
        <span className="font-medium">Computer Science</span>, I decided to pursue my
        passion for programming. I learnt{" "}
        <span className="font-medium">full-stack web development on my own</span>.
        Today I am a{" "}
        <span className="font-medium">Senior Frontend Engineer with 4+ years</span>{" "}
        of experience building scalable, high-performance web and mobile
        applications. I currently lead a team of 5+ engineers at{" "}
        <span className="font-medium">XCaliber Health</span> on an enterprise
        healthcare platform used by 50+ healthcare organizations.
      </p>
      <p className="mb-3">
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. My core stack
        is{" "}
        <span className="font-medium">
          React, Next.js, TypeScript and React Native
        </span>
        . I also work across the full stack with Go, Java, Node.js, Temporal
        and GraphQL, and integrate LLMs into{" "}
        <span className="font-medium">real-time generative AI applications</span>.
        I am always looking to learn new technologies. I am currently looking
        for a <span className="font-medium">full-time position</span> as a
        senior frontend engineer.
      </p>


    </motion.section>
  );
}
