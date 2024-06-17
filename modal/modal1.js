const form = document.querySelector("form");
const titleInput = document.querySelector("input");
const descriptionInput = document.querySelector("textarea");

const openModalBtn = document.querySelector(".open-modal-btn");
const closeModalBtn = document.querySelector(".modal-close-btn");
const modal = document.querySelector(".modal-container");
const rankSelect = document.querySelector("#rank");
const chooseInput = document.querySelector("#choose");
const checkboxInput = document.querySelector(".checkbox");



let index = 0;

openModalBtn.addEventListener("click", () => {
    modal.classList.add("open");
});

closeModalBtn.addEventListener("click", () => {
    modal.classList.remove("open");
});

const cardTemplate = (title, description, id, rank, choose) => {
    return `
    <div class="card">
      <div>
        <input class="checkbox" type="checkbox" id="${id}" onchange="switchItem(${id})">
        <h1>${title}</h1>
        <p>${description}</p>
        <div>
        Rank: ${rank}
        </div>
        <div>
        Status: ${choose}
        </div>
      </div>
      <div onclick="deleteItem(${id})">
        X
      </div>
    </div>
  `;
};

// const cards = document.querySelector(".cards");
const todocard = document.querySelector("#todo");
const inprogresscard = document.querySelector("#inprogress");
const donecard = document.querySelector("#done");
const blockcard = document.querySelector("#block");

// State
let data = [];


// Set State
const setData = (arr) => {
    data = arr;
    sortData();
    render();
};

const sortData = () => {
    data.sort((a, b) => {
        const rankOrder = { "High": 3, "Medium": 2, "Low": 1 };
        return rankOrder[b.rank] - rankOrder[a.rank];
    });
}
// Render
const render = () => {
    todocard.innerHTML = "";
    inprogresscard.innerHTML = "";
    donecard.innerHTML = "";
    blockcard.innerHTML = "";

    data.forEach((item) => {
        if (item.choose === "To do") {
            todocard.innerHTML += cardTemplate(item.title, item.description, item.id, item.rank, item.choose);
        } else if (item.choose === "In Progress") {
            inprogresscard.innerHTML += cardTemplate(item.title, item.description, item.id, item.rank, item.choose);
        } else if (item.choose === "Done") {
            donecard.innerHTML += cardTemplate(item.title, item.description, item.id, item.rank, item.choose);
        } else if (item.choose === "Block") {
            blockcard.innerHTML += cardTemplate(item.title, item.description, item.id, item.rank, item.choose);
        }
    });
};


form.addEventListener("submit", (event) => {
    event.preventDefault();

    const title = titleInput.value;
    const description = descriptionInput.value;
    const rank = rankSelect.value;
    const choose = chooseInput.value;


    const newData = [
        ...data,
        {
            id: index,
            title: title,
            description: description,
            rank: rank,
            choose: choose,
        },
    ];

    index++;

    setData(newData);

    modal.classList.remove("open");
});


const deleteItem = (id) => {
    const newData = [...data].filter((item) => item.id !== id);
    setData(newData);
};

const switchItem = (id) => {
    const newData = data.map((item) => {

        if (item.id === id) {
            return { ...item, choose: "Done", }
        }
        return item;
    })
    setData(newData)
};

render();
