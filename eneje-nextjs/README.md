# Eneje Consulting — Next.js Site

This is the Eneje Consulting / Coaching AI landing page, rebuilt as a Next.js application to match the production stack (Next.js, TypeScript).

The page looks and behaves identically to the original single-file HTML version. The difference is under the hood: the code is now organized into proper files and folders so it can be extended, maintained, and deployed like a real application.

---

## What's in this folder

```
eneje-nextjs/
├── package.json           # Lists the libraries this project needs
├── tsconfig.json          # TypeScript settings
├── next.config.js         # Next.js settings
├── public/
│   └── images/            # The 4 logo PNG files
├── src/
│   ├── app/
│   │   ├── layout.tsx     # Wraps every page (loads fonts, sets page title)
│   │   ├── page.tsx       # The home page — all the sections go here
│   │   └── globals.css    # All the styling (colors, fonts, layout)
│   └── components/
│       ├── ScrollReveal.tsx       # The scroll animation + nav border effect
│       └── NavContactButton.tsx   # The "Contact" button in the top nav
└── README.md              # This file
```

You only need to touch three files to make changes:
- **`src/app/page.tsx`** to change the content (headlines, body text, sections)
- **`src/app/globals.css`** to change the styling (colors, fonts, spacing)
- **`public/images/`** to swap out logos

---

## Getting it running on your computer

### Step 1 — Install Node.js (one-time setup)

Node.js is the program that runs Next.js on your computer. Go to https://nodejs.org and install the "LTS" (Long Term Support) version. After it installs, open a new terminal and type:

```
node -v
```

You should see something like `v20.11.0`. If you do, Node is installed.

### Step 2 — Install this project's libraries

Open a terminal, navigate into this folder, and run:

```
npm install
```

This reads `package.json` and downloads everything the project needs into a folder called `node_modules`. It takes a minute or two the first time and only has to be done once (or whenever you add new libraries).

### Step 3 — Start the development server

```
npm run dev
```

You'll see something like:
```
▲ Next.js 14.2.5
- Local: http://localhost:3000
```

Open `http://localhost:3000` in your browser. You should see the Eneje Consulting site.

The dev server watches your files. When you save a change to `page.tsx` or `globals.css`, the browser updates automatically — you don't need to refresh.

To stop the server, press `Ctrl+C` in the terminal.

---

## Making common changes

### Change a headline or some body text
Open `src/app/page.tsx` and search for the text you want to change. Edit it and save. Browser updates automatically.

### Change a color
Open `src/app/globals.css`. The top of the file has variables like:
```css
--gold: #C9A84C;
--white: #F5F3EE;
--black: #080808;
```
Change the color code and every place on the page using that color updates at once.

### Swap out a logo
Replace the corresponding PNG in `public/images/` with a new file of the same name.

### Add a new section
Copy one of the existing `<section>` blocks in `page.tsx`, paste it where you want it, and change the content. Reuse the existing CSS classes (`section-title`, `section-body`, etc.) so it matches the style of the rest of the page.

---

## Deploying the site

When you're ready to put this live, the easiest path is **Vercel** (made by the same company that built Next.js, and free for this size of project):

1. Push this folder to a GitHub repository.
2. Go to https://vercel.com, sign in with GitHub, and click "Add New Project".
3. Select the repository. Vercel will detect Next.js automatically.
4. Click "Deploy". In about two minutes you'll have a live URL.

Once it's live, any time you push a change to GitHub, Vercel rebuilds and redeploys automatically.

Other options that also work: Netlify, Render, Railway, AWS Amplify, or any server that runs Node.js.

---

## What changed vs. the original HTML

- The four logos, which were embedded as base64 strings (making the HTML file 1,626 lines long), are now real PNG files in `public/images/`. The code is shorter and the page loads faster because browsers can cache the images.
- The inline `<script>` for scroll behaviors is now a proper React component (`ScrollReveal.tsx`) that runs only on the client.
- The CSS is in its own file instead of inline in the `<head>`.
- TypeScript catches typos and errors before the site ever runs.
- The file is broken into logical pieces so when the site grows to multiple pages (product pages, a blog, a contact form backend, etc.), there's a sensible place to put them.

---

## If something breaks

**"npm: command not found"** — Node.js isn't installed. Go back to Step 1.

**"Module not found" errors when running `npm run dev`** — run `npm install` first.

**Page loads but looks unstyled** — check that `src/app/globals.css` exists and that `src/app/layout.tsx` imports it (it should say `import "./globals.css";` at the top).

**Logos don't show up** — check the files are in `public/images/` and the filenames match what `page.tsx` expects.

If you get stuck, save the error message you're seeing and we can work through it together.
