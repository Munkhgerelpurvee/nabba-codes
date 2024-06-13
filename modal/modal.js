const container = document.querySelector('.modal');
const openmodelbtn = document.querySelector('#openmodelbtn');
const exitBtn = document.querySelector('.exitBtn');
const createBtn = document.querySelector('.createBtn')
const titleInput = document.querySelector('.titleInput')
const descInput = document.querySelector('.descInput')
const form = document.querySelector('form')
const cards = document.querySelector('.cards')
const cardexitBtn = document.querySelector('#cardexitBtn')


openmodelbtn.addEventListener('click', () => {
    container.classList.add("active");

});

exitBtn.addEventListener('click', () => {
    container.classList.remove("active");
});

const cardtemplate = (title, desc) => {
    return `<div class="card">
    <div>
    <h1>${title}</h1>
    <p>${desc}</p>
    </div>
    <div id="cardexitBtn"><i class="fa-solid fa-x"></i></div>
    </div>`
};

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const title = titleInput.value;
    const desc = descInput.value;
    const card = cardtemplate(title, desc)
    cards.innerHTML += card;
    container.classList.remove("active");

});

cardexitBtn.addEventListener('click', () => {
    container.style.backgroundColor = "red"
});
