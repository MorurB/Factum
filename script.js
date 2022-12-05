let burger = document.querySelector('.burger');
let menu_header  = document.querySelector('.menu_header');

burger.addEventListener('click', function() {
    burger.classList.toggle('burger_active')
    menu_header.classList.toggle('menu_header_active')
})