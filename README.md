<div align="center">

# Sumit Sharma — Portfolio

**Cybersecurity & Networking Student · Lincoln International College, Kathmandu**

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Accessibility](https://img.shields.io/badge/A11y-WCAG%20Mindful-0A7EA4?style=flat-square&logo=accessible-icon&logoColor=white)](https://www.w3.org/WAI/)
[![License](https://img.shields.io/badge/License-MIT-green?style=flat-square&logo=open-source-initiative&logoColor=white)](LICENSE)

</div>

---

## Overview

A fast, dependency-free personal portfolio built with semantic HTML, modern CSS, and vanilla JavaScript. The site presents academic background, technical stack, active learning operations, and contact channels with a cyber-themed visual identity — while maintaining strong accessibility and SEO fundamentals.

## Highlights

| Area | Details |
|---|---|
| **Responsive Design** | Fluid layout with mobile-first breakpoints and a full-screen mobile menu |
| **Theming** | Light/dark mode toggle persisted via `localStorage`, driven by CSS custom properties |
| **Animations** | Scroll-triggered reveals, terminal typing effect, and system-monitor visuals |
| **Accessibility** | Skip link, ARIA landmarks, live regions, focus trapping, and reduced-motion support |
| **SEO / AEO** | Open Graph, Twitter Cards, JSON-LD structured data, and semantic headings |
| **Performance** | Zero build step, no frameworks, minimal render-blocking resources |

## Repository Structure

```
├── index.html                  # Main portfolio page
├── README.md                   # Project documentation
├── LICENSE                     # MIT license
├── robots.txt                  # Crawler rules + sitemap reference
├── humans.txt                  # Credits for the people behind the site
├── sitemap.xml                 # XML sitemap for search engines
├── site.webmanifest            # PWA manifest (name, theme, icons)
├── .well-known/
│   └── security.txt            # Security contact (RFC 9116)
└── assets/
    ├── css/
    │   └── style.css           # Combined stylesheet (tokens, layout, components)
    ├── icons/
    │   └── favicon.svg         # SVG favicon / app icon
    └── js/
        ├── main.js             # Entry point — theme, back-to-top, year
        └── modules/
            ├── nav.js          # Sticky nav, mobile menu, section highlighting
            ├── animations.js   # Scroll reveals and animated effects
            └── terminal.js     # Terminal-style profile animation
```

## Getting Started

No build tooling is required — this is a fully static site.

### Option 1 — Open directly

Open `index.html` in any modern browser.

### Option 2 — Local server (recommended)

```bash
npx serve .
```

Then visit [http://localhost:3000](http://localhost:3000).

## Accessibility

The site follows WCAG-minded practices:

- Semantic landmarks (`nav`, `main`, `section`, `footer`) with labelled headings
- Skip-to-content link for keyboard users
- ARIA live regions for dynamic content (terminal output, menu state)
- Focus trapping and `Escape` handling in the mobile menu
- `prefers-reduced-motion` media query disables non-essential animation
- Decorative elements hidden from assistive technology via `aria-hidden`

## SEO & Structured Data

- Canonical link, robots meta, and descriptive `title`/`description`
- Open Graph and Twitter Card metadata for rich social previews
- JSON-LD `Person` schema with `sameAs` profile links

## Roadmap

- [ ] Add project showcase cards with live demos
- [ ] Generate Open Graph preview image
- [x] Add `sitemap.xml` and `robots.txt`
- [x] Add favicon and PWA web manifest
- [ ] Integrate a contact form with validation

## Contact

| Channel | Link |
|---|---|
| Email | [sumitsharma9753108@gmail.com](mailto:sumitsharma9753108@gmail.com) |
| GitHub | [@great-love-i](https://github.com/great-love-i) |
| LinkedIn | [sumit-sharma](https://linkedin.com/in/sumit-sharma) |
| Instagram | [@sumit_sharma_o0](https://instagram.com/sumit_sharma_o0) |

---

<div align="center">
<sub>Designed & built by Sumit Sharma</sub>
</div>
