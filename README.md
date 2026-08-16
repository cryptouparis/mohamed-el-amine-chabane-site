# Mohamed El Amine Chabane — Academic website

Static, bilingual academic website designed for Vercel.

## What you normally update

- Publications: `data/publications.js`
- Research projects: `data/projects.js`
- Main biography, teaching and background: `index.html`
- Portrait: replace `assets/mohamed-el-amine-chabane.jpg` while keeping the same filename

## Add a publication

Open `data/publications.js`, copy one publication block, paste it at the top of the array and change:

- `year`
- `type`
- `title`
- `authors`
- `venue`
- `url`
- `tags`

## Deploy with GitHub + Vercel later

1. Create a GitHub repository and upload these files.
2. In Vercel, choose **Add New → Project** and import the repository.
3. Framework preset: **Other** (this is a static site).
4. Deploy.
5. Every GitHub commit will automatically produce a new deployment.

## Google indexing

After the final domain is chosen:

1. Add the site to Google Search Console.
2. Verify ownership.
3. Submit `/sitemap.xml`.
4. Use URL Inspection on the homepage and request indexing.

If you add a custom domain, also update the canonical URL in `index.html`, the URL in the JSON-LD block, `robots.txt`, and `sitemap.xml`.
