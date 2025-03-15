document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.querySelector('#carouselExampleIndicators');
    const indicators = carousel.querySelectorAll('.carousel-indicators li');
    const items = carousel.querySelectorAll('.carousel-item');
    let currentIndex = 0;

    function showSlide(index) {
        items[currentIndex].classList.remove('active');
        indicators[currentIndex].classList.remove('active');
        currentIndex = index;
        items[currentIndex].classList.add('active');
        indicators[currentIndex].classList.add('active');
    }

    document.querySelector('.btn-prev').addEventListener('click', function() {
        const newIndex = (currentIndex === 0) ? items.length - 1 : currentIndex - 1;
        showSlide(newIndex);
    });

    document.querySelector('.btn-next').addEventListener('click', function() {
        const newIndex = (currentIndex === items.length - 1) ? 0 : currentIndex + 1;
        showSlide(newIndex);
    });

    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', function() {
            showSlide(index);
        });
    });
});
