"use client";

import React from "react";
import SectionHeading from "../../components/section-heading";
import { skillsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

export default function Skills() {
  const { ref } = useSectionInView("Skills");

  return (
    <section
      id="skills"
      ref={ref}
      className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
    >
      <SectionHeading>My skills</SectionHeading>
      {skillsData.map((group) => (
        <div key={group.category} className="mb-10 last:mb-0">
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-500 dark:text-white/50">
            {group.category}
          </h3>
          <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
            {group.skills.map((skill, index) => (
              <motion.li
                className="bg-white borderBlack rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80"
                key={skill}
                variants={fadeInAnimationVariants}
                initial="initial"
                whileInView="animate"
                viewport={{
                  once: true,
                }}
                custom={index}
              >
                {skill}
              </motion.li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}
