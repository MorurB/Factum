let burger = document.querySelector('.burger');
let menu = document.querySelector('.menu');
let body = document.querySelector('.body');

burger.addEventListener('click', function () {
    burger.classList.toggle('burger_active');
    body.classList.toggle('body_active');
    burger_menu.classList.toggle('burger-menu_active');
})