import { HomeProps } from "@/interfaces";
import Card from "@/components/common/Card";
import PostModal from "@/components/common/PostModal";
import React, { useState } from "react";

const Home: React.FC<HomeProps> =({ title="" }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [posts, setPosts] = useState<{ title: String; content: string}[]>([]);

    const handleAddPost = (post: { title: string; content: string }) => {
        setPosts([...posts, post]);
    };

    return (
        <div className="flex flex-col gap-4 text-wrap">
            <h1 className="font-bold text-2xl text-center">Feeds</h1>

            <div className="grid grid-cols-2 gap-10 m-6 p-2.5 justify-center items-center text-center">
                <Card   
                    title ="Card Type One"
                    content="This card is rendered automatically on this Next.js app. Pleasee rate my first card."
                />
                    
                <Card 
                    title ="Card Type Two"
                    content="This card is rendered automatically on this Next.js app. Pleasee rate my first card."
                />
            </div>

            <div className="p-4">
                <button
                    onClick={() => setIsModalOpen(true)}
                    className="bg-green-500 text-white px-3 py-1 rounded"
                >
                    Add Post
                </button>

                <PostModal
                    isOpen = {isModalOpen}
                    onClose={() => setIsModalOpen(false)}
                    onSubmit={handleAddPost}
                />

                <div className="mt-4">
                    {posts.map((post, i) => (
                        <div key={i} className="border p-2 rounded mb-2">
                            <h3 className="font-bold">{post.title}</h3>
                            <p>{post.content}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Home;