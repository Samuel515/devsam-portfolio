import { tools as baseTools } from "./site";

export type HubTool = {
  slug: string;
  name: string;
  url: string;
  tagline: string;
  hue: number;
  glyph: string;
  category: string;
  description: string;
  howItWorks: string[];
  features: { title: string; body: string }[];
  useCases: string[];
  faqs: { q: string; a: string }[];
  related: string[];
};

const byName = (name: string) => {
  const t = baseTools.find((x) => x.name === name);
  if (!t) throw new Error(`Missing tool: ${name}`);
  return t;
};

export const hubTools: HubTool[] = [
  {
    ...byName("Markdown Reader"),
    slug: "markdown-reader",
    category: "Writing & text",
    description:
      "Markdown Reader opens .md files in a clean reading view, lets you edit them, and exports to PDF or HTML. It runs in your browser, so notes, READMEs, and docs stay on your device.",
    howItWorks: [
      "Open a .md file, drop one in, or paste Markdown directly.",
      "Read it in a clean formatted view, or switch to edit when you need to change something.",
      "Export to PDF or HTML when you're ready to share or publish.",
    ],
    features: [
      { title: "Readable preview", body: "Headings, lists, tables, task lists, and code blocks render clearly so you can focus on the content." },
      { title: "Edit in place", body: "Make quick fixes without leaving the browser or opening a separate editor." },
      { title: "Export options", body: "Save your document as a clean PDF or copy/download HTML for the web." },
      { title: "Private by default", body: "Your files are processed locally in the browser. Nothing is uploaded." },
    ],
    useCases: ["Reading README files before pushing code", "Turning notes into a shareable PDF", "Checking Markdown formatting before publishing"],
    faqs: [
      { q: "Can I convert Markdown to PDF?", a: "Yes. Open the file, then use Export and choose Print or save as PDF in the print dialog." },
      { q: "Does it support GitHub-flavoured Markdown?", a: "Yes. Tables, task lists, strikethrough, and fenced code blocks are supported." },
      { q: "Are my files uploaded?", a: "No. The file stays in your browser and is processed on your device." },
    ],
    related: ["dev-formatter", "word-counter", "pdf-toolkit"],
  },
  {
    ...byName("Image Converter"),
    slug: "image-converter",
    category: "Images",
    description:
      "Image Converter changes images between formats like PNG, JPG, WebP, AVIF, GIF, BMP, ICO, and HEIC. It handles conversion in the browser, which is useful for quick format fixes without uploading files to a server.",
    howItWorks: [
      "Drop one or more images into the tool.",
      "Choose the output format and quality settings you need.",
      "Convert and download each image, or download everything as a ZIP.",
    ],
    features: [
      { title: "Many formats", body: "Convert between common web and image formats, including HEIC from iPhones." },
      { title: "Batch conversion", body: "Process multiple images at once instead of converting them one by one." },
      { title: "Quality control", body: "Adjust output quality when using lossy formats like JPG or WebP." },
      { title: "Local processing", body: "Images are converted on your device, not uploaded to a backend." },
    ],
    useCases: ["Converting HEIC photos for websites", "Making WebP or AVIF images for faster pages", "Turning PNG screenshots into JPGs for smaller uploads"],
    faqs: [
      { q: "Can it convert HEIC images?", a: "Yes. You can convert HEIC photos to formats like JPG, PNG, or WebP in the browser." },
      { q: "Can I convert multiple images at once?", a: "Yes. Add a batch of files and download the converted results together." },
      { q: "Do you keep my images?", a: "No. Conversion happens locally in your browser." },
    ],
    related: ["image-compressor", "image-resizer", "background-remover"],
  },
  {
    ...byName("PDF to Image"),
    slug: "pdf-to-image",
    category: "PDF",
    description:
      "PDF to Image turns PDF pages into PNG, JPG, or WebP images. It's useful when you need a page as an image for sharing, previews, slides, or social posts.",
    howItWorks: [
      "Open a PDF file from your device.",
      "Select the pages and output format you want.",
      "Export the pages as images and download them.",
    ],
    features: [
      { title: "Page selection", body: "Export all pages or only the pages you need." },
      { title: "Multiple output formats", body: "Save pages as PNG for clarity, JPG for smaller files, or WebP for the web." },
      { title: "High-quality rendering", body: "Pages are rendered clearly so text and graphics stay readable." },
      { title: "No upload", body: "The PDF is rendered locally in your browser." },
    ],
    useCases: ["Sharing a PDF page on WhatsApp or social media", "Turning a document page into a slide image", "Creating image previews for PDFs"],
    faqs: [
      { q: "Can I export only one page?", a: "Yes. You can choose specific pages instead of exporting the whole document." },
      { q: "Which format should I pick?", a: "PNG is best for sharp text, JPG for smaller photos, and WebP for a good balance on the web." },
      { q: "Is my PDF sent to a server?", a: "No. The PDF stays on your device while pages are rendered." },
    ],
    related: ["pdf-toolkit", "pdf-compressor", "image-converter"],
  },
  {
    ...byName("Image Compressor"),
    slug: "image-compressor",
    category: "Images",
    description:
      "Image Compressor reduces image file size while keeping visual quality. It supports bulk compression and target file sizes, making it useful for web uploads, email attachments, and faster pages.",
    howItWorks: [
      "Add one or more images.",
      "Choose a quality level or a target file size.",
      "Download the compressed images individually or as a ZIP.",
    ],
    features: [
      { title: "Target file sizes", body: "Compress images toward common limits like 100 KB, 200 KB, or 1 MB." },
      { title: "Bulk compression", body: "Shrink a whole set of images in one go." },
      { title: "Quality preview", body: "Compare results before downloading so you can balance size and clarity." },
      { title: "Browser-based", body: "Compression runs locally, so your images stay private." },
    ],
    useCases: ["Reducing image sizes before uploading to a website", "Meeting email attachment limits", "Compressing photos for forms and portals"],
    faqs: [
      { q: "Can I compress an image to a specific size?", a: "Yes. The tool can aim for target sizes like 100 KB, 200 KB, or 1 MB." },
      { q: "Will compression ruin image quality?", a: "Not necessarily. You can adjust quality and preview the result before downloading." },
      { q: "Are images uploaded?", a: "No. Everything happens in your browser." },
    ],
    related: ["image-resizer", "image-converter", "pdf-compressor"],
  },
  {
    ...byName("PDF Toolkit"),
    slug: "pdf-toolkit",
    category: "PDF",
    description:
      "PDF Toolkit handles common PDF tasks like merging, splitting, rotating, reordering, and creating PDFs. It's a practical browser tool for everyday document work without uploading files.",
    howItWorks: [
      "Choose the PDF task you need, like merge, split, or rotate.",
      "Add your PDF files or pages.",
      "Apply the change and download the new PDF.",
    ],
    features: [
      { title: "Multiple PDF tools", body: "Merge, split, rotate, reorder, and create PDFs in one place." },
      { title: "Page control", body: "Work with specific pages instead of rebuilding the whole document manually." },
      { title: "Fast local processing", body: "PDF edits run in your browser for quick turnaround." },
      { title: "Private documents", body: "Your documents stay on your device." },
    ],
    useCases: ["Merging scanned documents into one PDF", "Splitting a large PDF into smaller files", "Rotating pages that were scanned sideways"],
    faqs: [
      { q: "Can I merge multiple PDFs?", a: "Yes. Add the files, arrange them, and merge them into one PDF." },
      { q: "Can I split or extract pages?", a: "Yes. You can split a PDF or pull out the pages you need." },
      { q: "Do my documents leave my device?", a: "No. PDF operations run locally in the browser." },
    ],
    related: ["pdf-compressor", "pdf-to-image", "image-converter"],
  },
  {
    ...byName("QR Code Generator"),
    slug: "qr-code-generator",
    category: "QR & sharing",
    description:
      "QR Code Generator creates QR codes for links, Wi-Fi details, WhatsApp messages, contacts, and more. You can style the code and download it for print or digital use.",
    howItWorks: [
      "Pick the QR type you want to create.",
      "Enter the link, text, or details.",
      "Customize the style and download the QR code image.",
    ],
    features: [
      { title: "Multiple QR types", body: "Create QR codes for URLs, Wi-Fi, WhatsApp, plain text, and other common uses." },
      { title: "Custom styling", body: "Adjust colors and style so the QR code fits your brand or flyer." },
      { title: "Download-ready", body: "Export a clean image you can use on posters, cards, menus, or websites." },
      { title: "Made locally", body: "The QR code is generated in your browser." },
    ],
    useCases: ["Sharing a WhatsApp contact or message link", "Putting Wi-Fi details on a card", "Adding a website QR code to flyers or packaging"],
    faqs: [
      { q: "Can I make a WhatsApp QR code?", a: "Yes. You can create a QR code that opens a WhatsApp chat or prefilled message." },
      { q: "Can I style the QR code?", a: "Yes. You can change the look while keeping it scannable." },
      { q: "Is the QR code generated online?", a: "It's generated in your browser, so the data you enter stays on your device." },
    ],
    related: ["qr-code-scanner", "password-generator", "image-resizer"],
  },
  {
    ...byName("QR Code Scanner"),
    slug: "qr-code-scanner",
    category: "QR & sharing",
    description:
      "QR Code Scanner reads QR codes from your camera or from an image you drop in. It gives you the decoded content quickly, with actions like opening links, copying text, and scanning again without leaving the page.",
    howItWorks: [
      "Allow camera access, or drop/upload an image containing a QR code.",
      "Point the camera at the code or let the tool read the image.",
      "View the result, copy it, open links safely, or scan another code.",
    ],
    features: [
      { title: "Camera scanning", body: "Use your device camera for live scanning, with a clear viewfinder and fast detection." },
      { title: "Image upload/drop", body: "Scan QR codes from screenshots, photos, or saved images when a camera isn't convenient." },
      { title: "Useful result actions", body: "Copy decoded text, open URLs in a new tab, and see the content type clearly." },
      { title: "Private scanning", body: "Scanning happens in your browser. Camera frames and images are not uploaded." },
    ],
    useCases: ["Scanning a QR code from a laptop screen using your phone camera", "Reading a QR code from a screenshot", "Checking where a QR code goes before opening it"],
    faqs: [
      { q: "Can I scan a QR code from an image?", a: "Yes. Drop an image or upload one, and the scanner will try to decode any QR code in it." },
      { q: "Does it need camera permission?", a: "Only for live camera scanning. Image scanning works without camera access." },
      { q: "Is my camera feed uploaded?", a: "No. Scanning happens locally in your browser." },
    ],
    related: ["qr-code-generator", "image-converter", "password-generator"],
  },
  {
    ...byName("Dev Formatter"),
    slug: "dev-formatter",
    category: "Developer tools",
    description:
      "Dev Formatter is a set of small developer utilities for formatting JSON, encoding and decoding Base64, encoding URLs, and decoding JWTs. It's handy for quick debugging and data checks in the browser.",
    howItWorks: [
      "Choose the tool you need: JSON, Base64, URL, or JWT.",
      "Paste your input or drop a file where supported.",
      "Get the formatted or decoded result instantly and copy it.",
    ],
    features: [
      { title: "Multiple utilities", body: "JSON formatting, Base64, URL encoding/decoding, and JWT decoding in one place." },
      { title: "Fast feedback", body: "See results immediately, which is useful while debugging APIs or payloads." },
      { title: "Copy-ready output", body: "Formatted results are easy to copy back into code, docs, or tickets." },
      { title: "Local handling", body: "Your data is processed in the browser, not sent to a server." },
    ],
    useCases: ["Pretty-printing API responses", "Decoding a JWT payload during debugging", "Encoding values for URLs or Base64 fields"],
    faqs: [
      { q: "Can it decode JWTs?", a: "Yes. It decodes the JWT header and payload so you can inspect them." },
      { q: "Does it validate JWT signatures?", a: "It decodes and shows the token contents. Signature verification depends on having the right secret or key, so treat decoded content as inspection, not trust." },
      { q: "Is pasted data uploaded?", a: "No. Formatting and decoding happen locally in your browser." },
    ],
    related: ["code-minifier", "javascript-obfuscator", "markdown-reader"],
  },
  {
    ...byName("Code Minifier"),
    slug: "code-minifier",
    category: "Developer tools",
    description:
      "Code Minifier shrinks JavaScript, CSS, HTML, and JSON by removing unnecessary characters. It's useful when you want smaller assets or quick minified output for testing and delivery.",
    howItWorks: [
      "Paste code or open a file.",
      "Select the language or let the tool detect it.",
      "Minify the code and copy or download the result.",
    ],
    features: [
      { title: "Multiple languages", body: "Minify JavaScript, CSS, HTML, and JSON in the same tool." },
      { title: "Before/after clarity", body: "See the original and minified output so you know what changed." },
      { title: "Quick copy/download", body: "Grab the result for deployment, testing, or sharing." },
      { title: "Runs in browser", body: "Code is processed locally on your device." },
    ],
    useCases: ["Reducing file size before deployment", "Minifying a quick HTML snippet", "Cleaning JSON payloads for compact transport"],
    faqs: [
      { q: "What languages does it support?", a: "JavaScript, CSS, HTML, and JSON." },
      { q: "Is minifying the same as obfuscating?", a: "No. Minifying makes code smaller. Obfuscation makes JavaScript harder to read; use the JavaScript Obfuscator for that." },
      { q: "Is my code uploaded?", a: "No. Minification runs in your browser." },
    ],
    related: ["javascript-obfuscator", "dev-formatter", "image-compressor"],
  },
  {
    ...byName("JavaScript Obfuscator"),
    slug: "javascript-obfuscator",
    category: "Developer tools",
    description:
      "JavaScript Obfuscator makes JavaScript harder to read and copy by transforming code structure and identifiers. It's useful for client-side code you want to add friction to, while keeping in mind that browser code can still be inspected.",
    howItWorks: [
      "Paste JavaScript or open a .js file.",
      "Choose obfuscation options based on how much protection you need.",
      "Generate the obfuscated output and copy or download it.",
    ],
    features: [
      { title: "Configurable protection", body: "Adjust options to balance readability, size, and protection." },
      { title: "Client-side processing", body: "Your source code stays in the browser." },
      { title: "Copy/download output", body: "Use the result directly in your build or delivery flow." },
      { title: "Practical defaults", body: "Start with sensible settings, then tune when you need more control." },
    ],
    useCases: ["Adding friction to client-side script copying", "Protecting demo or embedded scripts", "Preparing JavaScript before distribution"],
    faqs: [
      { q: "Does obfuscation make JavaScript impossible to reverse?", a: "No. It makes code harder to read and reuse, but determined users can still analyze client-side JavaScript." },
      { q: "Will obfuscation break my code?", a: "It can if options are too aggressive. Test the output after obfuscating." },
      { q: "Is my source code uploaded?", a: "No. The obfuscation runs in your browser." },
    ],
    related: ["code-minifier", "dev-formatter", "password-generator"],
  },
  {
    ...byName("Background Remover"),
    slug: "background-remover",
    category: "Images",
    description:
      "Background Remover cuts out image backgrounds in the browser using AI for photos and a dedicated mode for signatures or logos. It's useful for product photos, profile pictures, and clean transparent assets.",
    howItWorks: [
      "Upload an image or drop it into the tool.",
      "Choose the removal mode that fits the image.",
      "Refine the result if needed and download a transparent PNG.",
    ],
    features: [
      { title: "Photo and logo modes", body: "Use AI for photos, or the signature/logo mode for ink, scans, and simple graphics." },
      { title: "Browser-based AI", body: "Background removal runs on your device, so images stay private." },
      { title: "Transparent output", body: "Download a clean PNG with transparency for design or web use." },
      { title: "Cleanup controls", body: "Adjust the result when edges or paper shadows need extra cleanup." },
    ],
    useCases: ["Removing a background from a profile photo", "Cleaning a signature scan for documents", "Preparing product images for ecommerce"],
    faqs: [
      { q: "Can it remove backgrounds from signatures?", a: "Yes. Use the signature or logo mode for scanned signatures, stamps, and simple graphics." },
      { q: "Are my photos uploaded?", a: "No. The image is processed in your browser. The AI model may be downloaded the first time you use photo mode." },
      { q: "What format do I get?", a: "You can download the result as a transparent PNG." },
    ],
    related: ["image-resizer", "image-converter", "image-compressor"],
  },
  {
    ...byName("Image Resizer"),
    slug: "image-resizer",
    category: "Images",
    description:
      "Image Resizer crops and resizes images for common sizes like social posts, profile photos, passports, and custom dimensions. It helps you get the right size without stretching or guessing.",
    howItWorks: [
      "Upload an image.",
      "Pick a preset size or enter custom dimensions.",
      "Adjust the crop and download the resized image.",
    ],
    features: [
      { title: "Useful presets", body: "Quick sizes for social media, profile photos, thumbnails, and document-style images." },
      { title: "Custom dimensions", body: "Enter exact width and height when you need a specific size." },
      { title: "Crop control", body: "Frame the image properly instead of squeezing it into the wrong shape." },
      { title: "Local export", body: "Resizing happens in your browser and the result downloads directly." },
    ],
    useCases: ["Resizing images for Instagram or YouTube", "Preparing passport-style photos", "Making images fit website upload requirements"],
    faqs: [
      { q: "Can I resize to an exact width and height?", a: "Yes. You can use presets or enter custom dimensions." },
      { q: "Will it stretch my image?", a: "No. You can crop and frame the image so it fits the target size properly." },
      { q: "Are images uploaded?", a: "No. Resizing happens locally in your browser." },
    ],
    related: ["image-compressor", "background-remover", "image-converter"],
  },
  {
    ...byName("PDF Compressor"),
    slug: "pdf-compressor",
    category: "PDF",
    description:
      "PDF Compressor reduces PDF file size for email, portals, and upload limits. It can also aim for a target size, which is useful when a form requires a strict maximum.",
    howItWorks: [
      "Upload the PDF you want to shrink.",
      "Choose a compression level or target file size.",
      "Download the smaller PDF and check that it still looks right.",
    ],
    features: [
      { title: "Target size compression", body: "Aim for common limits like 100 KB, 200 KB, 500 KB, or 1 MB." },
      { title: "Practical for forms", body: "Useful for job portals, school forms, and email attachment limits." },
      { title: "Local processing", body: "Your PDF stays on your device while it is compressed." },
      { title: "Simple download", body: "Get the compressed file immediately after processing." },
    ],
    useCases: ["Submitting PDFs to portals with size limits", "Emailing documents that are too large", "Shrinking scanned PDFs before sharing"],
    faqs: [
      { q: "Can I compress a PDF to 100 KB or 1 MB?", a: "Yes. The tool can aim for target sizes, though the final result depends on the PDF content." },
      { q: "Why do scanned PDFs compress differently?", a: "Scanned PDFs are often mostly images, so compression works by adjusting image quality and resolution." },
      { q: "Is my PDF uploaded?", a: "No. Compression runs in your browser." },
    ],
    related: ["pdf-toolkit", "image-compressor", "pdf-to-image"],
  },
  {
    ...byName("Word Counter"),
    slug: "word-counter",
    category: "Writing & text",
    description:
      "Word Counter counts words, characters, sentences, paragraphs, and reading time. It's useful for essays, posts, scripts, and any writing where length matters.",
    howItWorks: [
      "Paste text or type directly into the editor.",
      "See counts update instantly as you write.",
      "Use the stats to trim, expand, or format your text for its target.",
    ],
    features: [
      { title: "Detailed counts", body: "Track words, characters, sentences, paragraphs, and reading time." },
      { title: "Live updates", body: "Stats change as you type, so you can edit to length in real time." },
      { title: "Useful for writing tasks", body: "Helpful for essays, social posts, SEO copy, and scripts." },
      { title: "Private text", body: "Your text stays in the browser." },
    ],
    useCases: ["Checking essay or assignment length", "Writing social posts within character limits", "Estimating reading time for an article"],
    faqs: [
      { q: "Does it count characters with and without spaces?", a: "Yes. You can see both character counts." },
      { q: "Can I use it for reading time?", a: "Yes. It estimates reading time based on the text length." },
      { q: "Is my text saved on a server?", a: "No. The text stays in your browser." },
    ],
    related: ["markdown-reader", "dev-formatter", "password-generator"],
  },
  {
    ...byName("Password Generator"),
    slug: "password-generator",
    category: "QR & sharing",
    description:
      "Password Generator creates strong random passwords and memorable passphrases. It uses cryptographic randomness in the browser, so you can generate credentials without sending them anywhere.",
    howItWorks: [
      "Choose a password or passphrase.",
      "Set length and character options, or number of words.",
      "Generate, copy, and use the password where you need it.",
    ],
    features: [
      { title: "Passwords and passphrases", body: "Generate random character passwords or memorable word-based passphrases." },
      { title: "Cryptographic randomness", body: "Uses the browser's secure random generator for unpredictable results." },
      { title: "Custom rules", body: "Adjust length, symbols, numbers, and case to match site requirements." },
      { title: "Local generation", body: "Passwords are generated on your device, not on a server." },
    ],
    useCases: ["Creating a strong password for a new account", "Generating a memorable master passphrase", "Making random tokens or temporary credentials"],
    faqs: [
      { q: "Are generated passwords sent anywhere?", a: "No. They are generated locally in your browser." },
      { q: "Should I use a password or a passphrase?", a: "Use a passphrase when you need to remember or type it often. Use a random password for accounts stored in a password manager." },
      { q: "What makes a password strong?", a: "Length and randomness matter most. A long, randomly generated password is much harder to guess." },
    ],
    related: ["qr-code-generator", "dev-formatter", "javascript-obfuscator"],
  },
];

export const getHubTool = (slug: string) => hubTools.find((t) => t.slug === slug);

export const hubCategories = [...new Set(hubTools.map((t) => t.category))];
