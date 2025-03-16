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
