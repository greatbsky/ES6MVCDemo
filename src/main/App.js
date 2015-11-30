'use strict';

/**
 * app启动类
 * @author Architect.bian
 */

require('./Global');
const es6mvc = require('es6mvc');
//const es6mvc = require('../../../es6mvc/src/main/App');
const path = require('path');
//const log = Log(__filename);

module.exports = class App extends es6mvc {

    /*
    运行程序，拦截器、controller等
     */
    static run (){
        super.initialize(path.resolve(__dirname, '../../'));
        super.run();
    }

    /**
     * 初始化模块
     * @param appModules
     * @param app
     */
    static initModules(modules, app) {
        modules.initMongoDB();
        super.initModules(modules, app);
    }
}