'use strict';

import helpers from './mods/helpers.js';
import header from './mods/header.js';
import videoAsync from './mods/videoAsync.js';
import slidersConfig from './mods/slidersConfig.js';

document.addEventListener('DOMContentLoaded', () => {
    helpers();
    header();
    videoAsync();
    slidersConfig();
});
