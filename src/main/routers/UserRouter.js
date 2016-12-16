'use strict';

/**
 * 会员router
 * @author Architect.bian
 */

var User = require('../models/User');
var UserSO = require('../service/UserSO');

module.exports = function(router) {

    router.get('/user', (ctx, next) => {
        ctx.body = "user pag";
    });

    /**
     * /user/register?name=hi
     */
    router.get('/user/register', (ctx, next) => {
        var user = new User({
            name : ctx.query.name
        });
        //var user = new User();
        //user.name = ctx.query.name;
        //console.log(`ctx.query : ${JsonUtil.toString(ctx.query)}`);
        //console.log(`ctx.query.name : ${ctx.query.name}`);
        if(UserSO.register(user)) {
            ctx.model.user = user;
            return "user";
        }
        return "500";
    });

    /*登录验证*/
    router.post('/book/admin/login', (ctx, next) => {
    	console.log(ctx.request.body);
    	console.log('ctx.request.body.name:' + ctx.request.body.name);
    	if(ctx.request.body.name == 'admin' && ctx.request.body.pwd == '123456') {
    		return 'index';
    	}
    	ctx.model.errmsg = 'pwd or name is wrong';
    	return 'login';
    });
}
