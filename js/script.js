let button = document.getElementById('burger');
let navigation = document.getElementById('menu');
let wrp = document.getElementById('wrp');

button.addEventListener('click', function () {
    navigation.classList.toggle('display-block');
    wrp.classList.toggle('br-display-block');
});

let button_catalog = document.getElementById('button-catalog');
let menu_catalog = document.getElementById('menu-catalog');

button_catalog.addEventListener('click', function () {
    menu_catalog.classList.toggle('cat-display-block');
    button_catalog.classList.toggle('catalog__filter-button-pink');
});

let button_catalog_trending = document.getElementById('button-catalog-trending');
let menu_catalog_trending = document.getElementById('menu-catalog-trending');

button_catalog_trending.addEventListener('click', function () {
    menu_catalog_trending.classList.toggle('cat-display-block');
});

let button_catalog_size = document.getElementById('button-catalog-size');
let menu_catalog_size = document.getElementById('menu-catalog-size');

button_catalog_size.addEventListener('click', function () {
    menu_catalog_size.classList.toggle('cat-display-block');
});

let button_catalog_price = document.getElementById('button-catalog-price');
let menu_catalog_price = document.getElementById('menu-catalog-price');

button_catalog_price.addEventListener('click', function () {
    menu_catalog_price.classList.toggle('cat-display-block');
});