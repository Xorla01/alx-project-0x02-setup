import { PostModalProps } from "@/interfaces";
import React, { useState } from "react";

const PostModal: React.FC<PostModalProps> = ({ isOpen, onClose, onSubmit }) => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    if(!isOpen) {
        return null;
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (!title.trim() || !content.trim()) {
            alert("Please add a title and content to your post.");
            return;
        }
        
        onSubmit({ title, content});
        setTitle("");
        setContent("");
        onClose();
    };


    return (
       <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center ">
            <div className="bg-white p-2 rounded shadow-md w-[300px]">
                <h2 className="font-bold text-lg mb-2">
                    New Post
                </h2>

                <form onSubmit={handleSubmit} className="flex flex-col gap-2">
                    <input 
                        type="text" 
                        placeholder="Title" 
                        value={title}
                        onChange={(e) => setContent(e.target.value)}
                        className="border p-1 rounded"
                    />

                    <textarea 
                        placeholder="Content" 
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        className="border p-1 rounded"
                    />

                    <div className="flex gap-2 justify-end">
                        <button type="button" onClick={onClose} className="border px-2 rounded">Cancel</button>
                        <button type="submit" className="bg-blue-500 text-white px-2 rounded">Post</button>
                    </div>
                </form>
            </div>
       </div>
    );
}


export default PostModal;