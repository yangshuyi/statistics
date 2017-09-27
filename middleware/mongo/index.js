'use strict';


const Mongoose = require('mongoose');

const Log4js = require('log4js');
const logger = Log4js.getLogger();

module.exports = function mongoUtil(options) {
    const mongoDbUrl = options.url;

    // 创建数据库连接
    let connection = Mongoose.createConnection(mongoDbUrl);

    connection.on('error', function(err) {
        logger.debug(`error: connect ${mongoDbUrl} ${err}`);
    });
    connection.once('open', function() {
        logger.debug(`connect ${mongoDbUrl} success!`);
    });

    return async function mongo(ctx, next) {
        if (ctx.mongoConnection) return await next();

        Object.assign(ctx, {
            mongoConnection: connection,
        });

        await next();
    };
};

/**
 * 查找目录中的所有文件
 * @param  {string} dir       查找路径
 * @param  {init}   _pending  递归参数，忽略
 * @param  {array}  _result   递归参数，忽略
 * @return {array}            文件list
 */
function _ls(dir, _pending, _result) {
    _pending = _pending ? _pending++ : 1;
    _result = _result || [];

    if (!path.isAbsolute(dir)) {
        dir = path.join(process.cwd(), dir);
    }

    // if error, throw it
    let stat = fs.lstatSync(dir);

    if (stat.isDirectory()) {
        let files = fs.readdirSync(dir);
        files.forEach(function(part) {
            _ls(path.join(dir, part), _pending, _result);
        });
        if (--_pending === 0) {
            return _result;
        }
    } else {
        _result.push(dir);
        if (--_pending === 0) {
            return _result;
        }
    }
};