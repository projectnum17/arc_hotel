const slidersConfig = () => {
    if (typeof Swiper === 'undefined') return;

    const roomsSlider = () => {
        const sliderEl = document.querySelector('.js-rooms-slider');
        // const navPanel = document.querySelector('.js-doctors-nav');
        // if (!sliderEl || !navPanel) return;

        const slideCount = sliderEl.querySelectorAll('.swiper-slide');
        const sliderWrapper = sliderEl.querySelector('.swiper-wrapper');

        if (slideCount.length < 2) {
            // navPanel.style.display = 'none';
            sliderWrapper.classList.add('is-centered');
        }

        new Swiper(sliderEl, {
            spaceBetween: 45,
            slidesPerView: 2.5,
            grabCursor: true,
            speed: 900,
            navigation: {
                prevEl: '.js-rooms-prev',
                nextEl: '.js-rooms-next',
            },
        });
    };

    roomsSlider();
};

export default slidersConfig;
