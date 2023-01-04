let header__burger = document.querySelector('.header__burger');
let header__span_burger = document.querySelector('.header__span-burger');
let header__body = document.querySelector('.header__body');
let header__li_href = document.querySelector('header__li-href');

header__burger.addEventListener('click', function () {
    header__burger.classList.toggle('header__burger_active');
    header__span_burger.classList.toggle('header__span_burger_active');
    header__body.classList.toggle('header__body_active')
})

new Swiper('.swiper')
