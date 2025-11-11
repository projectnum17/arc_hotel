'use strict';

import helpers from './mods/helpers.js';
import header from './mods/header.js';
import videoAsync from './mods/videoAsync.js';
import slidersConfig from './mods/slidersConfig.js';
import clipLogoAnimation from './mods/clipLogoAnimation.js';
import circleLogoAnimation from './mods/circleLogoAnimation.js';
import servicesModal from './mods/servicesModal.js';
import scaleImgsAnimation from './mods/scaleImgsAnimation.js';

document.addEventListener('DOMContentLoaded', () => {
    helpers();
    header();
    videoAsync();
    slidersConfig();
    clipLogoAnimation();
    circleLogoAnimation();
    servicesModal();
    scaleImgsAnimation();
});
