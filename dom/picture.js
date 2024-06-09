const imgContainer = document.querySelector('.img-container');
const images = document.querySelectorAll('.img-container img');
const btnPre = document.querySelector('.btn1');
const btnNext = document.querySelector('.btn2');

let index = 0;

function showImage(index) {
    images.forEach((img, i) => {
        if (i === index) {
            img.style.transform = 'translateX(0)';
        } else if (i < index) {
            img.style.transform = 'translateX(-400px)';
        } else {
            img.style.transform = 'translateX(400px)';
        }
    });
}

btnNext.addEventListener('click', () => {
    if (index < images.length - 1) {
        index++;
    } else {
        index = 0; // Optionally, wrap around to the first image
    }
    showImage(index);
});

btnPre.addEventListener('click', () => {
    if (index > 0) {
        index--;
    } else {
        index = images.length - 1; // Optionally, wrap around to the last image
    }
    showImage(index);
});

// Initialize the first image view
showImage(index);
