//用户密码修改情况统计
const mongoose =  require('mongoose');
const UserBehaviorModel = require('./model');
const UserBehaviorService = require('./service');

exports.getUserChangePasswordEventList = async (ctx, next) => {
    var result = await UserBehaviorService.getUserChangePasswordEventList(ctx);
    console.log(result);
    ctx.body = result;
};
