const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const carouselSlide = document.querySelector('.carousel-slide');
const carouselItems = document.querySelectorAll('.carousel-item');
let currentIndex = 0;
function showSlide(index) {
    const slideWidth = carouselItems[0].offsetWidth;
    carouselSlide.style.transform = `translateX(-${index * slideWidth}px)`;
}
nextBtn.addEventListener('click', () => {
    if (currentIndex < carouselItems.length - 1) {
        currentIndex++;
        showSlide(currentIndex);
    } else {
        currentIndex = 0;
        showSlide(currentIndex);
    }
});
prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        showSlide(currentIndex);
    } else {
        currentIndex = carouselItems.length - 1;
        showSlide(currentIndex);
    }
});
document.querySelector('.btn').addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector('#products').scrollIntoView({ behavior: 'smooth' });
});
    