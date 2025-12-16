const formModal = () => {
    const modalFormHandler = (options) => {
        const {
            triggerSelector,
            wrapperSelector,
            formSelector,
            successSelector,
            innerSelector,
        } = options;

        const modalTrigger = document.querySelectorAll(triggerSelector);
        const modalWrapper = document.querySelector(wrapperSelector);

        if (!modalWrapper || !modalTrigger.length) return;

        const successWindow = modalWrapper.querySelector(successSelector);
        const formWindow = modalWrapper.querySelector(formSelector);
        const formData = modalWrapper.querySelector('form');

        if (!successWindow || !formWindow || !formData) return;

        const closeSuccess = successWindow.querySelector('.js-success-close');
        const closeForm = formWindow.querySelector('.js-reserve-close');

        if (!closeSuccess || !closeForm) return;

        successWindow.classList.add('is-hide');

        const closeModal = () => {
            document.body.classList.remove('is-locked');
            modalWrapper.classList.remove('is-show');
            const form = modalWrapper.querySelector('form');
            form.reset();
        };

        const openModal = () => {
            document.body.classList.add('is-locked');
            modalWrapper.classList.add('is-show');
            successWindow.classList.add('is-hide');
            formWindow.classList.remove('is-hide');
        };

        modalTrigger.forEach((btn) => btn.addEventListener('click', openModal));

        closeForm.addEventListener('click', closeModal);
        closeSuccess.addEventListener('click', closeModal);

        document.addEventListener('keydown', (e) => {
            if (
                e.key === 'Escape' &&
                modalWrapper.classList.contains('is-show')
            ) {
                closeModal();
            }
        });

        modalWrapper.addEventListener('click', (e) => {
            const inner = modalWrapper.querySelector(innerSelector);
            if (e.target === modalWrapper || e.target === inner) {
                closeModal();
            }
        });

        formData.addEventListener('submit', (e) => {
            e.preventDefault();
            successWindow.classList.remove('is-hide');
            formWindow.classList.add('is-hide');
        });
    };

    modalFormHandler({
        triggerSelector: '.js-reserv',
        wrapperSelector: '.js-reserve-modal',
        formSelector: '.js-reserve-form',
        successSelector: '.js-reserve-success',
        innerSelector: '.reserve-modal__inner',
    });
};

export default formModal;
