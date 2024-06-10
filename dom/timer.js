const timer = document.querySelector('.timer');
const startbtn = document.querySelector('.startbtn');
const stopbtn = document.querySelector('.stopbtn');
const resetbtn = document.querySelector('.resetbtn');

let count = 0.0;
let id;

startbtn.addEventListener('click', () => {
    id = setInterval(() => {
        count += 0.1;
        timer.textContent = count.toFixed(2);
    }, 100)
});
stopbtn.addEventListener('click', () => {
    clearInterval(id);
});
resetbtn.addEventListener('click', () => {
    clearInterval(id);
    timer.textContent = '0.0';
    count = 0;
});