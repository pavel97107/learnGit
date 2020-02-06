'use strict';

let numberBooks = document.querySelectorAll('.books');
let book = document.querySelectorAll('.book');
let ulSelector = document.querySelectorAll('ul');
let liSelector = document.querySelectorAll('li');

numberBooks[0].insertBefore(book[1], book[0]);
numberBooks[0].insertBefore(book[4], book[2]);
numberBooks[0].insertBefore(book[3], book[5]);
numberBooks[0].insertBefore(book[3], book[2]);
numberBooks[0].insertBefore(book[5], book[2]);


ulSelector[0].insertBefore(liSelector[6], liSelector[4]);
ulSelector[0].insertBefore(liSelector[8], liSelector[4]);
ulSelector[0].appendChild(liSelector[2]);
ulSelector[0].insertBefore(liSelector[2], liSelector[10]);




ulSelector[5].insertBefore(liSelector[55], liSelector[49]);
ulSelector[5].insertBefore(liSelector[49], liSelector[51]);
ulSelector[5].insertBefore(liSelector[51], liSelector[54]);
ulSelector[5].insertBefore(liSelector[48], liSelector[52]);
ulSelector[5].insertBefore(liSelector[50], liSelector[48]);



let newElemLi = document.createElement('li');
    newElemLi.textContent = ('Глава 8: За пределами ES6');
    ulSelector[2].appendChild(newElemLi);
    ulSelector[2].appendChild(liSelector[26]);



let bgImage = document.querySelector('body');
    bgImage.setAttribute('style', 'background-image: url(./image/you-dont-know-js.jpg);');

    let newTitle = document.querySelectorAll('a');
    let newTitleElement = newTitle.item(2);
    newTitleElement.textContent = "Книга 3. this и Прототипы Объектов";
    



let body = document.querySelectorAll('body');
let adv = document.querySelectorAll('.adv');
body[0].removeChild(adv[0]);




console.log(numberBooks, book, newTitle, liSelector, ulSelector, body, adv);