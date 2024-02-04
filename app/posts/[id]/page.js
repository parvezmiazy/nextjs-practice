import Comments from "@/app/components/Commnets";
import getAllPosts, { getPost } from "@/app/lib/getAllPosts";
import { getPostComments } from "@/app/lib/getPostComment";
import { Suspense } from "react";

export async function generateMetadata({ params }) {
  const { id } = params;
  const post = await getPost(id);
  return {
    title: post.title,
    description: post.description,
  };
}
export default async function PostPage({ params }) {
  const { id } = params;
  const postPromise = getPost(id);
  const commentsPromise = getPostComments(id);
  const post = await postPromise;
  // const [post, comments] = await Promise.all([postPromise, commentsPromise]);

  return (
    <div className="mt-6">
      <h2 className="text-green-500">This is post title: {post.title}</h2>
      <p>This is post body: {post.body}</p>
      <hr />
      <div className="mt-6">
        <Suspense fallback="<h1>Loading comments...</h1>">
          <Comments promise={commentsPromise} />
        </Suspense>
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  const posts = await getAllPosts();

  return posts.map((post) => ({
    id: post.id.toString(),
  }));
}
