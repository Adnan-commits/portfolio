# adnan@portfolio:~$

A terminal-themed personal portfolio. No frameworks, no build step, no dependencies.

> Live: https://adnan-commits.github.io/portfolio/

## What this is

A single-page portfolio styled like a Unix shell. Visitors can browse my work by either typing commands or clicking through a chip-based menu. The dual interface is deliberate: the terminal aesthetic plays well with engineering audiences, while the click-through menu keeps it accessible for recruiters and hiring managers who don't want to learn a command syntax.

## Why a terminal

Most portfolios I see fall into one of two buckets: framework-heavy single-page apps that take 50+ hours to build, or generic templated sites that look the same as everyone else's. I wanted to demonstrate distinctive design and frontend craft without reaching for a stack heavier than the problem warranted. The constraint of "make it interesting in plain HTML / CSS / JS" pushed the design somewhere it wouldn't otherwise have gone.

## Tech

- **HTML** for structure
- **CSS** with custom properties for theming, layered z-index for the matrix background, `backdrop-filter` for the translucent terminal panel
- **Vanilla JavaScript** for command parsing, event delegation, animated boot sequence, theme persistence, and the canvas-based matrix rain
- **No build tools, no package manager, no framework, no CSS preprocessor**

The whole thing weighs about 47 KB across three files and runs on any static host.

## Features

- Animated kernel-style boot sequence on first load
- 19 working commands plus aliases, with Tab autocomplete and Up / Down history navigation
- Both typed and clickable interfaces (chips, help table rows, project folders, inline references)
- Dark and light themes, toggled via title bar button or the `theme` command
- Theme persistence across sessions via `localStorage`, with `prefers-color-scheme` as the default
- Pre-paint inline script prevents theme flash on reload
- Canvas-based matrix rain with bright leading characters and per-column variation
- Translucent terminal panel with backdrop blur so the background bleeds through subtly
- Scroll-to-top button that appears after scrolling past the fold
- CRT scanline overlay, vignette, blinking cursor, live IST clock, uptime counter
- Mobile responsive with adjusted touch targets

## Try these commands

Once the page loads, type `help` for the full list. A few starting points:

- `whoami` for the quick intro
- `hire-me` for the plain-English HR version
- `ls projects/` to see featured projects
- `theme` to flip between dark and light
- `Ctrl + L` to clear the screen

## Project structure

```
.
├── index.html       Markup and the inline pre-paint theme script
├── styles.css       All styles, including both themes and the matrix layering
├── script.js        Commands, boot sequence, event delegation, theme logic, matrix renderer
├── resume.pdf       Downloadable resume (add yours here)
└── README.md
```

## Deployment

This is plain static HTML / CSS / JS. It deploys to any static host with no configuration:

- **GitHub Pages**: push the repo, then in Settings, go to Pages, set source to the main branch and root folder
- **Cloudflare Pages**, **Vercel**, **Netlify**: connect the repo, select static / no build step, deploy

Total deploy time is under five minutes on any of them.

## Design notes

A few choices worth flagging if you're reading the source:

- **Pre-paint script stays inline** in `index.html`. Moving it to `script.js` even with `defer` would defeat its purpose since it needs to run before the first paint to avoid theme flash on reload.
- **Single global click handler** uses event delegation (`document.addEventListener('click', ...)`). Any element with a `data-cmd` attribute becomes clickable automatically, no per-element binding needed when new output is rendered.
- **Focus calls all use `{ preventScroll: true }`**. Without this, refocusing the prompt input would scroll the page back to the bottom and fight with the scroll-to-top button.
- **Layering trick for the matrix background**: `html` holds the deep base color, the canvas sits at `z-index: 0` with no opacity attribute, and the terminal panel uses an `rgba` background with `backdrop-filter` to let the rain show through subtly without sacrificing readability.
- **CSS variables are scoped to both `body.dark/.light` and `html.dark/.light`** so the pre-paint script can apply the theme via `<html>` before the body class is set.

## Author

Adnan Bardgujar
[LinkedIn](https://www.linkedin.com/in/adnan-bardgujar-b43b7a25b/) · [GitHub](https://github.com/Adnan-commits) · adnanbardgujar@gmail.com

## License

MIT. Take what's useful. Attribution appreciated but not required.
