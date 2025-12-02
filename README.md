Here is the translated and updated **README.md** file in English. It includes the disclaimer about Gemini and the citation request for secondary development.

-----

# Deployment Guide: Vite + React to GitHub Pages

This document outlines the configuration, asset management, and deployment steps for hosting this Academic Homepage project on GitHub Pages.

## 📢 Acknowledgement & Usage Policy

  * **AI Generation:** Portions of this project's code structure and the deployment workflow were generated with the assistance of **Google Gemini**.
  * **Secondary Use:** If you fork, clone, or adapt this repository for your own academic homepage or project, **please explicitly cite the source and the original author (Simon Pei)** in your documentation or footer.

-----

## 1\. Prerequisites

Ensure your project is based on Vite and dependencies are installed.

```bash
npm install
```

You need to install `gh-pages` as a dev dependency. This tool handles pushing the build folder to the specific branch on GitHub.

```bash
npm install gh-pages --save-dev
```

## 2\. Configuration Changes

### Update `vite.config.ts`

To ensure resources load correctly when hosted on a GitHub subdirectory, you must set the `base` path.

**File:** `./vite.config.ts`

```typescript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // ⚠️ The value must match your GitHub repository name exactly, surrounded by slashes.
  base: '/AcademicHomePage/', 
})
```

### Update `package.json`

Add deployment scripts to automate building and pushing.

**File:** `./package.json`

```json
{
  "scripts": {
    "dev": "vite",
    "build": "tsc -b && vite build",
    // 👇 Add these two lines
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

## 3\. Static Assets Management (Crucial)

**The Issue:** Vite ignores custom folders (like `imgs`, `pdfs`) in the root directory during the build process.
**The Solution:** All static assets must be placed inside the **`public`** directory.

### Steps

1.  Ensure there is a `public` folder in the project root.
2.  Move your resource folders (e.g., `imgs`, `pdfs`) inside `public`.
3.  Create an empty `.nojekyll` file inside `public` to prevent GitHub from ignoring files starting with underscores.

**Directory Structure:**

```text
AcademicHomePage/
├── public/               <-- ⚠️ All static assets go here
│   ├── .nojekyll         <-- Create this empty file
│   ├── imgs/
│   │   └── profilephoto.jpg
│   ├── pdfs/
│   │   └── cv.pdf
│   └── vite.svg
├── src/
├── index.html
└── ...
```

**How to Reference Assets in Code:**
Use relative paths without the leading slash (or use the base path).

```tsx
// ✅ Correct
<img src="imgs/profilephoto.jpg" alt="Profile" />
<a href="pdfs/cv.pdf">Download CV</a>

// ❌ Incorrect (This will look for the file at the domain root)
<img src="/imgs/profilephoto.jpg" />
```

## 4\. Cleaning Up Invalid References

Check the `index.html` in your root directory. **Remove** any manual references to CSS files that do not exist in the source, to avoid 404 errors.

**File:** `./index.html`

```html
<link rel="stylesheet" href="/index.css"> 
```

## 5\. Deployment

Run the following command in your terminal. This triggers the `predeploy` script (which builds the project to the `dist` folder) and then pushes that folder to the `gh-pages` branch.

```bash
npm run deploy
```

## 6\. GitHub Repository Settings

1.  Go to your GitHub repository page.
2.  Navigate to **Settings** \> **Pages**.
3.  Under **Build and deployment** \> **Branch**:
      * Select Branch: **`gh-pages`**
      * Select Folder: **`/(root)`**
4.  Click **Save**.

## 7\. Troubleshooting

  * **404 Not Found (JS/CSS):**
      * Check if `base` in `vite.config.ts` matches your repository name.
      * Ensure `.nojekyll` exists in the `public` folder.
  * **404 Not Found (Images/PDFs):**
      * Ensure files are inside the `public/` folder, not the project root.
      * Ensure paths in your code do not start with `/`.
  * **No Changes After Deployment:**
      * It might be a browser cache issue. Try `Ctrl + Shift + R` or use Incognito mode.
      * Wait a few minutes; GitHub Actions deployment can take a moment.