const helpers = () => {
    const animationLogo = () => {
        const createArcText = (element, startAngleBase) => {
            const text = element.dataset.text?.trim();
            if (!text) return;

            const chars = text.split('');
            const charCount = chars.length;
            const spacing = 25;
            const totalArc = (charCount - 1) * spacing;
            const startAngle = startAngleBase - totalArc / 2;

            element.innerHTML = chars
                .map(
                    (char, i) =>
                        `<span style="transform: rotate(${
                            startAngle + i * spacing
                        }deg)">${char}</span>`
                )
                .join('');
        };

        document.querySelectorAll('.js-logo-deco-top').forEach((el) => {
            createArcText(el, -90);
        });

        document.querySelectorAll('.js-logo-deco-bottom').forEach((el) => {
            createArcText(el, 90);
        });
    };

    const parallaxHandler = () => {
        const parallaxElements = document.querySelectorAll('[data-parallax]');

        window.addEventListener('scroll', () => {
            const y = window.scrollY;
            parallaxElements.forEach((el) => {
                const top = el.offsetTop;
                el.style.transform = `translateY(-${y > top ? y / 5 : 0}px)`;
            });
        });
    };

    const moreSEOTextHandler = () => {
        const parent = document.querySelector('.js-text-more');
        if (!parent) return;

        const dElements = parent.querySelectorAll('div');
        const pElements = parent.querySelectorAll('.about__paragraph');
        const showMore = document.querySelector('.js-about-more');

        if (!pElements.length || !showMore) return;

        dElements.forEach((div, index) => {
            div.classList.toggle('is-active', index < 1);
        });

        if (pElements.length <= 1) {
            showMore.style.display = 'none';
            return;
        }

        showMore.addEventListener('click', () => {
            const isShown = parent.classList.toggle('is-shown');

            dElements.forEach((div, index) => {
                if (index > 0) {
                    div.classList.toggle('is-active', isShown);
                    div.classList.toggle('is-mtb', isShown);
                }
            });

            showMore.classList.toggle('is-hide', isShown);
        });
    };

    moreSEOTextHandler();
    animationLogo();
    parallaxHandler();
};

export default helpers;
