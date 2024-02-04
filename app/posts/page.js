import Link from "next/link";
import getAllPosts from "../lib/getAllPosts";

export default async function Posts() {
  const posts = await getAllPosts();
  return (
    <div className="mt-6">
      <h1>All Posts</h1>
      <ul className="mt-6">
        {posts.map((post) => (
          <li className="mb-5" key={post.title}>
            <Link href={`/posts/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
