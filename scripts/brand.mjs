// Generates the social share card (public/og.png) and Apple touch icon.
// Usage: npm run brand
import sharp from "sharp";

const bg = "#0b0f0d";
const accent = "#5ef0b0";

const og = `
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <pattern id="g" width="48" height="48" patternUnits="userSpaceOnUse">
      <path d="M48 0H0V48" fill="none" stroke="#ffffff" stroke-opacity="0.05"/>
    </pattern>
    <radialGradient id="glow" cx="0.85" cy="0" r="0.8">
      <stop offset="0" stop-color="${accent}" stop-opacity="0.22"/>
      <stop offset="1" stop-color="${accent}" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="1200" height="630" fill="${bg}"/>
  <rect width="1200" height="630" fill="url(#g)"/>
  <rect width="1200" height="630" fill="url(#glow)"/>
  <rect x="80" y="80" width="64" height="64" rx="14" fill="none" stroke="#ffffff" stroke-opacity="0.18"/>
  <text x="112" y="122" text-anchor="middle" font-family="Consolas, Menlo, monospace" font-size="26" font-weight="700" fill="${accent}">S/</text>
  <text x="80" y="330" font-family="Segoe UI, Helvetica, Arial, sans-serif" font-size="92" font-weight="700" letter-spacing="-3" fill="#f2f5f3">Samuel Ogbodo</text>
  <text x="80" y="400" font-family="Segoe UI, Helvetica, Arial, sans-serif" font-size="40" fill="#a9b3ae">Fullstack Software Engineer · Co-Founder &amp; CTO, VerityWave</text>
  <circle cx="88" cy="532" r="7" fill="${accent}"/>
  <text x="108" y="541" font-family="Consolas, Menlo, monospace" font-size="26" fill="#8a948f">devsamc.xyz</text>
</svg>`;

const icon = `
<svg xmlns="http://www.w3.org/2000/svg" width="180" height="180" viewBox="0 0 180 180">
  <rect width="180" height="180" fill="${bg}"/>
  <text x="90" y="116" text-anchor="middle" font-family="Consolas, Menlo, monospace" font-size="78" font-weight="700" fill="${accent}">S/</text>
</svg>`;

await sharp(Buffer.from(og)).png().toFile("public/og.png");
await sharp(Buffer.from(icon)).png().toFile("public/apple-touch-icon.png");
console.log("wrote public/og.png and public/apple-touch-icon.png");
