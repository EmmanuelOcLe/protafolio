const toggleMenu = document.getElementById('toggle-menu');
const ulHeader = document.getElementById('header-ul');
const headerNav = document.getElementById('header-nav');

toggleMenu.addEventListener('click', () =>
{
    toggleMenu.classList.toggle('toggle-menu--active')
    ulHeader.classList.toggle('header-ul--show');
    headerNav.classList.toggle('header-nav--show');
});