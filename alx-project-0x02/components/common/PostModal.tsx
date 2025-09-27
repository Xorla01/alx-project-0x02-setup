import { type PostModalProps } from "@/interfaces";
import React, { useState } from "react";

const PostModal: React.FC<PostModalProps> = ({ isOpen, onClose, onSubmit }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  if (!isOpen) return null; 

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!title.trim() || !content.trim()) {
      alert("Please fill in both the title and content.");
      return;
    }

    onSubmit({ title, content });
    setTitle("");
    setContent("");
    onClose(); 
  };

  return (
    <div
      className="
        fixed inset-0 bg-black bg-opacity-50
        flex items-center justify-center
        z-50
      "
    >
      <div className="bg-white p-6 rounded-md shadow-lg w-[90%] max-w-md flex flex-col gap-4">
        <h2 className="text-xl font-bold text-center">Create a New Post</h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Enter post title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border p-2 rounded w-full text-center"
          />
          
          <textarea
            placeholder="Enter post content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="border p-2 rounded w-full h-32 resize-none text-center"
          />

          <div className="flex justify-center gap-4">
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Post
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PostModal;
