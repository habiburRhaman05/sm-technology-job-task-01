# Raaya Social — Landing Page

A clean, responsive landing page for Raaya Social, a small studio that creates short-form video content brand

This is a single-page marketing site built with **HTML, CSS, and JavaScript** only. It is lightweight, easy to maintain, and designed to work smoothly across devices.


 # View Live : https://raaya-social-sm.netlify.app/
---

## What’s included

The page follows a simple marketing flow:

- **Hero** — the main message and call to action
- **Clients** — logo strip for social proof
- **Services** — what we offer
- **Process** — how we work, step by step
- **Video galleries** — sample work from different niches
- **Why short-form** — why this format matters
- **Testimonials** — client feedback and portrait videos
- **FAQ** — common questions in accordion form
- **Footer** — contact form, links, and basic site info

The layout is responsive from small phones up to large desktop screens.

---

## Tech stack

Nothing fancy — just the essentials:

- **HTML5** — structure and semantics
- **CSS3** — layout, styling, and responsiveness
- **Vanilla JavaScript** — interactions like menus, sliders, accordions, and form behavior
- **Google Fonts** — typography

Typography:
- **Poppins** — body text
- **Nunito** — buttons

---

## Project structure

```txt
/
├── icons/          # icons
├── media/          # images, videos
├── style/
│   └── style.css    # all styles
├── scripts/
│   └── index.js      # interactivity and UI behavior
├── index.html       # main landing page
└── README.md
```

Design tokens such as colors, spacing, font sizes, radius, and shadows should live at the top of `style.css` using CSS variables. That keeps the whole site consistent and makes rebranding much easier.

---

## Getting started

### 1. Open the project

If the files are already on your machine, open `index.html` in your browser.

### 2. Run a local server

A local server is better for development.

```bash
npx serve
# or
python -m http.server
```

Then open the local address shown in your terminal.

### 3. Make changes

- Update **HTML** for content and structure
- Update **CSS** for styling and responsiveness
- Update **JavaScript** for interactions

### 4. Deploy

You can host this project on any static hosting platform:
- Netlify
---

## Working on the design

A few simple rules help keep things clean:

- Use CSS variables instead of hardcoded values
- Keep each section self-contained
- Start mobile-first
- Test at small screen sizes before moving to desktop
- Load fonts once and reuse them everywhere

---

## Browser support

Works in modern browsers:

- Chrome
- Firefox
- Safari
- Edge

Older browsers like Internet Explorer are not supported.

---

## Notes

- This is a frontend-only project
---
created by Habib
