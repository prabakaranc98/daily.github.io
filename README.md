# Daily Writing & Reflections

A simple, elegant daily journal website hosted on GitHub Pages. Write your daily thoughts, reflections, learnings, and logs with support for images, equations, code snippets, and more!

## Features

✨ **Simple HTML Posts** - Write posts as simple HTML files
📝 **Easy to Maintain** - No build process, no database, just HTML/CSS/JS
📐 **Math Support** - Beautiful equation rendering with MathJax
💻 **Code Snippets** - Syntax-highlighted code blocks
🖼️ **Media Support** - Display images and GIFs
🎨 **Clean Design** - Modern, responsive, and easy to read
🚀 **GitHub Pages** - Free hosting with automatic deployment

## Getting Started

### Viewing the Site

Once deployed to GitHub Pages, your site will be available at:
```
https://[username].github.io
```

### Adding a New Post

1. **Create the post file:**
   - Copy `post-template.html` to `posts/YYYY-MM-DD.html`
   - Example: `posts/2024-01-15.html`

2. **Edit the post content:**
   ```html
   <p>Your content here...</p>
   
   <h2>Section Heading</h2>
   <p>More content...</p>
   ```

3. **Add post metadata to `posts-index.js`:**
   ```javascript
   {
       id: '2024-01-15',
       title: 'Your Post Title',
       date: 'January 15, 2024',
       excerpt: 'A brief summary of your post...',
       file: 'posts/2024-01-15.html',
       tags: ['reflection', 'learning']
   }
   ```

4. **Commit and push:**
   ```bash
   git add .
   git commit -m "Add new post for 2024-01-15"
   git push
   ```

That's it! GitHub Pages will automatically deploy your changes.

## Post Formatting Guide

### Headings
```html
<h2>Main Section</h2>
<h3>Subsection</h3>
```

### Text Formatting
```html
<p>Regular paragraph text.</p>
<p><strong>Bold text</strong> and <em>italic text</em></p>
<p>Inline <code>code snippet</code></p>
```

### Lists
```html
<ul>
    <li>Unordered item</li>
</ul>

<ol>
    <li>Ordered item</li>
</ol>
```

### Code Blocks
```html
<pre><code>
function example() {
    console.log("Hello, World!");
}
</code></pre>
```

### Quotes
```html
<blockquote>
    Your quote or important callout here.
</blockquote>
```

### Math Equations

Inline math (using `\( ... \)`):
```html
<p>Einstein's famous equation: \(E = mc^2\)</p>
```

Display math (using `$$ ... $$`):
```html
<div class="math-block">
$$
\int_{0}^{\infty} e^{-x^2} dx = \frac{\sqrt{\pi}}{2}
$$
</div>
```

### Images

1. Create an `images` folder in the root directory
2. Add your images to that folder
3. Reference them in your post:

```html
<img src="../images/my-photo.jpg" alt="Description">
<p class="image-caption">Optional caption</p>
```

### GIFs

Same as images:
```html
<img src="../images/animation.gif" alt="Description">
```

### Links
```html
<a href="https://example.com">Link text</a>
```

## File Structure

```
daily.github.io/
├── index.html              # Main page
├── style.css              # Stylesheet
├── script.js              # Main JavaScript
├── posts-index.js         # Post metadata (edit this to add posts)
├── post-template.html     # Template for new posts
├── posts/                 # Directory for post files
│   ├── 2024-01-01.html
│   ├── 2024-01-02.html
│   └── ...
├── images/                # (Optional) Directory for images
│   └── ...
└── README.md             # This file
```

## Customization

### Change Colors

Edit `style.css` and look for the gradient colors:
```css
header {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}
```

### Change Title and Tagline

Edit `index.html`:
```html
<h1>Your Title Here</h1>
<p class="tagline">Your tagline here</p>
```

### Modify Navigation

Edit the nav section in `index.html` and corresponding functions in `script.js`.

## Tips for Daily Writing

1. **Keep it simple** - Don't overthink it, just write
2. **Be consistent** - Even a few sentences count
3. **Use tags** - Organize posts with relevant tags
4. **Date format** - Use YYYY-MM-DD for consistent ordering
5. **Backup** - Git automatically backs up everything!

## GitHub Pages Setup

1. Go to your repository settings
2. Navigate to "Pages" section
3. Under "Source", select the branch (usually `main`)
4. Save and wait a few minutes for deployment
5. Your site will be live at `https://[username].github.io`

## Local Testing

To test locally, you can use any simple HTTP server:

```bash
# Using Python 3
python -m http.server 8000

# Using Node.js
npx http-server

# Using PHP
php -S localhost:8000
```

Then open `http://localhost:8000` in your browser.

## Support

- **MathJax**: [Documentation](https://docs.mathjax.org/)
- **GitHub Pages**: [Documentation](https://docs.github.com/en/pages)
- **HTML Reference**: [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/HTML)

## License

This is your personal journal - do whatever you want with it!

---

Happy writing! 📝✨