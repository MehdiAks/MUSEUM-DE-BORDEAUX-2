const burger = document.querySelector('.burger');
const menu = document.querySelector('.hoover-header');

burger.addEventListener('click', () => {
    menu.classList.toggle('active');

    if(menu.classList.contains('active')) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = 'auto';
    }
});
