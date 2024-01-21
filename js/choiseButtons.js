let choiseSectionItem = document.querySelectorAll('.choise__section_item');
let choiseSectionItemText = document.querySelectorAll('.choise__section_item-text');
let choiseSectionItemCircle = document.querySelectorAll('.choise__section_item-circle');
let coffee = document.querySelectorAll('.coffee');
let tea = document.querySelectorAll('.tea');
let dessert = document.querySelectorAll('.dessert');
let loadButton = document.querySelector('.loadButton');

// переключаем разделы кофе/чай/дессерты
choiseSectionItem.forEach((unit,item)=>{
    unit.addEventListener('click', function () {
        choiseSectionItem.forEach((unit,item)=>{
            choiseSectionItemText[item].classList.remove('choise__section_item-text-active');
            choiseSectionItem[item].classList.remove('choise__section_item-active');
            choiseSectionItemCircle[item].classList.remove('choise__section_item-circle-active')
            })

        choiseSectionItemText[item].classList.toggle('choise__section_item-text-active');
        choiseSectionItem[item].classList.toggle('choise__section_item-active');
        choiseSectionItemCircle[item].classList.toggle('choise__section_item-circle-active');

// меняем содержимое меню при переключении раздела кофе0/чай1/дессерты2
        if (choiseSectionItem[0].classList.contains('choise__section_item-active')){
            coffee.forEach((unit)=>{ unit.classList.remove('menu__item_inv');})
            tea.forEach((unit)=>{ unit.classList.add('menu__item_inv');})
            dessert.forEach((unit)=>{ unit.classList.add('menu__item_inv');})
            loadButton.style["display"] = "block";
        }

        if (choiseSectionItem[1].classList.contains('choise__section_item-active')){
            tea.forEach((unit)=>{ unit.classList.remove('menu__item_inv');})
            coffee.forEach((unit)=>{ unit.classList.add('menu__item_inv');})
            dessert.forEach((unit)=>{ unit.classList.add('menu__item_inv');})
            loadButton.style["display"] = "none";
        }

        if (choiseSectionItem[2].classList.contains('choise__section_item-active')){
            dessert.forEach((unit)=>{ unit.classList.remove('menu__item_inv');})
            coffee.forEach((unit)=>{ unit.classList.add('menu__item_inv');})
            tea.forEach((unit)=>{ unit.classList.add('menu__item_inv');})
            loadButton.style["display"] = "block";
        }
})})

// подгрузка скрытых карточек
// при нажатии на кнопку открываются ещё 4 элемента, кнопка загрузки исчезает

loadButton.addEventListener('click', function () {
// coffee
    if (choiseSectionItem[0].classList.contains('choise__section_item-active')){
        coffee.forEach((unit)=>{ unit.classList.remove('sec_page');})
        loadButton.style["display"] = "none";
    }
// dessert
    if (choiseSectionItem[2].classList.contains('choise__section_item-active')){
        dessert.forEach((unit)=>{ unit.classList.remove('sec_page');})
        loadButton.style["display"] = "none";
    }
})
