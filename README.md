# Leslie Abiola: portfolio

A one-page portfolio for Leslie Abiola, founder and CEO of Zeuswrap. It is built with plain HTML, CSS and JS, and uses Three.js for the 3D wrap studio.

## Edit the content
Everything is in **`js/content.js`**: bio, timeline, press links, services, gallery, Handwrk details and contact info.

- Fill in the `contact` block: WhatsApp, phone, email, Instagram, TikTok, X, LinkedIn and website.
- To add work photos, put the images in `assets/images/` and list them in `gallery` with a `location` such as "Nigeria" or "UK". The location filter tabs are built from that field automatically.
- Paste the Leadership article URL into `press`.
- For official press logos, put the files in `assets/press/` and set each entry's `logo` field.
- Before launch, set `SHOW_PLACEHOLDERS: false` to hide the dashed "add this" boxes.

## Run locally
The 3D car loads files, so the site has to be served over http. Opening `index.html` directly with file:// won't load the car. Use any static server, for example:

```
ruby -run -e httpd . -p 8765          # then open http://localhost:8765
```

## Deploy
Upload the whole folder to any static host, such as Netlify, Vercel or GitHub Pages. No build step is needed.

## Files
- `index.html`: page structure
- `css/style.css`: styles; colour tokens are at the top
- `js/main.js`: interactions
- `js/car.js`: 3D scene
- `assets/models/`: car model and shadow
- `assets/draco/`: model decoder
