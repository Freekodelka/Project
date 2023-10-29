const menuActive = document.querySelector ('.brand__menu-active');
const burgerMenu = document.querySelector ('.head__right-menu');
const closeMenu = document.querySelector ('.brand__menu-close');

function dropDownMenu() {
    menuActive.classList.toggle ('hidden');
}

burgerMenu.addEventListener ('click', dropDownMenu);
closeMenu.addEventListener ('click', dropDownMenu);