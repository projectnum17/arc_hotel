const servicesModal = () => {
    const serviceModal = document.querySelector('.js-service');

    if (!serviceModal) return;

    const closeBtn = serviceModal.querySelector('.js-service-close');

    const modalImg = serviceModal.querySelector('.js-service-pic img');
    const modalTitle = serviceModal.querySelector('.js-service-title');
    const modalText = serviceModal.querySelector('.js-service-text');

    const serviceLinks = document.querySelectorAll('.js-service-details');

    if (!serviceLinks.length) return;

    serviceLinks.forEach((link) => {
        link.addEventListener('click', () => {
            const imgSrc = link.dataset.img || '';
            const title = link.dataset.title || '';
            const description = link.dataset.description || '';

            if (!imgSrc || !title || !description) return;

            modalImg.src = imgSrc;
            modalTitle.textContent = title;
            modalText.textContent = description;

            serviceModal.classList.add('is-show');
            document.body.classList.add('is-locked');
        });
    });

    closeBtn.addEventListener('click', () => {
        serviceModal.classList.remove('is-show');
        document.body.classList.remove('is-locked');
    });

    serviceModal.addEventListener('click', (e) => {
        const inner = serviceModal.querySelector('.service-modal__inner');

        if (!inner.contains(e.target)) {
            serviceModal.classList.remove('is-show');
            document.body.classList.remove('is-locked');
        }
    });
};

export default servicesModal;
