"use client";
import React, { useEffect, useState } from "react";

const Messages = () => {
  const [messages, setMessages] = useState<any[]>([]);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const res = await fetch("/api/getMessages");
        if (!res.ok) {
          throw new Error("Failed to fetch messages");
        }
        const data = await res.json();
        setMessages(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchMessages();
  }, []);



  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-2xl font-bold mb-4">Messages</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {messages.map((item, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg p-4 border border-gray-200 flex flex-col justify-start items-start h-[18rem] w-48rem"
          >
            <p className="text-lg font-semibold text-gray-800">{item.senderEmail}</p>
            <p className="text-gray-600 mt-1 text-center">{item.message}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Messages;
