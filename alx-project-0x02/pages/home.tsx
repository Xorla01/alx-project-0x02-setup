import { type HomeProps } from "@/interfaces";
import Card from "@/components/common/Card";
import PostModal from "@/components/common/PostModal";
import Header from "@/components/layout/Header";
import React, { useState } from "react";

const Home: React.FC<HomeProps> = ({ title = "" }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [posts, setPosts] = useState<{ title: string; content: string }[]>([]);

  const handleAddPost = (post: { title: string; content: string }) => {
    setPosts([...posts, post]);
  };

  return (
    <div className="flex flex-col items-center p-4">
        <Header title="My Next.js App" logo="🚀" />

        <h1 className="font-bold text-2xl text-center mb-6">Feeds</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 m-6 p-2.5 text-center">
            <Card
            title="Card Type One"
            content="This card is rendered automatically on this Next.js app. Please rate my first card."
            />
            <Card
            title="Card Type Two"
            content="This card is rendered automatically on this Next.js app. Please rate my first card."
            />
      </div>

      <button
        onClick={() => setIsModalOpen(true)}
        className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
      >
        Add Post
      </button>

      <PostModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleAddPost}
      />

      <div className="mt-6 max-w-md w-full">
        {posts.map((post, i) => (
          <div
            key={i}
            className="border w-full sm:w-[300px] md:w-[400px] lg:w-[500px] h-auto p-4 rounded 
            mb-5 hover:scale-105 transition-transform duration-300 ease-in-out"
          >
            <h3 className="font-bold text-lg break-words">{post.title}</h3>
            <p className="break-words whitespace-normal">{post.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;