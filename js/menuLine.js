let menuHeaderButton = document.querySelector('.header__menu');
let headerNavItem = document.querySelectorAll('.header__nav_item');

let menuHeaderButtonLine = document.querySelectorAll('.header__menu_line');

menuHeaderButton.addEventListener('mouseover', function () {
    menuHeaderButtonLine[4].classList.toggle('header__menu_line-visible');
})
menuHeaderButton.addEventListener('mouseout', function () {
    menuHeaderButtonLine[4].classList.toggle('header__menu_line-visible');
})

headerNavItem[0].addEventListener('mouseover', function () {
    menuHeaderButtonLine[0].classList.toggle('header__menu_line-visible');
})
headerNavItem[0].addEventListener('mouseout', function () {
    menuHeaderButtonLine[0].classList.toggle('header__menu_line-visible');
})

headerNavItem[1].addEventListener('mouseover', function () {
    menuHeaderButtonLine[1].classList.toggle('header__menu_line-visible');
})
headerNavItem[1].addEventListener('mouseout', function () {
    menuHeaderButtonLine[1].classList.toggle('header__menu_line-visible');
})

headerNavItem[2].addEventListener('mouseover', function () {
    menuHeaderButtonLine[2].classList.toggle('header__menu_line-visible');
})
headerNavItem[2].addEventListener('mouseout', function () {
    menuHeaderButtonLine[2].classList.toggle('header__menu_line-visible');
})

headerNavItem[3].addEventListener('mouseover', function () {
    menuHeaderButtonLine[3].classList.toggle('header__menu_line-visible');
})
headerNavItem[3].addEventListener('mouseout', function () {
    menuHeaderButtonLine[3].classList.toggle('header__menu_line-visible');
})


