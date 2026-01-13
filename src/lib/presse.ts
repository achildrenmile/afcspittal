import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const contentDirectory = path.join(process.cwd(), "content/presse");

export type PressType = "article" | "web" | "pdf";

export interface PressEntry {
  slug: string;
  title: string;
  source: string;
  date: string;
  url: string;
  type: PressType;
  descriptionHtml?: string;
}

export async function getAllPressEntries(): Promise<PressEntry[]> {
  if (!fs.existsSync(contentDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(contentDirectory);
  const entries = await Promise.all(
    fileNames
      .filter((fileName) => fileName.endsWith(".md"))
      .map(async (fileName) => {
        const slug = fileName.replace(/\.md$/, "");
        const fullPath = path.join(contentDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, "utf8");
        const { data, content } = matter(fileContents);

        let descriptionHtml: string | undefined;
        if (content.trim()) {
          const processed = await remark().use(html).process(content);
          descriptionHtml = processed.toString();
        }

        return {
          slug,
          title: data.title || slug,
          source: data.source || "",
          date: data.date || "",
          url: data.url || "",
          type: (data.type as PressType) || "web",
          descriptionHtml,
        };
      })
  );

  return entries.sort((a, b) => (a.date > b.date ? -1 : 1));
}
