# Chinyere Ukpong — Portfolio

Personal portfolio site built with React and Vite, styled with Tailwind CSS, and animated with GSAP — including scroll-scrubbed and pinned scroll effects, a typewriter headline, and scroll-triggered reveals.

## Tech stack

- **React 19** + **Vite** — app shell and dev/build tooling
- **Tailwind CSS v4** — styling, via `@tailwindcss/vite`
- **GSAP** + **@gsap/react** (`useGSAP`) — animation, including `ScrollTrigger`, `SplitText`, and `TextPlugin`
- **EmailJS** (`@emailjs/browser`) — contact form submissions
- **lucide-react** / **react-icons** — iconography

## Getting started

```bash
npm install
npm run dev
```

Other scripts:

```bash
npm run build     # production build
npm run preview   # preview the production build locally
npm run lint      # run ESLint
```

## Structure

```
src/
  layout/
    NavBar.jsx
    Footer.jsx
  sections/
    Hero.jsx        # intro headline (GSAP typewriter effect)
    TechStack.jsx    # pinned, scroll-scrubbed strip of tools/languages
    About.jsx
    Projects.jsx
    Exp.jsx          # experience timeline
    Test.jsx         # testimonials carousel
    Article.jsx      # writing/articles, pinned scroll-triggered card reveal
    Contact.jsx      # EmailJS-powered contact form
  components/
    Button.jsx
    AnimatedBorderButton.jsx
  App.jsx
  index.css          # Tailwind theme tokens + custom keyframes/utilities
```

## Notes

- Custom animation utilities (fade-in, blink cursor, marquee, slow-drift, etc.) live in `src/index.css` under `@layer utilities`.
- Path alias `@` resolves to `src/` (configured in `vite.config.js`).
