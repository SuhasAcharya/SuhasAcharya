"use client";

import { useRef } from "react";
import Image, { StaticImageData } from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

// imageUrl and size are optional: a project without a screenshot renders as a
// full-width text card instead of the half-text / half-image layout.
type ProjectProps = {
  title: string;
  description: string;
  tags: readonly string[];
  imageUrl?: StaticImageData;
  size?: "small" | "big";
  url?: string;
};

export default function Project({
  title,
  description,
  tags,
  imageUrl,
  size,
  url,
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  const card = (
      <section className={`bg-gray-100 max-w-[44rem] border border-black/5 rounded-lg overflow-hidden relative ${imageUrl ? `sm:pr-8 sm:group-even:pl-8 ${size==="big" ? "sm:h-[28rem]" : "sm:h-[22rem]"}` : ""} hover:bg-gray-200 transition dark:text-white dark:bg-white/10 dark:hover:bg-white/20`}>
        <div className={`pt-4 pb-7 px-5 sm:pt-10 flex flex-col h-full ${imageUrl ? "sm:pl-10 sm:pr-2 sm:max-w-[50%] sm:group-even:ml-[18rem]" : "sm:px-10 sm:pb-10"}`}>
          <h3 className="text-2xl font-semibold">{title}</h3>
          <p className="mt-2 leading-relaxed text-gray-700 dark:text-white/70">
            {description}
          </p>
          <ul className="flex flex-wrap mt-4 gap-2 sm:mt-[20px]">
            {tags.map((tag, index) => (
              <li
                className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70"
                key={index}
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>

        {imageUrl && (
        <Image
          src={imageUrl}
          alt={`${title} screenshot`}
          quality={95}
          className="absolute hidden sm:block top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl
        transition 
        group-hover:scale-[1.04]
        group-hover:-translate-x-3
        group-hover:translate-y-3
        group-hover:-rotate-2

        group-even:group-hover:translate-x-3
        group-even:group-hover:translate-y-3
        group-even:group-hover:rotate-2

        group-even:right-[initial] group-even:-left-40"
        />
        )}
      </section>
  );

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgess,
        opacity: opacityProgess,
      }}
      className="group mb-3 sm:mb-8 last:mb-0"
    >
      {url ? (
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="block"
          aria-label={`Open ${title}`}
        >
          {card}
        </a>
      ) : (
        card
      )}
    </motion.div>
  );
}
