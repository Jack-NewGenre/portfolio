import { fetchBySlug, fetchPageBlocks, notion } from "@/lib/notion";
import bookmarkPlugin from "@notion-render/bookmark-plugin";
import { NotionRenderer } from "@notion-render/client";
import hljsPlugin from "@notion-render/hljs-plugin";

interface PageProps {
  params: {
    slug: string;
  };
}

const SinglePostPage = async ({ params }: PageProps) => {

  const post = await fetchBySlug(params.slug);

  if (!post) {
    return <div className="pt-16">Post not found</div>;
  }

  const blocks = await fetchPageBlocks(post.id);

  const renderer = new NotionRenderer({
    client: notion,
  });

  renderer.use(hljsPlugin({}));
  renderer.use(bookmarkPlugin(undefined));

  const html = await renderer.render(...blocks);

  return (
    <div className="pt-16">
      <div className="blogContent" dangerouslySetInnerHTML={{ __html: html }}></div>
    </div>
  );
};

export default SinglePostPage;