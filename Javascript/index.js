// Подключен шаблонный js для слайдера
document.addEventListener('DOMContentLoaded', function() {
    var swiper1 = new Swiper('.swiper-container', {
        // slidesPerView: 4,
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
})