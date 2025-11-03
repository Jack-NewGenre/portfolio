import { fetchPages } from "@/lib/notion";
import Link from "next/link";
import type {
  QueryDatabaseResponse,
  PageObjectResponse,
} from "@notionhq/client/build/src/api-endpoints";

const BlogPage = async () => {
  const posts: QueryDatabaseResponse = await fetchPages();

  return (
    <div className="pt-16 px-4">
      <h1 className="text-3xl font-bold mb-4">Blog Page</h1>
      <ul className="flex flex-col gap-4">
        {posts.results
          .filter(
            (post): post is PageObjectResponse =>
              post.object === "page" && "properties" in post
          )
          .map((post) => {
            // TypeScript now knows post is a PageObjectResponse ✅
            const slug =
              post.properties.Slug.type === "rich_text"
                ? post.properties.Slug.rich_text[0]?.plain_text ?? ""
                : "";

            const title =
              post.properties.Title.type === "title"
                ? post.properties.Title.title[0]?.plain_text ?? ""
                : "";

            return (
              <li key={post.id} className="flex">
                <Link
                  href={`/blog/${slug}`}
                  className="text-lg w-full p-2 rounded-md hover:bg-foreground/10"
                >
                  {title}
                </Link>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default BlogPage;
