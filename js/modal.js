import products from './products.json' assert { type: 'json' };
let productCards = document.querySelectorAll('.menu__item');
let closeModalButton = document.querySelector('.modal__button');
let choiseSizeItem = document.querySelectorAll('.choise__size_item');
let choiseAdditivesItem = document.querySelectorAll('.choise__additives_item');
let purePrice=0
let finalPrice=0
let addToPriseAdditive=0
let addToPriseAmmount=0

// слушаем на какую карточку нажмут мышью или пальцем
productCards.forEach((unit,item)=>{
    unit.addEventListener('click', function(){openModal(unit,item)})
    unit.addEventListener('touch', function(){openModal(unit,item)})
})

// функция открытия модального окна
function openModal (unit,item) {
    // открываем модальное окно, блокируем скролл, затемняем окно
        document.querySelector('.modal').style = 'display: flex;'
        document.querySelector('.body').style = 'overflow: hidden;'
        document.querySelector('.fon-filter').classList.toggle('work-filter')
        
        // записываем в него инфу из json-файла
        // название + описание
        document.getElementsByClassName('modal__description_title')[0].textContent = products[item].name;
        document.getElementsByClassName('modal__description_text')[0].textContent = products[item].description;
        // объёмы
        document.getElementsByClassName('choise__size_weight')[0].textContent = products[item].sizes.s.size;
        document.getElementsByClassName('choise__size_weight')[1].textContent = products[item].sizes.m.size;
        document.getElementsByClassName('choise__size_weight')[2].textContent = products[item].sizes.l.size;
        // добавки
        document.getElementsByClassName('choise__additives_name')[0].textContent = products[item].additives[0].name;
        document.getElementsByClassName('choise__additives_name')[1].textContent = products[item].additives[1].name;
        document.getElementsByClassName('choise__additives_name')[2].textContent = products[item].additives[2].name;

        // добавляем нужную картинку
        if (item<8){document.getElementsByClassName('modal__item_img')[0].src = `./img/coffeeMenu/coffee-${item+1}.jpg`;}
        if (item>= 8&& item<12){document.getElementsByClassName('modal__item_img')[0].src = `./img/coffeeMenu/tea-${item-7}.jpg`;}
        if (item>= 12){document.getElementsByClassName('modal__item_img')[0].src = `./img/coffeeMenu/dessert-${item-11}.jpg`;}
        // по умолчанию выбирается минимальный объём
        addChoise(document.getElementsByClassName('choise__size_item')[0])
        // выводим начальную цену
        purePrice = Number(products[item].price)
        document.getElementsByClassName('modal__price_value')[0].textContent = "$"+purePrice.toFixed(2);
        finalPrice = purePrice
}

// выбираем обьём/вес/добавки
choiseSizeItem.forEach((unit,item)=>{
    unit.addEventListener('mouseover', function(){itemHover(unit);})
    unit.addEventListener('mouseout', function(){itemNoHover(unit);})
    unit.addEventListener('click', function () {
        // снимаем выбор с ранее выбранного элемента
        cancelChoise(0)
        // добавляем новый выбор
        addChoise(unit)
        // рассчитываем стоимость добавки
        if (document.getElementsByClassName('choise__size_item')[0].classList.contains('chosen_item')){
            addToPriseAmmount = Number(products[item].sizes.s['add-price'])}
        if (document.getElementsByClassName('choise__size_item')[1].classList.contains('chosen_item')){
            addToPriseAmmount = Number(products[item].sizes.m['add-price'])}
        if (document.getElementsByClassName('choise__size_item')[2].classList.contains('chosen_item')){
            addToPriseAmmount = Number(products[item].sizes.l['add-price'])}
        // рассчитываем и выводим цену заново
        finalPrice = purePrice + addToPriseAmmount + addToPriseAdditive
        document.getElementsByClassName('modal__price_value')[0].textContent = "$"+finalPrice.toFixed(2);
})}) 

// выбираем добавки
choiseAdditivesItem.forEach((unit,item)=>{
    unit.addEventListener('mouseover', function(){itemHover(unit);})
    unit.addEventListener('mouseout', function(){itemNoHover(unit);})
    unit.addEventListener('click', function () {
        // если кликаем на выбранный второй раз чтобы снять выделение
        if (unit.classList.contains('chosen_item')){
            cancelChoise2(unit)
            changeAdditives()
        }
        // кликаем в первый раз/переключение
        else { addChoise(unit)
            changeAdditives()}
}) })

// закрытие окна по кнопке, по клику на фон
closeModalButton.addEventListener('click', closeModal)
document.querySelector('.fon-filter').addEventListener('click', closeModal)

// функция закрытия модального окна, разблокируем скролл, снимаем затемнённый фон
function closeModal(){
    document.querySelector('.body').style = 'overflow: ;'
    document.querySelector('.modal').style = 'display: none;'
    document.querySelector('.fon-filter').classList.toggle('work-filter')
    // при закрытии модального забываем все выбранные элементы
    document.querySelectorAll('.chosen_item').forEach((unit)=>{cancelChoise2(unit)})
}

// функция снятия выбора с элемента выбранного ранее
function cancelChoise(i) {
    document.getElementsByClassName('chosen_item')[i].classList.toggle('chosen_item')
    document.getElementsByClassName('chosen_item_label')[i].classList.toggle('chosen_item_label')
    document.getElementsByClassName('chosen_item_content')[i].classList.toggle('chosen_item_content')
}

// функция снятия выбора с элемента при повторном нажатии
function cancelChoise2 (unit){
    unit.classList.remove('chosen_item')
    unit.children[0].classList.remove('chosen_item_label')
    unit.children[1].classList.remove('chosen_item_content')
}

// функция добавление выбора элемента
function addChoise (unit){
    unit.classList.add('chosen_item')
    unit.children[0].classList.add('chosen_item_label')
    unit.children[1].classList.add('chosen_item_content')
}

// функция перерасчёта стоимости с учётом добавления/вычитания добавок
function changeAdditives(){
    addToPriseAdditive = 0
    choiseAdditivesItem.forEach((unit,item)=>{
        if(unit.classList.contains('chosen_item')){
            addToPriseAdditive  = addToPriseAdditive + Number(products[item].additives[item]['add-price'])}
    })
    finalPrice = purePrice + addToPriseAmmount + addToPriseAdditive
    document.getElementsByClassName('modal__price_value')[0].textContent = "$"+finalPrice.toFixed(2);
}

// изменение стилей элемента выбора при наведении мыши
function itemHover(unit){
    unit.style = 'background-color: #403F3D;'
    unit.children[0].style = 'background-color: #E1D4C9;'
    unit.children[1].style = 'color: #C1B6AD;'
}

// изменение стилей элемента выбора при убирании мыши
function itemNoHover(unit){
    unit.style = 'background-color: '
    unit.children[0].style = 'background-color: '
    unit.children[1].style = 'color: '
}



