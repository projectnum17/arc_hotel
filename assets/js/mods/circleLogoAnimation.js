const circleLogoAnimation = () => {
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

export default circleLogoAnimation;
