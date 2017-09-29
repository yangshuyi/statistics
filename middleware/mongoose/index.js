'use strict';

const Mongoose = require('mongoose');
// Mongoose.Promise = require('q');
Mongoose.Promise = global.Promise;
const Log4js = require('log4js');
const logger = Log4js.getLogger();

module.exports = function(options) {
    console.log('create MongoDb connection');

    // 创建数据库连接
    let connection = Mongoose.createConnection(options.url);

    connection.on('error', function(err) {
        console.log(`Mongoose connect to ${options.url} failed. Error: ${err}`);
    });
    connection.on('open', function() {
        console.log(`Mongoose connect to ${options.url} success`);
    });

    connection.on('disconnected', function () {
        console.log('Mongoose connection disconnected');
    });

    return async function(ctx, next) {
        if (ctx.mongoConnection) return await next();

        Object.assign(ctx, {
            mongoConnection: connection,
        });

        await next();
    };
};