const a = document.querySelectorAll(".box");

let turn = 0;
a.forEach((box) => {
    box.addEventListener("click", () => {
        if (box.textContent === "" && turn === 0) {
            box.textContent = "X";
            turn = 1;
        } else if (box.textContent === "" && turn === 1) {
            box.textContent = "O";
            turn = 0;
        }
    })

});

const b = document.querySelector("#restart");
b.addEventListener("click", () => {
    a.forEach((box) => {
        box.textContent = "";
    });
    turn = 0;
})