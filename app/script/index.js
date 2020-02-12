'use strict';

let body = document.querySelectorAll('body');
let big = document.querySelectorAll('.big');
console.log(body);
console.log(big);

function DomElement(selector, height, width, bg, fontSize){
    this.selector = selector;
    this.height = height;
    this.width = width;
    this.bg = bg;
    this.fontSize = fontSize;
}

DomElement.prototype.createElement = function(){
    if(this.selector === '.'){
      let block = document.createElement('div');
          block.classList.add('block');
          block.textContent = 'Пока';
          block.style.cssText = 'width: 250px; height: 200px; background-color: red; font-size: 20px;';
          console.log(block);
          body[0].appendChild(block, big[0]);
    } else if(this.selector === '#') {
       let elem = document.createElement('div');
       elem.id = 'elem2';
       elem.textContent = 'Привет';
       elem.style.cssText = 'width: 250px; height: 200px; background-color: blue; font-size: 20px;';
       console.log(elem);
       body[0].appendChild(elem, big[0]);
    }
};

const newObject = new DomElement('#');
console.log(newObject);
newObject.createElement();