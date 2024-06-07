const imgs = document.querySelector(".img-container")
const btn1 = document.querySelector(".btn1")
btn1.addEventListener("click", () => {
    imgs.style.border = "5px solid green";
    imgs.style.transform = "translatex(-400px)";
})
const btn2 = document.querySelector(".btn2")
btn2.addEventListener("click", () => {
    imgs.style.border = "5px solid red";
    imgs.style.transform = "translatex(400px)";
})
