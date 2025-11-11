const clipLogoAnimation = () => {
    const logoBg = document.querySelector('.js-logo-bg');
    if (!logoBg) return;

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    logoBg.classList.add('is-visible');
                    observer.unobserve(logoBg);
                }
            });
        },
        {
            threshold: 0
        }
    );

    observer.observe(logoBg);
};

export default clipLogoAnimation;
