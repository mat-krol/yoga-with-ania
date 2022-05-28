import fs from "fs";
import matter from "gray-matter";

export default function getPages() {
  return fs.readdirSync("content/pages").map((fileName) => {
    const { data } = matter(
      fs.readFileSync("content/pages/" + fileName, "utf8")
    );
    const pageId = data.pageId || fileName.split("_").reverse()[0].slice(0, -3);
    const parentId = data.parentId
      ? data.parentId.split("_").reverse()[0]
      : null;
    return { ...data, pageId, parentId };
  });
}
