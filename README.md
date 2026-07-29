# Yunqiang Pei Academic Homepage

Personal academic homepage for Yunqiang Pei, focused on augmented reality, artificial intelligence, and proactive AR assistants.

## Development

```bash
npm install
npm run dev
```

The local site is available at:

```text
http://127.0.0.1:3000/AcademicHomePage/
```

## Production

```bash
npm run build
npm run preview
```

The Vite base path is `/AcademicHomePage/` because the site is hosted from the GitHub repository subpath.

To publish the generated site to the `gh-pages` branch:

```bash
npm run deploy
```

## Project Structure

```text
components/          React components and page sections
public/imgs/         Optimized images and icons used by the site
public/pdfs/         Public CV document
constants.ts         Publication, news, education, and experience data
styles.css           Tailwind entry point and global styles
```

Static assets use paths relative to Vite's configured base, for example:

```tsx
<img src="imgs/profilephoto260616.avif" alt="Yunqiang Pei" />
```

Original high-resolution images are not kept in `public/` after an optimized copy has replaced them. Private notes and generated inspection files are excluded by `.gitignore`.

## Acknowledgement

Parts of the original code structure and deployment workflow were created with assistance from Google Gemini. Please credit Simon Pei when adapting this project as a starting point for another academic homepage.
