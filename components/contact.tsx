"use client";

import React, { useEffect, useState } from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import SubmitBtn from "./submit-btn";
import toast from "react-hot-toast";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function Contact() {
  const { ref } = useSectionInView("Contact");

  const [formState, setFormState] = useState({ senderEmail: "", message: "" });


  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { senderEmail, message } = formState;

    const res = await fetch("/api/sendEmail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ senderEmail, message }),
    });

    const data = await res.json();

    if (res.status === 201) {
      toast.success("Message sent successfully!");
      setFormState({ senderEmail: "", message: "" });
    } else {
      toast.error(data.message || "Failed to send message");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <SectionHeading>Contact me</SectionHeading>

      <p className="text-gray-700 -mt-6 dark:text-white/80">
        Please contact me directly at{" "}
        <a className="underline" href="mailto:suhasacharya2000@gmail.com">
          suhasacharya2000@gmail.com / +91 8971074929
        </a>{" "}
        or <br />
        <span className="text-gray-700 dark:text-white/80">Write your message below</span>
      </p>

      <form
        className="mt-10 flex flex-col dark:text-black gap-y-2"
        onSubmit={handleSubmit}
      >
        <input
          className="h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          name="senderEmail"
          type="email"
          required
          maxLength={500}
          placeholder="Your email"
          value={formState.senderEmail}
          onChange={handleChange}
        />
        <textarea
          className="h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          name="message"
          placeholder="Your message"
          required
          maxLength={5000}
          value={formState.message}
          onChange={handleChange}
        />
        <SubmitBtn />
      </form>

    </motion.section>
  );
}
