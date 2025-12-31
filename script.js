// Main script for handling post loading and navigation
document.addEventListener('DOMContentLoaded', function() {
    // Set current year in footer
    document.getElementById('year').textContent = new Date().getFullYear();
    
    // Load recent posts by default
    loadHome();
});

// Load home page with recent posts
function loadHome() {
    const contentDiv = document.getElementById('content');
    const recentPosts = posts.slice(0, 5); // Show 5 most recent posts
    
    contentDiv.innerHTML = `
        <section id="recent-posts">
            <h2>Recent Posts</h2>
            <div id="posts-list"></div>
        </section>
    `;
    
    displayPostsList(recentPosts, 'posts-list');
}

// Load all posts
function loadAllPosts() {
    const contentDiv = document.getElementById('content');
    
    contentDiv.innerHTML = `
        <section id="all-posts">
            <h2>All Posts</h2>
            <div id="posts-list"></div>
        </section>
    `;
    
    displayPostsList(posts, 'posts-list');
}

// Display list of posts
function displayPostsList(postsList, containerId) {
    const container = document.getElementById(containerId);
    
    if (postsList.length === 0) {
        container.innerHTML = '<p>No posts yet. Start writing!</p>';
        return;
    }
    
    container.innerHTML = postsList.map(post => `
        <article class="post-preview">
            <h3 onclick="loadPost('${post.id}')">${post.title}</h3>
            <p class="post-date">${post.date}</p>
            <p class="post-excerpt">${post.excerpt}</p>
            <div class="post-tags">
                ${post.tags ? post.tags.map(tag => `<span class="tag">${tag}</span>`).join('') : ''}
            </div>
            <a href="#" onclick="loadPost('${post.id}'); return false;" class="read-more">Read more →</a>
        </article>
    `).join('');
}

// Load a single post
function loadPost(postId) {
    const post = posts.find(p => p.id === postId);
    
    if (!post) {
        document.getElementById('content').innerHTML = '<p>Post not found.</p>';
        return;
    }
    
    const contentDiv = document.getElementById('content');
    contentDiv.innerHTML = '<div class="loading">Loading post...</div>';
    
    // Fetch the post content
    fetch(post.file)
        .then(response => {
            if (!response.ok) {
                throw new Error('Post not found');
            }
            return response.text();
        })
        .then(html => {
            contentDiv.innerHTML = `
                <article class="post-full">
                    <a href="#" onclick="loadHome(); return false;" class="back-button">← Back to posts</a>
                    <h1>${post.title}</h1>
                    <p class="post-date">${post.date}</p>
                    <div class="post-tags">
                        ${post.tags ? post.tags.map(tag => `<span class="tag">${tag}</span>`).join('') : ''}
                    </div>
                    <div class="post-content">
                        ${html}
                    </div>
                </article>
            `;
            
            // Trigger MathJax to render any math equations
            if (window.MathJax) {
                MathJax.typesetPromise();
            }
            
            // Scroll to top
            window.scrollTo(0, 0);
        })
        .catch(error => {
            contentDiv.innerHTML = `
                <div>
                    <a href="#" onclick="loadHome(); return false;" class="back-button">← Back to posts</a>
                    <p>Error loading post: ${error.message}</p>
                </div>
            `;
        });
}

// Load about page
function loadAbout() {
    const contentDiv = document.getElementById('content');
    contentDiv.innerHTML = `
        <section id="about">
            <h2>About This Journal</h2>
            <p>Welcome to my daily writing space! This is where I document my thoughts, learnings, reflections, and daily experiences.</p>
            
            <h3>What You'll Find Here</h3>
            <ul>
                <li>Daily reflections and thoughts</li>
                <li>Learning notes and discoveries</li>
                <li>Open journaling and personal growth</li>
                <li>Technical explorations and experiments</li>
            </ul>
            
            <h3>About the Site</h3>
            <p>This site is built with simple HTML, CSS, and JavaScript, hosted on GitHub Pages. It supports:</p>
            <ul>
                <li>📝 Simple HTML post format</li>
                <li>🖼️ Images and GIFs</li>
                <li>📐 Mathematical equations (via MathJax)</li>
                <li>💻 Code snippets</li>
                <li>🎨 Clean, readable design</li>
            </ul>
        </section>
    `;
}
