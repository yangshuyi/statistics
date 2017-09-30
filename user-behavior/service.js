'use strict';

const mongoose =  require('mongoose');
const UserBehaviorModel = require('./model');
const UserBehaviorConstants = require('./constants');


exports.getUserChangePasswordEventList = async function(){
    var query = {"category":UserBehaviorConstants.constants.USER_BEHAVIOR_CATEGORY.USER_MGT, "type":UserBehaviorConstants.constants.USER_BEHAVIOR_TYPE.UPDATE_USER};

    var res = await UserBehaviorModel.find(query).limit(20).exec();

    return res;
};