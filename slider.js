let sliderImages = document.querySelectorAll('.slide');
const arrowRight = document.querySelector('[data-right]');
const arrowLeft = document.querySelector('[data-left]');
current = 0;



//Left arrow click
arrowLeft.addEventListener('click', () => {
    if (current === 0) {
        current = sliderImages.length;
    }
    slideLeft();
})

//Right arrow click
arrowRight.addEventListener('click', () => {
    if (current === sliderImages.length - 1) {
        current = -1;
    }
    slideRight();
})

// Clear all images
function reset() {
    for (let i = 0; i < sliderImages.length; i++) {
        sliderImages[i].style.display = 'none';
    }
}

//Init slider
function startSlide() {
    reset();
    console.log(current)
    sliderImages[current].style.display = 'block';
}

//show prev
function slideLeft() {
    reset();
    sliderImages[current - 1].style.display = 'block';
    current--;
}

//show next
function slideRight() {
    reset();
    sliderImages[current + 1].style.display = 'block';
    current++;
}



