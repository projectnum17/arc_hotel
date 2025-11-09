const slidersConfig = () => {
    if (typeof Swiper === 'undefined') return;

    const roomsSlider = () => {
        const sliderEl = document.querySelector('.js-rooms-slider');
        const navPanel = document.querySelector('.js-rooms-nav');
        if (!sliderEl || !navPanel) return;

        const slideCount = sliderEl.querySelectorAll('.swiper-slide');
        const sliderWrapper = sliderEl.querySelector('.swiper-wrapper');

        if (slideCount.length < 2) {
            navPanel.style.display = 'none';
            sliderWrapper.classList.add('is-centered');
            return;
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

    const reviewsSlider = () => {
        const sliderEl = document.querySelector('.js-reviews-slider');
        const navPanel = document.querySelector('.js-reviews-nav');
        if (!sliderEl || !navPanel) return;

        const slideCount = sliderEl.querySelectorAll('.swiper-slide');
        const sliderWrapper = sliderEl.querySelector('.swiper-wrapper');

        if (slideCount.length < 2) {
            navPanel.style.display = 'none';
            sliderWrapper.classList.add('is-centered');
            return;
        }

        new Swiper(sliderEl, {
            spaceBetween: 15,
            slidesPerView: 1,
            grabCursor: true,
            speed: 900,
            navigation: {
                prevEl: '.js-reviews-prev',
                nextEl: '.js-reviews-next',
            },
        });
    };

    roomsSlider();
    reviewsSlider();
};

export default slidersConfig;
