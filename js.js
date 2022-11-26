let burger = document.querySelector('.burger');
let menu = document.querySelector('.menu');
let body = document.querySelector('.body');
let _open_burger_menu_menu = document.querySelector('._open_burger-menu_menu');


burger.addEventListener('click', function () {
    burger.classList.toggle('burger_active');
    body.classList.toggle('body_active');
    burger_menu.classList.toggle('burger-menu_active');
    _open_burger_menu_menu_menu.classList.toggle(' _open_burger_menu_menu_active');
})