import remark from "remark";
import html from "remark-html";

export default async function MarkdownRenderer({ content }: { content: string }) {
  if (!content) return null;
  const processed = await remark().use(html).process(content);
  return (
    <div
      className="prose prose-neutral max-w-none"
      dangerouslySetInnerHTML={{ __html: processed.toString() }}
    />
  );
}