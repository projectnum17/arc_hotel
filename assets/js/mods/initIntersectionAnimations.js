const initIntersectionAnimations = () => {
    const observerHandlerConfig = (
        selector,
        classActivity,
        gap,
        content = null
    ) => {
        const targetBoxes = document.querySelectorAll(selector);
        if (!targetBoxes.length) return;

        targetBoxes.forEach((img) => {
            const targetObserver = new IntersectionObserver(
                (entries) => {
                    entries.forEach((entry) => {
                        if (entry.isIntersecting) {
                            img.classList.add(classActivity);
                            targetObserver.unobserve(img);

                            if (content) {
                                const parentSection = img.closest('.section--animation');
                                if (parentSection) {
                                    const contentBlock =
                                        parentSection.querySelector(content);
                                    if (contentBlock) {
                                        setTimeout(() => {
                                            contentBlock.classList.add(
                                                'is-show'
                                            );
                                        }, 800);
                                    }
                                }
                            }
                        }
                    });
                },
                {
                    threshold: gap,
                }
            );

            targetObserver.observe(img);
        });
    };

    observerHandlerConfig(
        '.js-section-animation',
        'is-scale',
        0.7,
        '.js-content-animation'
    );
    observerHandlerConfig('.js-logo-bg', 'is-visible', 0);
    observerHandlerConfig('.js-img-box', 'is-scale', 0.5);
    observerHandlerConfig('.js-logo-box', 'is-transform', 0.7);
    observerHandlerConfig('.js-gallery-box', 'is-transform', 0.3);
};

export default initIntersectionAnimations;
