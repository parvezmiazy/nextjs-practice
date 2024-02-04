import Link from "next/link";

export default function Blogs() {
  const blogs = [
    {
      id: 1,
      title: "Blog 1",
      description: "Description1",
    },
    {
      id: 2,
      title: "Blog 2",
      description: "Description 2",
    },
  ];
  return (
    <main className="mt-10">
      <ul>
        {blogs.map((blog) => (
          <li className="mb-5" key={blog.title}>
            <Link href={`/blogs/${blog.id}`}>{blog.title}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
