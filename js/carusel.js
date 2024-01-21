let i = 1
let turnRight = document.querySelector('.fav__content_button-right')
let turnLeft = document.querySelector('.fav__content_button-left')
let paginaton = document.querySelectorAll('.fav__content_beverage-pag-item')
let slider = document.querySelector('.slider')
let width, time
let pagItemsActive = document.querySelectorAll('.fav__content_beverage-pag-item-active')
const step = 4000
let shir
let x1;
let x2;
let xTotal

// разово добавляем класс pag__active в первую пагинацию при загрузке, иначе не виден 
// процесс загрузки первой картинки при начальной загрузке
pagItemsActive[0].classList.toggle('pag__active')

// объявляем переменную после того, как добавили этот стиль в дом
let pagActive = document.querySelector('.pag__active')

// свайп вправо или влево вызывает соответствующую функцию перелистывания
document.addEventListener('mousedown',() => x1=event.pageX);
document.addEventListener('touchstart',() => x1=event.pageX);
document.addEventListener('mouseup', () => {
   x2=event.pageX;
   xTotal=x2-x1
   dragSvipe()
});
document.addEventListener('touchend', () => {
   x2=event.pageX;
   xTotal=x2-x1
   dragSvipe()
});

// листаем слайдер при свайпе мышью, если свайп более 20 пикселей
function dragSvipe(){
   if (xTotal>=20){
      console.log(xTotal+' left');
      moveLeft()
      return 
   }
   else if (xTotal<-20) {
      console.log('unpress '+ x1);
      console.log('unpress '+ x2);
      console.log('unpress '+ xTotal+ ' right');
      moveRight()
      return 
      }
}

// при наведении останавливаем листание, заполнение пагинации, 
// возобновляем при убирании мыши
let hover;
slider.addEventListener('mouseover', () => {hover = 1;
   document.querySelector('.pag__active').style="animation-play-state : paused";
});
slider.addEventListener('mouseout', () => {hover = 0;
   document.querySelector('.pag__active').style="animation-play-state : play";
});

// листаем вперед
function moveRight() {
   pagItemsActive[i-1].classList.toggle('pag__active')
   if (i===3){i=1} else {i=i+1}
   if (window.innerWidth>760) {slider.style.transform = `translateX(-${(i-1)*480}px)`}
   else {slider.style.transform = `translateX(-${(i-1)*348}px)`}
   pagItemsActive[i-1].classList.toggle('pag__active')
}

// листаем назад
function moveLeft() {
   pagItemsActive[i-1].classList.toggle('pag__active')
   if (i===1){i=3} else {i=i-1}
   if (window.innerWidth>760) {slider.style.transform = `translateX(-${(i-1)*480}px)`}
   else {slider.style.transform = `translateX(-${(i-1)*348}px)`}
   pagItemsActive[i-1].classList.toggle('pag__active')
}

// таймер автоматического листания
let timerId = setInterval(() => !hover && moveRight(), step);

// кнопки
turnRight.addEventListener('click', function (){clearInterval(timerId);moveRight();timerId = setInterval(() => moveRight(), step)})
turnLeft.addEventListener('click', function (){clearInterval(timerId);moveLeft();timerId = setInterval(() => moveRight(), step)})
