import fs from "fs";
import matter from "gray-matter";

export function getPages(path: string = "cms/content/pages") {
  return fs.readdirSync(path).map((fileName) => {
    const { data } = matter(fs.readFileSync(path + "/" + fileName, "utf8"));
    return { ...data, date: data.date.toString() };
  });
}
