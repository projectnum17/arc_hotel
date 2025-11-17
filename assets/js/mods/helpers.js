const helpers = () => {
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

    const filtersHandler = () => {
        const typesFilters = document.querySelectorAll('.js-type-btn');
        const sizesFilters = document.querySelectorAll('.js-size-btn');

        const handleFilterGroup = (buttons) => {
            if (!buttons || !buttons.length) return;
            buttons.forEach((btn, index) => {
                if (index === 0) btn.classList.add('is-active');

                btn.addEventListener('click', () => {
                    buttons.forEach((b) => b.classList.remove('is-active'));
                    btn.classList.add('is-active');
                });
            });
        };

        handleFilterGroup(typesFilters);
        handleFilterGroup(sizesFilters);
    };

    const groupElementsHandler = (options) => {
        const { containerSelector, itemSelector, wrapperClass, groupSize } =
            options;

        const container = document.querySelector(containerSelector);
        if (!container) return;

        const items = container.querySelectorAll(itemSelector);
        const itemsArray = Array.from(items);

        for (let i = 0; i < itemsArray.length; i += groupSize) {
            const wrapper = document.createElement('div');
            wrapper.classList.add(wrapperClass);

            const group = itemsArray.slice(i, i + groupSize);
            const firstItem = group[0];

            container.insertBefore(wrapper, firstItem);
            group.forEach((item) => wrapper.appendChild(item));
        }
    };

    const formHandler = () => {
        const forms = document.querySelectorAll('form');
        if (!forms.length) return;

        forms.forEach((form) => {
            form.addEventListener('submit', (e) => {
                e.preventDefault();
            });
        });
    };

    const showMoreHandler = (
        wrapperSelector,
        cardSelector,
        showCount,
        limit,
        btnSelector
    ) => {
        const wrapper = document.querySelector(wrapperSelector);
        const btn = document.querySelector(btnSelector);
        if (!wrapper || !btn) return;

        const cards = wrapper.querySelectorAll(cardSelector);
        const total = cards.length;

        if (total < limit) {
            btn.style.display = 'none';
            cards.forEach((card) => (card.style.display = ''));
            return;
        }

        cards.forEach((card, index) => {
            if (index < showCount) {
                card.style.display = '';
            } else {
                card.style.display = 'none';
            }
        });

        btn.addEventListener('click', () => {
            cards.forEach((card) => (card.style.display = ''));
            btn.style.display = 'none';
        });
    };

    const datePickerHandler = () => {
        const datepickerLocales = {
            uk: {
                days: [
                    'Неділя',
                    'Понеділок',
                    'Вівторок',
                    'Середа',
                    'Четвер',
                    'П’ятниця',
                    'Субота',
                ],
                daysShort: ['Нд', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
                daysMin: ['Нд', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
                months: [
                    'Січень',
                    'Лютий',
                    'Березень',
                    'Квітень',
                    'Травень',
                    'Червень',
                    'Липень',
                    'Серпень',
                    'Вересень',
                    'Жовтень',
                    'Листопад',
                    'Грудень',
                ],
                monthsShort: [
                    'Січ',
                    'Лют',
                    'Бер',
                    'Кві',
                    'Тра',
                    'Чер',
                    'Лип',
                    'Сер',
                    'Вер',
                    'Жов',
                    'Лис',
                    'Гру',
                ],
                today: 'Сьогодні',
                clear: 'Очистити',
                dateFormat: 'dd.MM.yyyy',
                timeFormat: 'hh:ii aa',
                firstDay: 1,
            },
            en: {},
        };

        const ids = [
            'feedbackDate',
        ];

        ids.forEach((id) => {
            const dateInput = document.querySelector(`#${id}`);
            if (!dateInput) return;

            const lang = dateInput.dataset.lang || 'en';
            const locale = datepickerLocales[lang] || {};

            new AirDatepicker(dateInput, {
                isMobile: true,
                autoClose: true,
                locale: locale,
            });
        });
    };

    moreSEOTextHandler();
    parallaxHandler();
    filtersHandler();
    groupElementsHandler({
        containerSelector: '.js-eq-items',
        itemSelector: '.js-eq-item',
        wrapperClass: 'eq-inner',
        groupSize: 6,
    });
    formHandler();
    datePickerHandler();
    showMoreHandler(
        '.js-offers-collection',
        '.offer-card',
        4,
        5,
        '.js-offers-trigger'
    );
    showMoreHandler(
        '.js-blog-collection',
        '.blog-card',
        4,
        5,
        '.js-blog-trigger'
    );
};

export default helpers;
