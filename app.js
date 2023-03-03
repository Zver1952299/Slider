const btnUp = document.querySelector('.up-button'),
      btnDown = document.querySelector('.down-button'),
      container = document.querySelector('.container'),
      sideBar = document.querySelector('.sidebar'),
      mainSlide = document.querySelector('.main-slide'),
      slideCounter = mainSlide.querySelectorAll('div').length;

let activeSlideIndex = 0;

sideBar.style.top = `-${(slideCounter - 1) * 100}vh`;

btnUp.addEventListener('click', () => {
    changeSlide('up');
});

btnDown.addEventListener('click', () => {
    changeSlide('down');
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowUp') {
        changeSlide('up');
    } else if (e.key === 'ArrowDown') {
        changeSlide('down');
    }
});

function changeSlide(direction) {
    if (direction === 'up') {
        activeSlideIndex++;
        if (activeSlideIndex === slideCounter) {
            activeSlideIndex = 0;
        }
    } else if (direction === 'down') {
        activeSlideIndex--;
        if (activeSlideIndex < 0) {
            activeSlideIndex = slideCounter - 1;
        }
    }

    const height = container.clientHeight;

    mainSlide.style.transform = `translateY(-${activeSlideIndex * height}px)`;

    sideBar.style.transform = `translateY(${activeSlideIndex * height}px)`;
}