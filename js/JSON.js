import products from './products.json' assert { type: 'json' };
console.log(products);

// записываем инфу из json в карточки продуктов
//coffee
for (let i=0;i<8;i++){
document.getElementsByClassName('menu__item_img')[i].src = `./img/coffeeMenu/coffee-${i+1}.jpg`;
document.getElementsByClassName('menu__item_title')[i].textContent = products[i].name;
document.getElementsByClassName('menu__item_text')[i].textContent = products[i].description;
document.getElementsByClassName('menu__item_price')[i].textContent = "$"+products[i].price;
}
//tea
for (let i=8;i<12;i++){
    document.getElementsByClassName('menu__item_img')[i].src = `./img/coffeeMenu/tea-${i-7}.jpg`;
    document.getElementsByClassName('menu__item_title')[i].textContent = products[i].name;
    document.getElementsByClassName('menu__item_text')[i].textContent = products[i].description;
    document.getElementsByClassName('menu__item_price')[i].textContent = "$"+products[i].price;
}
//desserts
for (let i=12;i<20;i++){
    document.getElementsByClassName('menu__item_img')[i].src = `./img/coffeeMenu/dessert-${i-11}.jpg`;
    document.getElementsByClassName('menu__item_title')[i].textContent = products[i].name;
    document.getElementsByClassName('menu__item_text')[i].textContent = products[i].description;
    document.getElementsByClassName('menu__item_price')[i].textContent = "$"+products[i].price;
}