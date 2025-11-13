'use strict';

import helpers from './mods/helpers.js';
import header from './mods/header.js';
import videoAsyncHandler from './mods/videoAsyncHandler.js';
import slidersConfig from './mods/slidersConfig.js';
import circleLogoAnimation from './mods/circleLogoAnimation.js';
import servicesModal from './mods/servicesModal.js';
import initIntersectionAnimations from './mods/initIntersectionAnimations.js';

document.addEventListener('DOMContentLoaded', () => {
    helpers();
    header();
    videoAsyncHandler();
    slidersConfig();
    circleLogoAnimation();
    servicesModal();
    initIntersectionAnimations();
});
