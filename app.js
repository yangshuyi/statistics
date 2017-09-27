const Koa = require('koa');

const app = new Koa();

//对于POST请求的处理，koa-bodyparser中间件可以把koa2上下文的formData数据解析到ctx.request.body中
const BodyParser = require('koa-bodyparser');

//JSON pretty-printed response middleware
const json = require('koa-json');

//静态资源文件
const Static = require('koa-static');

// const Onerror = require('koa-onerror');

//log日志
const logger = require('koa-logger');

const mongoUtil = require('./middleware/mongo/index');

const index = require('./routes/index');
const userBehavior = require('./routes/userBehavior');

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


app.use(mongoUtil({url:'mongodb://localhost:27017/blog'}));

// 加载路由中间件
app.use(index.routes(), index.allowedMethods());
// app.use(userBehavior.routes(), userBehavior.allowedMethods());

module.exports = app;
