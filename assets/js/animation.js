const burger = document.querySelector('.burger');
const menu = document.querySelector('.hoover-header');

burger.addEventListener('click', () => {
    menu.classList.toggle('active');
});

// Fermer le menu si on clique en dehors
document.addEventListener('click', (event) => {
    if (!menu.contains(event.target) && !burger.contains(event.target)) {
        menu.classList.remove('active');
    }
});
