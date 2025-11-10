import { fetchPages } from "@/lib/notion";
import Link from "next/link";
import type {
  QueryDatabaseResponse,
  PageObjectResponse,
} from "@notionhq/client/build/src/api-endpoints";
import { Button } from "@/components/ui/button";

const BlogPage = async () => {
  const posts: QueryDatabaseResponse = await fetchPages();

  return (
    <div className="pt-40 px-4 pb-16 bg-background w-full mx-auto">
      <div className="w-full max-w-4xl mx-auto">
        <h1 className="text-9xl uppercase mb-10">Journal</h1>
        <ul className="flex flex-col">
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

              const date =
                post.properties.Date.type === "created_time"
                  ? post.properties.Date.created_time
                  : "";
              const formattedDate = date
                ? new Date(date).toLocaleDateString("en-GB", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })
                : "";

                const description =
                post.properties.Description.type === "rich_text"
                  ? post.properties.Description.rich_text[0]?.plain_text ?? ""
                  : "";

              const tags =
                post.properties.Tags.type === "multi_select"
                  ? post.properties.Tags.multi_select.map((tag) => tag.name)
                  : [];

              const thumbnailProperty = post.properties["Thumbnail"];

              let thumbnail = "";

              if (thumbnailProperty?.type === "files" && thumbnailProperty.files.length > 0) {
                const fileObj = thumbnailProperty.files[0];

                if (fileObj.type === "external") {
                  thumbnail = fileObj.external.url;
                }

                if (fileObj.type === "file") {
                  thumbnail = fileObj.file.url;
                }
              }

              console.log(post.properties);

              return (
                <li key={post.id} className="flex items-center justify-between pb-8 mb-8 border-b border-foreground/10 w-full">
                  <Link
                    href={`/blog/${slug}`}
                    className="text-base w-full flex justify-between"
                  >
                    {thumbnail && (
                      <img
                        src={thumbnail}
                        alt={title}
                        className="w-1/3 h-auto object-cover"
                      />
                    )}
                    <div className="flex flex-col gap-2 w-2/3 py-4 px-8">
                      {tags.length > 0 && (
                        <div className="flex flex-wrap gap-2 mt-2">
                          {tags.map((tag) => (
                            <span
                              key={tag}
                              className="text-xs bg-foreground/10 px-2 py-1 rounded-full"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                      <h2 className="text-2xl">{title}</h2>
                      <p className="text-sm opacity-70">{description}</p>
                      <p>{formattedDate}</p>
                      <Button className="mt-2 w-max" variant="outline">Read Article</Button>
                    </div>
                  </Link>
                </li>
              );
            })}
        </ul>
      </div>
    </div>
  );
};

export default BlogPage;
