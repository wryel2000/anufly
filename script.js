// Adicionando interatividade ao rolar a página
document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll('.server-section');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1
    });

    sections.forEach(section => {
        section.style.opacity = 0;
        section.style.transform = 'translateY(50px)';
        section.style.transition = 'opacity 1s, transform 1s';
        observer.observe(section);
    });
});
// Função para carregar posts filtrados por categoria
function loadPosts(category) {
    fetch('posts.json')
        .then(response => response.json())
        .then(posts => {
            const filteredPosts = posts.filter(post => post.category === category);
            const postsList = document.getElementById('posts-list');
            postsList.innerHTML = '';

            filteredPosts.forEach(post => {
                const postElement = document.createElement('div');
                postElement.className = 'post';
                postElement.innerHTML = `
                    <img src="${post.image}" alt="${post.title}">
                    <h3>${post.title}</h3>
                    <p>${post.date}</p>
                    <a href="post-view.html?id=${post.id}" class="minecraft-button">Ler Mais</a>
                `;
                postsList.appendChild(postElement);
            });
        });
// Função para carregar posts filtrados por categoria
function loadPosts(category) {
    fetch('posts.json')
        .then(response => response.json())
        .then(posts => {
            const filteredPosts = posts.filter(post => post.category === category);
            const postsList = document.getElementById('posts-list');
            postsList.innerHTML = '';

            filteredPosts.forEach(post => {
                const postElement = document.createElement('div');
                postElement.className = 'post';
                postElement.innerHTML = `
                    <img src="${post.image}" alt="${post.title}">
                    <h3>${post.title}</h3>
                    <p>${post.date}</p>
                    <a href="post-view.html?id=${post.id}" class="minecraft-button">Ler Mais</a>
                `;
                postsList.appendChild(postElement);
            });
        });
// Função para carregar posts filtrados por categoria
function loadPosts(category) {
    fetch('posts.json')
        .then(response => response.json())
        .then(posts => {
            const filteredPosts = posts.filter(post => post.category === category);
            const postsList = document.getElementById('posts-list');
            postsList.innerHTML = '';

            filteredPosts.forEach(post => {
                const postElement = document.createElement('div');
                postElement.className = 'post';
                postElement.innerHTML = `
                    <img src="${post.image}" alt="${post.title}">
                    <h3>${post.title}</h3>
                    <p>${post.date}</p>
                    <a href="post-view.html?id=${post.id}" class="minecraft-button">Ler Mais</a>
                `;
                postsList.appendChild(postElement);
            });
        })
        .catch(error => console.error('Erro ao carregar posts:', error));
}

// Função para carregar um post específico
function loadPost(postId) {
    fetch('posts.json')
        .then(response => response.json())
        .then(posts => {
            const post = posts.find(p => p.id == postId);
            if (post) {
                document.getElementById('post-title').textContent = post.title;
                document.getElementById('post-image').src = post.image;
                document.getElementById('post-content').textContent = post.content;
                document.getElementById('post-date').textContent = `Data: ${post.date}`;
            }
        })
        .catch(error => console.error('Erro ao carregar o post:', error));
}
