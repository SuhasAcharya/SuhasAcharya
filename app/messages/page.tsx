import React, { useEffect, useState } from "react";
import useStore from "../store";
import { useRouter } from "next/navigation";
import { MdCancel } from "react-icons/md";
import toast from "react-hot-toast";

const Messages = () => {
  const [messages, setMessages] = useState<any[]>([]);
  const login = useStore((state) => state.login);
  const router = useRouter();
  const setLoginFalse = useStore((state) => state.setLoginFalse);

  useEffect(() => {
    const fetchMessages = async () => {
      if (!login) {
        router.push("/");
        return;
      }

      try {
        const res = await fetch("/api/getMessages", {
          headers: {
            "Cache-Control": "no-cache", 
            "Pragma": "no-cache", 
            "Expires": "0", 
          },
        });

        if (res.status === 304) {
          console.log("No new messages.");
          return; 
        }

        if (!res.ok) {
          throw new Error("Failed to fetch messages");
        }

        const data = await res.json();
        setMessages(data);
      } catch (error) {
        console.error("Error fetching messages:", error);
      }
    };

    fetchMessages();
  }, [login, router]);

  const handleLogout = () => {
    setLoginFalse();
    router.push("/");
  };

  const handleDelete = async (id: string) => {
    try {
      const res = await fetch("/api/deleteMessages", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id }),
      });

      if (res.ok) {
        setMessages((prevMessages) =>
          prevMessages.filter((msg) => msg._id !== id)
        );
        toast.success("Message deleted!");
      } else {
        const errorResponse = await res.json();
        console.error("Failed to delete message:", errorResponse.message);
      }
    } catch (error) {
      console.error(
        "Error deleting message:",
        error instanceof Error ? error.message : error
      );
    }
  };

  return (
    <div className="w-full p-6 flex flex-col fixed top-2 gap-y-6">
      <div className="flex w-full justify-between items-center">
        <h1 className="text-2xl font-bold">
          Welcome Back, Suhas. Here are your Messages! 👀
        </h1>
        <button
          type="submit"
          className="bg-red-700 p-2 text-white rounded-md w-[13rem] dark:text-black dark:text-gray-300 font-bold border-[0.5px] tracking-[2px]"
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>
      <div
        className="flex-1 overflow-y-auto"
        style={{ maxHeight: "calc(100vh - 150px)" }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {messages.map((item) => (
            <div
              key={item._id}
              className="bg-white shadow-md rounded-lg p-4 border border-gray-200 flex flex-col justify-start items-start h-[18rem] w-[27rem]"
            >
              <MdCancel
                onClick={() => handleDelete(item._id)}
                className="relative left-[100%] bottom-7 text-red-700 cursor-pointer h-7 w-7"
              />
              <p className="text-lg font-semibold text-gray-800">
                {item.senderEmail}
              </p>
              <p className="text-gray-600 mt-1 text-center">{item.message}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Messages;
