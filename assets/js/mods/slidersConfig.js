const slidersConfig = () => {
    if (typeof Swiper === 'undefined') return;

    const roomsSlider = () => {
        const sliderEl = document.querySelector('.js-rooms-slider');
        const navPanel = document.querySelector('.js-rooms-nav');
        if (!sliderEl || !navPanel) return;

        const slideCount = sliderEl.querySelectorAll('.swiper-slide');
        const sliderWrapper = sliderEl.querySelector('.swiper-wrapper');

        if (slideCount.length < 3) {
            navPanel.style.display = 'none';
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
            breakpoints: {
                0: {
                    spaceBetween: 12,
                    slidesPerView: 1,
                },
                768: {
                    spaceBetween: 30,
                    slidesPerView: 2,
                },
                992: {
                    spaceBetween: 45,
                    slidesPerView: 2.5,
                },
            },
        });
    };

    const relaxSlider = () => {
        const sliderEl = document.querySelector('.js-relax-slider');
        const navPanel = document.querySelector('.js-relax-nav');
        if (!sliderEl || !navPanel) return;

        const slideCount = sliderEl.querySelectorAll('.swiper-slide');
        const sliderWrapper = sliderEl.querySelector('.swiper-wrapper');

        if (slideCount.length < 3) {
            navPanel.style.display = 'none';
            sliderWrapper.classList.add('is-centered');
        }

        new Swiper(sliderEl, {
            spaceBetween: 12,
            slidesPerView: 1,
            grabCursor: true,
            speed: 900,
            navigation: {
                prevEl: '.js-relax-prev',
                nextEl: '.js-relax-next',
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

    const conceptSlider = () => {
        const sliderEl = document.querySelector('.js-concept-slider');
        const navPanel = document.querySelector('.js-concept-nav');
        if (!sliderEl || !navPanel) return;

        const slideCount = sliderEl.querySelectorAll('.swiper-slide');
        const sliderWrapper = sliderEl.querySelector('.swiper-wrapper');

        if (slideCount.length < 3) {
            navPanel.style.display = 'none';
            sliderWrapper.classList.add('is-centered');
        }

        new Swiper(sliderEl, {
            spaceBetween: 40,
            slidesPerView: 2.5,
            grabCursor: true,
            speed: 900,
            navigation: {
                prevEl: '.js-concept-prev',
                nextEl: '.js-concept-next',
            },
            pagination: {
                el: '.js-concept-progress',
                type: 'progressbar',
            },
        });
    };

    const infoSlider = () => {
        const sliderEl = document.querySelector('.js-info-slider');
        const navPanel = document.querySelector('.js-info-nav');
        if (!sliderEl || !navPanel) return;

        const slideCount = sliderEl.querySelectorAll('.swiper-slide');
        const sliderWrapper = sliderEl.querySelector('.swiper-wrapper');

        if (slideCount.length < 4) {
            navPanel.style.display = 'none';
            sliderWrapper.classList.add('is-centered');
        }

        new Swiper(sliderEl, {
            spaceBetween: 40,
            slidesPerView: 3,
            grabCursor: true,
            speed: 900,
            navigation: {
                prevEl: '.js-info-prev',
                nextEl: '.js-info-next',
            },
            pagination: {
                el: '.js-info-progress',
                type: 'progressbar',
            },
            breakpoints: {
                0: {
                    spaceBetween: 12,
                    slidesPerView: 1,
                },
                768: {
                    spaceBetween: 30,
                    slidesPerView: 2,
                },
                992: {
                    spaceBetween: 40,
                    slidesPerView: 3,
                },
            },
        });
    };

    const gallerySlider = () => {
        const sliderEl = document.querySelector('.js-gallery-slider');
        const navPanel = document.querySelector('.js-gallery-nav');
        if (!sliderEl || !navPanel) return;

        const slideCount = sliderEl.querySelectorAll('.swiper-slide');
        const sliderWrapper = sliderEl.querySelector('.swiper-wrapper');

        if (slideCount.length < 4) {
            navPanel.style.display = 'none';
            sliderWrapper.classList.add('is-centered');
        }

        new Swiper(sliderEl, {
            spaceBetween: 40,
            slidesPerView: 3,
            grabCursor: true,
            speed: 900,
            navigation: {
                prevEl: '.js-gallery-prev',
                nextEl: '.js-gallery-next',
            },
            pagination: {
                el: '.js-gallery-progress',
                type: 'progressbar',
            },
            breakpoints: {
                0: {
                    spaceBetween: 12,
                    slidesPerView: 1,
                },
                768: {
                    spaceBetween: 30,
                    slidesPerView: 2,
                },
                992: {
                    spaceBetween: 40,
                    slidesPerView: 3,
                },
            },
        });
    };

    const iventsSlider = () => {
        const sliderEl = document.querySelector('.js-ivents-slider');
        const navPanel = document.querySelector('.js-ivents-nav');
        if (!sliderEl || !navPanel) return;

        const slideCount = sliderEl.querySelectorAll('.swiper-slide');
        const sliderWrapper = sliderEl.querySelector('.swiper-wrapper');

        if (slideCount.length < 2) {
            navPanel.style.display = 'none';
            sliderWrapper.classList.add('is-centered');
        }

        new Swiper(sliderEl, {
            spaceBetween: 48,
            slidesPerView: 2.2,
            initialSlide: 1,
            centeredSlidesBounds: true,
            normalizeSlideIndex: false,
            grabCursor: true,
            centeredSlides: true,
            speed: 900,
            navigation: {
                prevEl: '.js-ivents-prev',
                nextEl: '.js-ivents-next',
            },
            pagination: {
                el: '.js-ivents-progress',
                type: 'progressbar',
            },
        });
    };

    roomsSlider();
    reviewsSlider();
    conceptSlider();
    infoSlider();
    gallerySlider();
    iventsSlider();
    relaxSlider();
};

export default slidersConfig;
