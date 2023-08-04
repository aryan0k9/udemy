let displayImage = document.querySelectorAll(".image");
let image = document.createElement('img');
let appendImage = document.querySelector('.overlay_img');
let overlay = document.querySelector('#overlay');
let cross = document.querySelector('#cross');


const displayClose = () => {
    overlay.style.display = 'none';
    overlay.style.zIndex = 0
    appendImage.style.display = 'none';
    appendImage.style.zIndex = 0
    enableScroll();
}

for (let i = 0; i < displayImage.length; i++) {
    displayImage[i].addEventListener("click", (e) => {
        overlay.style.display = 'block';
        overlay.style.zIndex = 1
        appendImage.style.display = 'block';
        appendImage.style.zIndex = 1
        image.src = `asset/images${i + 1}.jpg`;
        if (e.target.alt == i + 1) {
            appendImage.appendChild(image);
            disableScroll();
        }
    });
}

addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        if (overlay.style.display == 'block') {
            displayClose();
        }
    }
})

const disableScroll = () => {
    scrollTop = window.pageYoffset || document.documentElement.scrollTop;
    scrollLeft = window.pageXoffset || document.documentElement.scrollLeft;

    window.onscroll = function () {
        window.scrollTo(screenLeft, scrollTop);
    };
}
const enableScroll = () => {
    window.onscroll = function () { };
}
overlay.addEventListener('click', displayClose);