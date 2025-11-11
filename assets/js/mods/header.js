const header = () => {
    const asideMenuHandler = () => {
        const menuButton = document.querySelector('.js-burger');
        const menuBox = document.querySelector('.js-aside-menu');
        const header = document.querySelector('.js-header');

        if (!menuButton || !menuBox || !header) return;

        const isOpenMenu = () => {
            menuBox.classList.add('is-shown');
            document.body.classList.add('is-locked');
            menuButton.classList.add('is-active');
            header.classList.add('is-mutate');
            header.classList.remove('is-scroll');
        };

        const isCloseMenu = () => {
            menuBox.classList.remove('is-shown');
            document.body.classList.remove('is-locked');
            menuButton.classList.remove('is-active');
            header.classList.remove('is-mutate');
            if (window.scrollY > 1) {
                header.classList.add('is-scroll');
            }
        };

        const toggleState = () => {
            if (menuBox.classList.contains('is-shown')) {
                isCloseMenu();
            } else {
                isOpenMenu();
            }
        };

        menuButton.addEventListener('click', toggleState);
    };

    const headerHandler = () => {
        const header = document.querySelector('.js-header');
        if (!header) return;

        let lastScroll = 0;

        const handleScroll = () => {
            const currentScroll = window.scrollY;

            if (currentScroll > lastScroll && currentScroll > 150) {
                header.style.transform = 'translateY(-100%)';
            } else {
                header.style.transform = 'translateY(0)';
            }

            lastScroll = currentScroll;

            if (currentScroll > 1) {
                header.classList.add('is-scroll');
            } else {
                header.classList.remove('is-scroll');
            }
        };

        window.addEventListener('scroll', handleScroll);

        handleScroll();
    };

    asideMenuHandler();
    headerHandler();
};

export default header;
