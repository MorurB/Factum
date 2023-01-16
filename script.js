let header__burger = document.querySelector('.header__burger');
let header__span_burger = document.querySelector('.header__span-burger');
let header__list = document.querySelector('.header__list');
let body = document.querySelector('.body');
let header__button_sign_up = document.querySelector('.header__button-sign_up');
let main = document.querySelector('.main');
let footer = document.querySelector('.footer');
let sign_up = document.querySelector('.sign-up');

header__burger.addEventListener('click', function () {
    header__burger.classList.toggle('header__burger_active');
    header__span_burger.classList.toggle('.header__span-burger_active');
    header__list.classList.toggle('header__list_active');
    body.classList.toggle('body_active');
});

header__button_sign_up.addEventListener('click', function () {
    main.classList.toggle('main_close');
    footer.classList.toggle('footer_close');
    sign_up.classList.toggle('sign-up_open');
})
