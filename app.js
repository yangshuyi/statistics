

const Koa = require('koa');

const app = new Koa();

//引入配置文件
const config = require('./configs/index');

//对于POST请求的处理，koa-bodyparser中间件可以把koa2上下文的formData数据解析到ctx.request.body中
const BodyParser = require('koa-bodyparser');

//JSON pretty-printed response middleware
const json = require('koa-json');

//静态资源文件
const Static = require('koa-static');

// const Onerror = require('koa-onerror');

//log日志
const logger = require('koa-logger');

const Mongoose = require('mongoose');
Mongoose.Promise = global.Promise;
Mongoose.connect(config.mongo.url, {useMongoClient: true}).then(function(db){
    console.log(db);
});


// error handler
// onerror(app);
// app.user(Onerror());

// middlewares
app.use(BodyParser());

app.use(logger());
app.use(json({ pretty: false, param: 'pretty' }));
app.use(Static(__dirname + '/public'));


// logger
// app.use(async (ctx, next) => {
//   const start = new Date()
//   await next()
//   const ms = new Date() - start
//   console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
// })


// 加载路由中间件
const router = require('./routes/index');
app.use(router.routes(), router.allowedMethods());

module.exports = app;

