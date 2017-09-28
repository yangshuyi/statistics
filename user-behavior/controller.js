//用户密码修改情况统计
const mongoose =  require('mongoose');
const UserBehaviorModel = require('./model');
const UserBehaviorService = require('./service');

exports.getUserChangePasswordEventList = async (ctx, next) => {
    let userBehviorList = await UserBehaviorService.getUserChangePasswordEventList();
    ctx.body = userBehviorList;
};
