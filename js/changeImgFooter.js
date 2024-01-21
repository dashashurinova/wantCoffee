// changing pictures on the buttons of contacts in the footer

let footerFavsCircle = document.querySelectorAll('.footer__container_first-favs-circle');


 // twitter
footerFavsCircle[0].addEventListener('mouseover', function () {
    document.getElementById('twitCont').src="./img/twitter-dark.svg"
})
footerFavsCircle[0].addEventListener('mouseout', function () {
    document.getElementById('twitCont').src="./img/twitter.svg"
})

 // inst
footerFavsCircle[1].addEventListener('mouseover', function () {
    document.getElementById('instCont').src="./img/instagram-dark.svg"
})
footerFavsCircle[1].addEventListener('mouseout', function () {
    document.getElementById('instCont').src="./img/instagram.svg"
})

 // fb
footerFavsCircle[2].addEventListener('mouseover', function () {
    document.getElementById('fbCont').src="./img/facebook-dark.svg"
})
footerFavsCircle[2].addEventListener('mouseout', function () {
    document.getElementById('fbCont').src="./img/facebook.svg"
})