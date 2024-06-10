const timer = document.querySelector('.timer');
const startbtn = document.querySelector('.startbtn');
const stopbtn = document.querySelector('.stopbtn');
const resetbtn = document.querySelector('.resetbtn');

let count = 0.00;
let id;

startbtn.addEventListener('click', () => {
    id = setInterval(() => {
        count += 0.01;
        timer.textContent = count.toFixed(2);
    }, 10)
});
stopbtn.addEventListener('click', () => {
    clearInterval(id);
});
resetbtn.addEventListener('click', () => {
    clearInterval(id);
    timer.textContent = '0.00';
    count = 0;
});