// changing pictures on the buttons apple and google on light colour

let appContentButton = document.querySelectorAll('.app__content_button');
let appContentButtonImg = document.querySelectorAll('.app__content_button-img');
// apple
appContentButton[0].addEventListener('mouseover', function () {
    document.getElementById('appleImg').src="./img/appleLight.svg"
})
appContentButton[0].addEventListener('mouseout', function () {
    document.getElementById('appleImg').src="./img/iconApple.svg"
})

 // google
appContentButton[1].addEventListener('mouseover', function () {
    document.getElementById('GPImg').src="./img/googleLight.svg"
})
appContentButton[1].addEventListener('mouseout', function () {
    document.getElementById('GPImg').src="./img/icon.svg"
})
