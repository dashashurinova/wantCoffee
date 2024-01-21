let footerLinks = document.querySelectorAll('.footer__container_second-content');
let footerLinksLine = document.querySelectorAll('.footer__container_second-content-line');

// lines under links when hover
footerLinks[0].addEventListener('mouseover', function () {
    footerLinksLine[0].classList.toggle('line_visibility');
})
footerLinks[0].addEventListener('mouseout', function () {
    footerLinksLine[0].classList.toggle('line_visibility');
})

footerLinks[1].addEventListener('mouseover', function () {
    footerLinksLine[1].classList.toggle('line_visibility');
})
footerLinks[1].addEventListener('mouseout', function () {
    footerLinksLine[1].classList.toggle('line_visibility');
})

