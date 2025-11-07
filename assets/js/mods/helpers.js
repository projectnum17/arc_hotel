const helpers = () => {
    const animationLogo = () => {
        const topTextEl = document.querySelector('.js-logo-deco-top');
        if (topTextEl) {
            const text = topTextEl.dataset.text.trim();

            const chars = text.split('');
            const charCount = chars.length;
            const spacing = 25;

            const totalArc = (charCount - 1) * spacing;
            const startAngle = -90 - totalArc / 2;

            topTextEl.innerHTML = chars
                .map(
                    (char, i) =>
                        `<span style="transform:rotate(${
                            startAngle + i * spacing
                        }deg)">${char}</span>`
                )
                .join('');
        }

        const bottomTextEl = document.querySelector('.js-logo-deco-bottom');
        if (bottomTextEl) {
            const text = bottomTextEl.dataset.text.trim();

            const chars = text.split('');
            const charCount = chars.length;
            const spacing = 25;

            const totalArc = (charCount - 1) * spacing;
            const startAngle = 90 - totalArc / 2;

            bottomTextEl.innerHTML = chars
                .map(
                    (char, i) =>
                        `<span style="transform:rotate(${
                            startAngle + i * spacing
                        }deg)">${char}</span>`
                )
                .join('');
        }
    };

    animationLogo();
};

export default helpers;
