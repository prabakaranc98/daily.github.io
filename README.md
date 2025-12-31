# Daily by Pracha.Me

A personal journal for daily writing, reflections, and thoughts. Built for GitHub Pages with automatic deployment.

## Quick Start

### Writing a New Entry

1. **Copy the template**
   ```bash
   cp posts/template.html posts/$(date +%Y-%m-%d).html
   ```

2. **Edit your new post**
   - Update the `<title>` tag
   - Fill in the date and title in the header
   - Write your content
   - Add relevant tags

3. **Update the index**
   
   Add an entry to `index.html` in the posts list:
   ```html
   <li class="post-entry">
     <span class="entry-date">Dec 31</span>
     <a href="posts/2024-12-31.html" class="entry-title">Your Title</a>
     <div class="entry-tags">
       <a href="#" class="entry-tag">tag</a>
     </div>
   </li>
   ```

4. **Commit and push**
   ```bash
   git add . && git commit -m "Entry: Your Title" && git push
   ```
   
   The site will automatically deploy via GitHub Actions.

---

## Setup

### Google Analytics

Replace `G-XXXXXXXXXX` with your actual Google Analytics Measurement ID in all HTML files:
- `index.html`
- `archive.html`
- `posts/template.html`
- Any existing posts

To get your Measurement ID:
1. Go to [Google Analytics](https://analytics.google.com)
2. Create a property for your site
3. Go to Admin → Data Streams → Web
4. Copy the Measurement ID (starts with `G-`)

### GitHub Pages Deployment

The site auto-deploys on push via `.github/workflows/deploy.yml`.

To enable:
1. Go to your repo Settings → Pages
2. Under "Build and deployment", select **GitHub Actions**
3. Push to `main` branch

Your site will be live at `https://[username].github.io/daily.github.io`

---

## Content Guide

### Text Formatting

```html
<p>Regular paragraph with <strong>bold</strong> and <em>italic</em> text.</p>

<h2>Section Heading</h2>
<h3>Subsection</h3>

<blockquote>
  <p>A quote or passage.</p>
  <cite>Author Name</cite>
</blockquote>

<ul>
  <li>List item</li>
</ul>
```

### Images

Place images in `assets/images/` then reference them:

```html
<img src="../assets/images/photo.jpg" alt="Description">

<!-- With caption -->
<figure>
  <img src="../assets/images/photo.jpg" alt="Description">
  <figcaption>Caption text</figcaption>
</figure>
```

### Code

```html
<!-- Inline -->
<code>const x = 42</code>

<!-- Block -->
<pre><code>function hello() {
  console.log('Hello!');
}</code></pre>
```

### Equations (LaTeX)

MathJax is included in the template:

```html
<!-- Inline math -->
The equation \(E = mc^2\) shows...

<!-- Block equation -->
$$
\int_{0}^{\infty} e^{-x^2} dx = \frac{\sqrt{\pi}}{2}
$$
```

---

## Structure

```
daily.github.io/
├── .github/workflows/
│   └── deploy.yml      # Auto-deploy on push
├── index.html          # Home page with post index
├── archive.html        # Full archive by year
├── styles/
│   └── main.css        # All styling
├── posts/
│   ├── template.html   # Copy this for new posts
│   └── YYYY-MM-DD.html # Individual entries
├── assets/
│   └── images/         # Your images and media
└── README.md
```

---

## Customization

### Theme

Toggle between dark and light mode using the moon/sun button. Preference is saved in localStorage.

### Colors

Edit CSS variables in `styles/main.css` under `[data-theme="dark"]` and `[data-theme="light"]`.

### Fonts

Currently using:
- **Cormorant Garamond** — Display headings
- **EB Garamond** — Body text  
- **Source Sans 3** — UI elements
- **JetBrains Mono** — Code

---

*Daily by [Pracha.Me](https://pracha.me)*