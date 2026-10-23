# 🚀 Free Deployment Guide for Pratik Ghodke's Portfolio

This guide details the best free platforms to host your portfolio website with zero server maintenance, automated SSL, global CDN delivery, and custom domain support.

---

## 🏆 Option 1: Vercel (Recommended — Easiest & Most Popular)

Vercel is the premier platform for hosting modern frontend applications (React, Vite, Next.js). It offers a **100% free Hobby tier** with automatic deployments on every Git push.

### Method A: Deploy via GitHub (Best for continuous updates)

1. **Initialize Git inside the portfolio directory:**
   ```bash
   cd /Users/pratikghodke/Desktop/Backups/resume/portfolio
   git init
   git add .
   git commit -m "Initial commit of portfolio website"
   ```

2. **Create a new repository on GitHub:**
   * Go to [github.com/new](https://github.com/new) and name it `pratik-portfolio` (set it to Public or Private).
   * Link your local repository and push:
     ```bash
     git remote add origin https://github.com/PratikNeopace/pratik-portfolio.git
     git branch -M main
     git push -u origin main
     ```

3. **Deploy on Vercel:**
   * Go to [vercel.com](https://vercel.com/) and click **"Sign Up"** (or log in with GitHub).
   * Click **"Add New..."** $\rightarrow$ **"Project"**.
   * Select your `pratik-portfolio` repository and click **"Import"**.
   * Vercel will automatically detect **Vite**:
     * **Framework Preset:** Vite
     * **Build Command:** `npm run build`
     * **Output Directory:** `dist`
   * Click **"Deploy"**.
   * 🎉 Within ~30 seconds, your site is live at `https://pratik-portfolio.vercel.app`!

---

### Method B: Deploy Instantly via Vercel CLI (No GitHub required)

If you want to deploy right from your terminal without creating a GitHub repository first:

```bash
cd /Users/pratikghodke/Desktop/Backups/resume/portfolio
npx vercel
```
* Follow the quick terminal prompts (log in via browser, select defaults).
* For production deploy, run:
  ```bash
  npx vercel --prod
  ```

---

## ⚡ Option 2: Netlify (Drag-and-Drop — 0 Command Line Setup)

Netlify allows you to deploy by literally dragging and dropping your built folder into your browser.

1. **Build the production bundle:**
   ```bash
   cd /Users/pratikghodke/Desktop/Backups/resume/portfolio
   npm run build
   ```
   *(This generates the optimized `portfolio/dist/` folder).*

2. **Deploy on Netlify:**
   * Go to [app.netlify.com/drop](https://app.netlify.com/drop) and log in.
   * Drag the `portfolio/dist` folder from your Finder into the drop zone in your browser.
   * Your site is published immediately at a free URL like `https://pratikghodke.netlify.app`.
   * You can customize the site name for free in **Site configuration $\rightarrow$ Change site name**.

---

## 🐙 Option 3: GitHub Pages (100% Free on your GitHub)

If you want your portfolio hosted directly under your GitHub username (e.g. `https://pratikneopace.github.io`):

1. **Install `gh-pages`:**
   ```bash
   cd /Users/pratikghodke/Desktop/Backups/resume/portfolio
   npm install --save-dev gh-pages
   ```

2. **Add deploy scripts to `package.json`:**
   ```json
   "scripts": {
     "dev": "vite",
     "build": "vite build",
     "preview": "vite preview",
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```

3. **Deploy:**
   ```bash
   npm run deploy
   ```
   * Enable GitHub Pages in your repo settings under **Settings $\rightarrow$ Pages $\rightarrow$ Branch: gh-pages**.

---

## 🌐 Adding a Free / Custom Domain

All of the above services give you free SSL and free domains:
* `pratik-ghodke.vercel.app`
* `pratik-ghodke.netlify.app`
* `pratikneopace.github.io`

If you purchase a custom domain (like `pratikghodke.com` or `pratik.dev` for ~\$10/year):
* In Vercel or Netlify, go to **Settings $\rightarrow$ Domains**.
* Add `pratikghodke.com`.
* Update the DNS CNAME/A records as guided by Vercel/Netlify.
* Free automatic SSL (HTTPS) will be provisioned in minutes!

---

## 🧪 Testing Locally

To run the portfolio on your computer right now:

```bash
cd /Users/pratikghodke/Desktop/Backups/resume/portfolio
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

To test the production build locally:
```bash
npm run preview
```
