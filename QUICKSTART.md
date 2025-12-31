# Quick Start Guide

## Adding Your First Post Today!

### 1. Create Your Post File
```bash
# Copy the template
cp post-template.html posts/2024-12-31.html
```

### 2. Edit the Post
Open `posts/2024-12-31.html` and write your content:

```html
<p>Today I learned something amazing...</p>

<h2>Main Topic</h2>
<p>Your thoughts here.</p>

<!-- Add images -->
<img src="../images/photo.jpg" alt="My photo">

<!-- Add code -->
<pre><code>
console.log("Hello World!");
</code></pre>

<!-- Add math -->
<p>The formula is: \(E = mc^2\)</p>
```

### 3. Register Your Post
Add to `posts-index.js` at the top of the array:

```javascript
{
    id: '2024-12-31',
    title: 'My Amazing Day',
    date: 'December 31, 2024',
    dateSort: '2024-12-31',  // Keep this format for sorting
    excerpt: 'Today I learned...',
    file: 'posts/2024-12-31.html',
    tags: ['daily', 'learning']
},
```

### 4. Commit and Push
```bash
git add .
git commit -m "Add post for 2024-12-31"
git push
```

That's it! Your post will be live in ~1 minute.

## Tips

- **Keep it simple**: Don't overthink, just write
- **Use tags**: Helps organize your thoughts
- **Add images**: Place in `images/` folder first
- **Math is easy**: Use `\(inline\)` or `$$display$$`
- **Daily habit**: Even 5 minutes counts!

## Common Snippets

### Quote
```html
<blockquote>
    Inspirational quote here
</blockquote>
```

### List
```html
<ul>
    <li>Item 1</li>
    <li>Item 2</li>
</ul>
```

### Emphasis
```html
<strong>Bold</strong> and <em>Italic</em>
```

Happy writing! 📝
