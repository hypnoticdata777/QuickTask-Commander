# QuickTask Commander

A lightweight, dark-themed to-do app built with HTML, CSS, and JavaScript.

### Features
- Add new tasks (missions)
- Mark tasks as complete
- Delete tasks 🗑️
- Tasks persist using localStorage

### Tech Stack
- HTML
- CSS (custom styled, no frameworks)
- JavaScript (vanilla)

---

### Recent Cleanup

Did a code review pass and fixed a few things:

- **HTML**: fixed indentation and removed a stray leading space in the title
- **JS**: fixed inconsistent indentation, swapped `window.onload` for `DOMContentLoaded` (more idiomatic), and cleaned up formatting throughout
- **CSS**: removed stray spaces in property values, and fixed a layout issue where `height: 100vh` would clip tasks off-screen when the list gets long — switched to `min-height: 100vh` with `align-items: flex-start` so the page scrolls properly

---

Built as a 2-hour project to sharpen JavaScript DOM skills and GitHub workflow.

By Carlos, future full-stack dev & systems thinker.
[Click here to try it out](https://hypnoticdata777.github.io/QuickTask-Commander)
