// Captures hero screenshots of each live project for the portfolio cards.
// Usage: npm run screenshots   (uses the locally installed Microsoft Edge)
import { chromium } from "playwright-core";
import sharp from "sharp";
import { mkdir } from "node:fs/promises";

const sites = {
  veritywave: "https://veritywave.com",
  veripay: "https://useveripay.com",
  nexusbotix: "https://nexusbotix.io",
  alidu: "https://alidu.veritywave.com",
  eurovic: "https://eurovic.devsamc.xyz",
  ikennaconsult: "https://ikennaconsult.com",
  stephenogbodo: "https://stephenogbodo.com",
};

await mkdir("public/projects", { recursive: true });
const browser = await chromium.launch({ channel: "msedge" });
const only = process.argv.slice(2);

for (const [name, url] of Object.entries(sites)) {
  if (only.length && !only.includes(name)) continue;
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  try {
    await page.goto(url, { waitUntil: "networkidle", timeout: 45000 });
    await page.waitForTimeout(2500); // let intro animations settle
    // Hide cookie banners so they do not appear in the shot.
    await page.evaluate(() => {
      for (const el of document.querySelectorAll("body *")) {
        const s = getComputedStyle(el);
        if ((s.position === "fixed" || s.position === "sticky") && /cookie/i.test(el.textContent || "")) el.style.display = "none";
      }
    });
    await page.waitForTimeout(300);
    const png = await page.screenshot();
    await sharp(png).resize(1440).webp({ quality: 82 }).toFile(`public/projects/${name}.webp`);
    console.log("ok  ", name);
  } catch (err) {
    console.log("fail", name, err.message.split("\n")[0]);
  }
  await page.close();
}
await browser.close();
