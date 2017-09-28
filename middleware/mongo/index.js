'use strict';

const Mongodb = require('mongodb');

module.exports = function mongoUtil(options) {
    console.log('create MongoDb connection');

    // 创建数据库连接
    let connection = Mongodb.MongoClient.connect(options.url, function(err, db) {
        if(!err){
            console.log(`Mongoose connect to ${options.url} success`);
        }else{
            console.log(`Mongoose connect to ${options.url} failed. Error: ${err}`);
        }
        //connection.close();
    });

    return async function mongo(ctx, next) {
        if (ctx.mongoConnection) return await next();

        Object.assign(ctx, {
            mongoConnection: connection,
        });

        await next();
    };
};