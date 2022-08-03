import getMarkdownContent from "./getMarkdownContent";

export default function getPageContent(pageId: string) {
  return getMarkdownContent("cms/content/pages", pageId);
}
