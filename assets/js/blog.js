document.addEventListener('DOMContentLoaded', function() {
    const postsContainer = document.getElementById('postsContainer');
    const blogPosts = JSON.parse(localStorage.getItem('blogPosts')) || [];

    blogPosts.forEach(post => {
        const postElement = document.createElement('div');
        postElement.classList.add('post');
        postElement.innerHTML = `
            <h2>${post.title}</h2>
            <p>${post.content}</p>
            <p><strong>Author:</strong> ${post.username}</p>
        `;
        postsContainer.appendChild(postElement);
    });

    document.getElementById('backButton').addEventListener('click', function() {
        window.location.href = 'index.html';
    });
});