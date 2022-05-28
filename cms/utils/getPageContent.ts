import getMarkdownContent from "./getMarkdownContent";

export default function getPageContent(pageId: string) {
  return getMarkdownContent("cms/pages", pageId);
}
