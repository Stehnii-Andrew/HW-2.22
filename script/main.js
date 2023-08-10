const main = document.querySelector('.main');
const button1 = document.querySelector('.button1');
const button2 = document.querySelector('.button2');

button1.addEventListener('click', (ev) => {
    main.classList.toggle('background');
});

button2.addEventListener('click', (ev) => {
    main.innerHTML = Math.floor(Math.random() *1000000) + 1;
});