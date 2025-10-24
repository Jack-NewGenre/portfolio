import { fetchPages } from "@/lib/notion";
import Link from "next/link";

const BlogPage = async () => {
  const posts = await fetchPages();
  return (
    <div className="pt-16 px-4">
      <h1 className="text-3xl font-bold mb-4">Blog Page</h1>
      <ul className="flex flex-col gap-4">
        {posts.results.map((post) => (
          <li key={post.id} className="flex">
            <Link href={`/blog/${post.properties.Slug.rich_text[0]?.plain_text}`} className="text-lg w-full p-2 rounded-md hover:bg-foreground/10">
              {post.properties.Title.title[0]?.plain_text}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlogPage;