// Posts index - Add your posts here
const posts = [
    {
        id: '2024-01-01',
        title: 'My First Daily Entry',
        date: 'January 1, 2024',
        excerpt: 'Starting my journey of daily writing and reflections. This is a space where I can document my thoughts, learnings, and experiences.',
        file: 'posts/2024-01-01.html',
        tags: ['journal', 'reflection']
    },
    {
        id: '2024-01-02',
        title: 'Learning About Math and Code',
        date: 'January 2, 2024',
        excerpt: 'Today I explored some interesting mathematical concepts and how to represent them beautifully on the web.',
        file: 'posts/2024-01-02.html',
        tags: ['learning', 'math', 'code']
    }
];

// Sort posts by date (newest first)
posts.sort((a, b) => new Date(b.date) - new Date(a.date));
