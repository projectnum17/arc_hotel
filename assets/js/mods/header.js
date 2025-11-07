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
        };

        const isCloseMenu = () => {
            menuBox.classList.remove('is-shown');
            document.body.classList.remove('is-locked');
            menuButton.classList.remove('is-active');
            header.classList.remove('is-mutate');
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

    asideMenuHandler();
};

export default header;
