const carousel = document.querySelector('.carousel');
const carouselInner = carousel.querySelector('.carousel-inner');
const carouselItems = carousel.querySelectorAll('.carousel-item');
let currentItem = 0;

function nextItem() {
    currentItem++;
    if (currentItem >= carouselItems.length) {
        currentItem = 0;
    }
    updateCarousel();
}

function prevItem() {
    currentItem--;
    if (currentItem < 0) {
        currentItem = carouselItems.length - 1;
    }
    updateCarousel();
}

function updateCarousel() {
    carouselItems.forEach((item, index) => {
        if (index === currentItem) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });
    carouselInner.style.transform = `translateX(-${currentItem * 100}%)`;
}


updateCarousel();

const prevButton = carousel.querySelector('.carousel-prev');
prevButton.addEventListener('click', prevItem);

const nextButton = carousel.querySelector('.carousel-next');
nextButton.addEventListener('click', nextItem);