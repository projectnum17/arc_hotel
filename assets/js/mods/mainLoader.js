const mainLoader = () => {
    const animItems = (selector) => {
        const animatedItems = document.querySelectorAll(selector);

        if (!animatedItems.length) return;

        const observer = new IntersectionObserver(
            (entries, observer) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('_animated');
                        observer.unobserve(entry.target);
                    }
                });
            },
            {
                threshold: 0,
            }
        );

        animatedItems.forEach((item) => observer.observe(item));
    };

    const loaderExists =
        document.querySelector('.js-loader') ||
        document.querySelector('.js-loader-text') ||
        document.querySelector('.js-loader-logo');

    const pic = document.querySelector('.js-hero-pic');
    const box = document.querySelector('.js-hero-box');
    const panel = document.querySelector('.js-hero-panel');

    if (loaderExists) {
        document.body.classList.add('is-locked');
    }

    animItems('.js-loader-text');
    animItems('.js-loader-logo');

    setTimeout(() => {
        animItems('.js-loader');

        setTimeout(() => {
            pic?.classList.add('is-active');
            box?.classList.add('is-active');
            panel?.classList.add('is-active');

            if (loaderExists) {
                document.body.classList.remove('is-locked');
            }
        }, 500);
    }, 1000);
};

export default mainLoader;
