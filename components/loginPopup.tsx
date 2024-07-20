"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import useStore from "../app/store"

const LoginPopup: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const popupRef = useRef<HTMLDivElement>(null);

  const setLoginTrue = useStore((state) => state.setLoginTrue)
  

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        popupRef.current &&
        !popupRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (
      email === process.env.NEXT_PUBLIC_USERNAME &&
      password === process.env.NEXT_PUBLIC_PASSWORD
    ) {
      setLoginTrue();
      onClose();
    } else {
      setError("Hey, Are you reallly Suhas? 😏");
    }
  };

  return (
    <motion.div
      className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        ref={popupRef}
        className="bg-white p-8 rounded-lg shadow-lg dark:bg-gray-800 w-[25%]"
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.9 }}
      >
        <button
          className="absolute top-2 right-2 text-gray-600 dark:text-gray-300"
          onClick={onClose}
        >
          &times;
        </button>
        <h2 className="text-xl font-bold mb-4 text-gray-700 dark:text-gray-300">
          Login to check DM's 👨🏻‍💻
        </h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        {/* Add your login form here */}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              type="email"
              className="w-full p-2 border border-gray-300 rounded dark:text-black"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Email"
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              className="w-full p-2 border border-gray-300 rounded dark:text-black"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Password"
            />
          </div>
          <button
            type="submit"
            className="bg-gray-700 dark:bg-gray-900 text-white p-2 rounded w-full dark:text-black dark:text-gray-300 font-bold border-[0.5px] tracking-[2px] "
          >
            Login
          </button>
        </form>
      </motion.div>
    </motion.div>
  );
};

export default LoginPopup;
