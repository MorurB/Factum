let header__burger = document.querySelector('.header__burger');
let header__span_burger  = document.querySelector('.header__span-burger');
let header__list = document.querySelector('.header__list');
let body = document.querySelector('.body');


header__burger.addEventListener('click', function() {
    header__burger.classList.toggle('header__burger_active');
    header__span_burger.classList.toggle('.header__span-burger_active');
    header__list.classList.toggle('header__list_active');
    body.classList.toggle('body_active');
});