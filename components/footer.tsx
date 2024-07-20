"use client";
import React from "react";
import useStore from "../app/store";

export default function Footer() {
  const login = useStore((state) => state.login);
  return (
    <>
      {login ? null : (
        <footer className="mb-10 px-4 text-center text-gray-500">
          <p className="text-xs">
            <span className="font-semibold">About this website:</span> built
            with React & Next.js (App Router & Server Actions), TypeScript,
            Tailwind CSS, Framer Motiona and Vercel hosting.
          </p>
        </footer>
      )}
    </>
  );
}
