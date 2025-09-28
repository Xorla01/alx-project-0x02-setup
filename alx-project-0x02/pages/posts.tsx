import Header from "@/components/layout/Header";
import PostCard from "@/components/common/PostCard";
import { type PostProps } from "@/interfaces";
import { title } from "process";

export default function Posts({posts}: { posts: PostProps[] }) {
    return (
        <>
            <Header title="My Next.js App" logo="🚀" />

            <div className="p-6">
                <h1 className="text-2xl font-bold mb-4">Posts Page</h1>

                {posts.length === 0 ? (
                    <p className="text-gray-500">No posts available.</p>) : (
                    <div className="grid gap-4">
                        {posts.map((post) => (
                            <PostCard 
                                key={post.title}
                                userID={post.userID}
                                title={post.title}
                                content={post.content}
                            />
                        ))}
                    </div>
                )}
            </div> 
        </>
    );
}

export async function getStaticProps() {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=10");
    const data = await res.json();

    const posts = data.map((post: any) => ({
        userID: post.userID,
        title: post.title,
        content: post.body,
    }));

    return {
        props: { posts }
    };
}