export default async function getAllPosts() {
  const result = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=10",
    {
      //cache: "no-store",
      next: {
        revalidate: 10,
      },
    }
  );
  if (!result.ok) {
    throw new Error("There was an error fetching posts");
  }
  return result.json();
}
export async function getPost(id) {
  const result = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );
  return result.json();
}
