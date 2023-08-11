const main = document.querySelector('.main');
const button1 = document.querySelector('.button1');
const button2 = document.querySelector('.button2');
const select1 = document.querySelector('.select1');
const select2 = document.querySelector('.select2');
const firstMain = document.querySelector('.first_main');
const secondMain = document.querySelector('.second_main');

let firstMainValue = true; 
let secondMainValue = false;

select1.addEventListener('click', (ev) => {
    firstMainValue = true; 
    secondMainValue = false;
});

select2.addEventListener('click', (ev) => {
    firstMainValue = false; 
    secondMainValue = true;
});

button1.addEventListener('click', (ev) => {
    if (firstMainValue === true) {
        firstMain.classList.toggle('background');
    } else if (secondMainValue === true){
        secondMain.classList.toggle('background');
    } else {

    };
    
});

button2.addEventListener('click', (ev) => {
    if (firstMainValue === true) {
        firstMain.innerHTML = Math.floor(Math.random() *1000000) + 1;
    } else if (secondMainValue === true){
        secondMain.innerHTML = Math.floor(Math.random() *1000000) + 1;
    } else {

    };
});

