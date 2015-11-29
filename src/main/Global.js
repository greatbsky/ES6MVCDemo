'use strict';

/**
 * 全局变量的设置，比如设置global.gconf、global.$等
 * @author Architect.bian
 */

const path = require('path');

/**
 * 初始化es6mvc相关变量
 */
(function initializeES6MVC(){
    global.project = {};
    global.project.root = path.resolve(__dirname, '../../');
})();

global.gconf = require('../resources/config/config');
//global.$ = getLodash();

