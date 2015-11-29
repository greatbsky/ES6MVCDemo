'use strict';

/**
 * 全局变量的设置，比如设置global.gconf、global.$等
 * @author Architect.bian
 */

const path = require('path');

global.project = {};
global.project.root = path.resolve(__dirname, '../../');

global.gconf = require('../resources/config/config');
//global.$ = getLodash();

