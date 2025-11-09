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

    animationLogo();
    // const animationLogo = () => {
    //     const topTextEl = document.querySelector('.js-logo-deco-top');
    //     if (topTextEl) {
    //         const text = topTextEl.dataset.text.trim();

    //         const chars = text.split('');
    //         const charCount = chars.length;
    //         const spacing = 25;

    //         const totalArc = (charCount - 1) * spacing;
    //         const startAngle = -90 - totalArc / 2;

    //         topTextEl.innerHTML = chars
    //             .map(
    //                 (char, i) =>
    //                     `<span style="transform:rotate(${
    //                         startAngle + i * spacing
    //                     }deg)">${char}</span>`
    //             )
    //             .join('');
    //     }

    //     const bottomTextEl = document.querySelector('.js-logo-deco-bottom');
    //     if (bottomTextEl) {
    //         const text = bottomTextEl.dataset.text.trim();

    //         const chars = text.split('');
    //         const charCount = chars.length;
    //         const spacing = 25;

    //         const totalArc = (charCount - 1) * spacing;
    //         const startAngle = 90 - totalArc / 2;

    //         bottomTextEl.innerHTML = chars
    //             .map(
    //                 (char, i) =>
    //                     `<span style="transform:rotate(${
    //                         startAngle + i * spacing
    //                     }deg)">${char}</span>`
    //             )
    //             .join('');
    //     }
    // };

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

    animationLogo();
    parallaxHandler();
};

export default helpers;
