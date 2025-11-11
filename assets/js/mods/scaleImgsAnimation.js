const scaleImgsAnimation = () => {
    const imgBoxes = document.querySelectorAll('.js-img-scale');

    if (!imgBoxes.length) return;

    imgBoxes.forEach((img) => {
        const imgObserver = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        img.classList.add('is-scale');
                        imgObserver.unobserve(img);
                    }
                });
            },
            {
                threshold: 0.7,
            }
        );

        imgObserver.observe(img);
    });
};

export default scaleImgsAnimation;
