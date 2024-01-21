let enjoyContainerButton = document.querySelector('.enjoy__container_button');
let enjoyContainerButtonImg = document.querySelector('.enjoy__container_button-img');

enjoyContainerButton.addEventListener('mouseover', function () {
    enjoyContainerButtonImg.classList.toggle('enjoy__container_button-img-visible');
})

enjoyContainerButton.addEventListener('mouseout', function () {
    enjoyContainerButtonImg.classList.toggle('enjoy__container_button-img-visible');
})