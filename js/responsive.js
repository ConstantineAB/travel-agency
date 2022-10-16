// Меню бургер
const iconMenu = document.querySelector('.menu__icon');
if (iconMenu) {
    const menuBody = document.querySelector('.menu__body')
    iconMenu.addEventListener('click', function(e) {
        iconMenu.classList.toggle('__active')
        menuBody.classList.toggle('__active')
    });
}

// Кнопка открывающая меню пользователя
const userButton = document.querySelector('#user');
const menuSubList = document.querySelector('.menu__sub-list');
if (userButton) {
    userButton.addEventListener('click', function(e) {
        menuSubList.classList.toggle('__active');
    });
}

// Мобильная версия таблицы валютных бирж
const listContentTitle = document.querySelector('.section-list-content__mobile__item__title');
const listContentMobile = document.querySelector('.section-list-content__mobile');
const listContentTitleImg = document.querySelector('.section-list-content__mobile__item__title__img');
const listContentPanel = document.querySelector('.section-list-content__mobile__panel');
if (listContentTitle) {
    listContentTitle.addEventListener('click', function(e) {
        listContentMobile.classList.toggle('__active');
        listContentTitleImg.classList.toggle('__active');
        listContentPanel.classList.toggle('__active');
    });
}