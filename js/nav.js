function toggleMenu() {
    const nav = document.querySelector('nav');
    const navList = document.querySelector('nav ul');

    // Alterna a visibilidade do elemento <nav>
    if (nav.style.display === 'none' || nav.style.display === '') {
        nav.style.display = 'block';
        navList.classList.add('show');
    } else {
        nav.style.display = 'none';
        navList.classList.remove('show');
    }
}
