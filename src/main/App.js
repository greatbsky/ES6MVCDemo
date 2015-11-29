'use strict';

/**
 * app启动类
 * @author Architect.bian
 */

require('./Global');
const es6mvc = require('es6mvc');
const log = Log(__filename);

module.exports = class App extends es6mvc {

    /*
    运行程序，拦截器、controller等
     */
    static run (){
        super.run();
    }
}