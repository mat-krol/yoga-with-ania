import fs from "fs";
import matter from "gray-matter";
import { join } from "path";

export default function getMarkdownContent(directory: string, pageId: string) {
  const fullPath = join(directory, `${pageId}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return { data, content };
}
