import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const WritePage = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [content, setContent] = useState("");

  const handlePublish = () => {
    if (!title || !content) {
      alert("Missing fields: Please add a title and content before publishing");
      return;
    }

    alert("Story published! Your story has been published successfully");

    setTimeout(() => {
      navigate("/");
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-gray-200 bg-white">
        <div className="max-w-[1336px] mx-auto px-6 flex items-center justify-between h-[57px]">
          <div className="flex items-center gap-4">
            <button
              onClick={() => navigate("/")}
              className="w-[45px] h-[45px] rounded-full bg-black flex justify-center items-center"
            >
              <span className="text-white font-serif text-2xl font-bold">OD</span>
            </button>

            <span className="text-sm text-gray-500">
              Draft in {localStorage.getItem("authorName") || "Guest"}
            </span>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={handlePublish}
              className="rounded-full bg-black text-white text-sm px-5 py-2 font-medium hover:bg-gray-800 transition"
            >
              Publish
            </button>

            <button className="p-2 hover:bg-gray-100 rounded-full transition">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 text-gray-600"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm6 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm6 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Editor Section */}
      <div className="max-w-[680px] mx-auto px-6 py-16">
        <textarea
          className="w-full font-serif text-[42px] font-bold leading-[52px] outline-none border-none resize-none placeholder-gray-400 mb-8"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <textarea
          className="w-full text-[20px] text-gray-600 outline-none border-none resize-none placeholder-gray-400 mb-8"
          placeholder="Subtitle (optional)"
          value={subtitle}
          onChange={(e) => setSubtitle(e.target.value)}
        />

        <textarea
          className="w-full font-serif text-[18px] leading-[32px] text-gray-800 outline-none border-none resize-none placeholder-gray-400 min-h-[500px]"
          placeholder="Tell your story..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      </div>
    </div>
  );
};

export default WritePage;
