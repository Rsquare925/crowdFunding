const openMenu = document.querySelector('.open-menu');
const closeMenu = document.querySelector('.close-menu');
const modal = document.querySelector('.mobile-nav');
const overlay = document.getElementById('overlay');

openMenu.addEventListener('click', () => {
    openMenu.classList.remove('active');
    closeMenu.classList.add('active');
    modal.classList.add('active');
    overlay.classList.add('active');

})

closeMenu.addEventListener('click', () => {
    openMenu.classList.add('active');
    closeMenu.classList.remove('active');
    modal.classList.remove('active');
    overlay.classList.remove('active');
})