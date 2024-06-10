const timer = document.querySelector('.timer');
const startbtn = document.querySelector('.startbtn');
const stopbtn = document.querySelector('.stopbtn');
const resetbtn = document.querySelector('.resetbtn');

let count = 0.000;
let id;

startbtn.addEventListener('click', () => {
    id = setInterval(() => {
        count += 0.001;
        timer.textContent = count.toFixed(3);
    }, 1)
});
stopbtn.addEventListener('click', () => {
    clearInterval(id);
});
resetbtn.addEventListener('click', () => {
    clearInterval(id);
    timer.textContent = '0.000';
    count = 0;
});