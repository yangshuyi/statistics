const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userBehaviorSchema = new Schema({
    "_id" : {type:Schema.Types.ObjectId},
    "userId" : {type:Schema.Types.Number},
    // "timestamp" : {type:Schema.Types.Date},
    // "userIp" : {type:Schema.Types.String},
    // "category" : {type:Schema.Types.String},
    // "type" : {type:Schema.Types.String},
    // "subType" : {type:Schema.Types.String},
    // "operateSystem" : {type:Schema.Types.String},
    // "resolution" : {type:Schema.Types.String},
    // "jsonData" : {type:Object}
});

// 监听方法名称
userBehaviorSchema.methods = {

};


var userBehaviorModel = mongoose.model('UserBehavior', userBehaviorSchema, 'T_USER_BEHAVIOR_LOG');

module.exports = userBehaviorModel;