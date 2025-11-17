'use strict';

import mainLoader from './mods/mainLoader.js';
import helpers from './mods/helpers.js';
import header from './mods/header.js';
import videoAsyncHandler from './mods/videoAsyncHandler.js';
import slidersConfig from './mods/slidersConfig.js';
import circleLogoAnimation from './mods/circleLogoAnimation.js';
import servicesModal from './mods/servicesModal.js';
import initIntersectionAnimations from './mods/initIntersectionAnimations.js';
import selectHandler from './mods/selectHandler.js';
import videoModalHandler from './mods/videoModalHandler.js';

document.addEventListener('DOMContentLoaded', () => {
    mainLoader();
    helpers();
    header();
    videoAsyncHandler();
    slidersConfig();
    circleLogoAnimation();
    servicesModal();
    initIntersectionAnimations();
    selectHandler();
    videoModalHandler();
});
