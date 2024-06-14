const modal = document.querySelector(".modal-container");
const openModalBtn = document.querySelector(".open-modal-btn");
const closeModalBtn = document.querySelector(".modal-close-btn");
const form = document.querySelector("form");

const cards = document.querySelector(".cards");

const titleInput = document.querySelector("input");
const descInput = document.querySelector("textarea");


openModalBtn.addEventListener("click", () => {
    modal.classList.add("open");
});

closeModalBtn.addEventListener("click", () => {
    modal.classList.remove("open");
});

const cardTemplate = (title, description) => {
    return `
    <div class="card">
      <div>
        <h1>${title}</h1>
        <p>${description}</p>
      </div>
      <div class="remove-btn">
        X
      </div>
    </div>
  `;
};

let data = [
    {
        title: "Hello",
        description: "Hiii",
    }
]

const setData = (arr) => {
    data = arr;
    render();
}
const render = () => {
    cards.innerHTML = "";

    data.forEach((item) => {
        cards.innerHTML += cardTemplate(item.title, item.description);
    })
}

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const title = titleInput.value;
    const description = descInput.value;

    const newData = [
        ...data,
        {
            title: title,
            description: description,
        }
    ]
    setData(newData);
    console.log(data)

    modal.classList.remove("open");
});
render();