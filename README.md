# devsam-portfolio

Source for [devsamc.xyz](https://devsamc.xyz).

## Stack

- Astro 7, static output
- Tailwind CSS v4, dark/light themes
- Geist and Geist Mono via Fontsource
- Cloudflare Workers (static assets)

## Development

Node 22+.

```sh
npm install
npm run dev
npm run build        # astro check + build
npm run preview
```

Content lives in `src/data/site.ts`.

```sh
npm run screenshots  # project screenshots from the live sites (uses Edge)
npm run brand        # og.png and apple-touch-icon.png
```

## Notes

- Section links use a query (`/?about`) rather than a hash. `Base.astro` scrolls to the section and clears the query once it's reached.
- The theme is applied by an inline script before first paint. Switching uses the View Transitions API, with an instant fallback.
- The custom cursor is mouse-only and off with `prefers-reduced-motion`.

## Deploy

Cloudflare Worker `devsam-portfolio` (`wrangler.jsonc`), serving `dist/` with `404.html` for unknown routes.

| | |
| --- | --- |
| Build | `npm run build` |
| Deploy | `npx wrangler deploy` |
