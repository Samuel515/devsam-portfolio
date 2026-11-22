// @ts-check
import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import { readdir, readFile, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";

/**
 * After @astrojs/sitemap runs, writes /sitemap.xml as one plain <urlset> with every page,
 * merged from sitemap-0.xml, sitemap-1.xml, ... The index files are kept too.
 * @returns {import("astro").AstroIntegration}
 */
function sitemapXml() {
  return {
    name: "sitemap-xml",
    hooks: {
      "astro:build:done": async ({ dir, logger }) => {
        const out = fileURLToPath(dir);
        const shards = (await readdir(out)).filter((f) => /^sitemap-\d+\.xml$/.test(f)).sort();
        const urls = [];
        for (const f of shards) urls.push(...((await readFile(`${out}/${f}`, "utf8")).match(/<url>[\s\S]*?<\/url>/g) ?? []));
        await writeFile(
          `${out}/sitemap.xml`,
          `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.map((u) => `  ${u}`).join("\n")}\n</urlset>\n`,
        );
        logger.info(`sitemap.xml written with ${urls.length} URLs`);
      },
    },
  };
}

export default defineConfig({
  site: "https://devsamc.xyz",
  integrations: [react(), sitemap(), sitemapXml()],
  vite: { plugins: [tailwindcss()] },
  build: { inlineStylesheets: "auto" },
});
