// changing pictures on the buttons next prev fav section
let favContentButtonRight = document.querySelector('.fav__content_button-right');
let favContentButtonLeft = document.querySelector('.fav__content_button-left');

// right
favContentButtonRight.addEventListener('mouseover', function () {
    document.getElementById('rightArr').src="./img/arrow-right-light.svg"
})
favContentButtonRight.addEventListener('mouseout', function () {
    document.getElementById('rightArr').src="./img/arrow-right.svg"
})

// left
favContentButtonLeft.addEventListener('mouseover', function () {
    document.getElementById('leftArr').src="./img/arrow-left-light.svg"
})
favContentButtonLeft.addEventListener('mouseout', function () {
    document.getElementById('leftArr').src="./img/Vector.svg"
})