# Tejas Karambe — Portfolio

A single-page portfolio built with **React + Vite + Tailwind CSS**, using hand-built
shadcn/ui-style components (`Button`, `Card`, `Badge`, `Separator`) and a
**glassmorphism** visual theme — frosted glass cards floating over a soft
violet/cyan gradient background.

## Stack
- React 18 + Vite
- Tailwind CSS
- shadcn/ui-style components (`class-variance-authority`, `clsx`, `tailwind-merge`)
- `lucide-react` icons

## Run locally

```bash
npm install
npm run dev
```

Open the printed local URL (usually `http://localhost:5173`).

## Edit your content

All personal content — name, about text, skills, experience, projects, and
education — lives in one place:

```
src/data.js
```

Edit that file and the whole site updates. Section layout/markup lives in
`src/App.jsx`; shared UI pieces are in `src/components/ui/`.

## Deploy to GitHub Pages

You have two options — pick one.

### Option A: GitHub Actions (recommended, fully automatic)

1. Push this project to a new GitHub repo, e.g. `tejas-karambe-portfolio`.
2. In **vite.config.js**, set `base` to match your repo name exactly:
   ```js
   base: "/tejas-karambe-portfolio/",
   ```
   (If your repo is named differently, e.g. `portfolio`, use `"/portfolio/"`.)
   If you're deploying to a **user/org root site** (`username.github.io` repo),
   set `base: "/"` instead.
3. Commit and push to the `main` branch.
4. In your repo on GitHub: **Settings → Pages → Build and deployment → Source**,
   choose **GitHub Actions**.
5. The included workflow at `.github/workflows/deploy.yml` will build and
   deploy automatically on every push to `main`. Check the **Actions** tab for
   progress; your site will be live at:
   ```
   https://<your-username>.github.io/<repo-name>/
   ```

### Option B: `gh-pages` package (manual deploy)

1. Set the same `base` in `vite.config.js` as above.
2. Run:
   ```bash
   npm run build
   npm run deploy
   ```
   This builds the site and pushes `dist/` to a `gh-pages` branch.
3. In **Settings → Pages**, set the source branch to `gh-pages`.

## Customization ideas
- Swap the accent colors (`cyan-glow` / `violet-glow`) in `tailwind.config.js`.
- Add a resume download link or a blog section as a new `<section>` in `App.jsx`.
- Replace the badge grid in `Skills` with a proficiency-bar style if you prefer.
