const Koa = require('koa');
const fs = require('fs');
const app = new Koa();

//koa-router中间件
const Router = require('koa-router');
//对于POST请求的处理，koa-bodyparser中间件可以把koa2上下文的formData数据解析到ctx.request.body中
const BodyParser = require('koa-bodyparser');
//静态资源文件
const Static = require('koa-static');
//Session处理
const Session = require('koa-session-redis');
//JSONP
const Jsonp = require('koa-jsonp')

let home = new Router();
home.get('/', async (ctx) => {
    let html = `
    <ul>
      <li><a href="/api/userBehavior">/api/userBehavior</a></li>
      <li><a href="/api/management">/api/management</a></li>
    </ul>
  `;
    ctx.body = html
});

// 子路由2
let apiModuleRouter = new Router();
apiModuleRouter.get('/userBehavior', async (ctx) => {
    ctx.body = '404 page!'
});
apiModuleRouter.get('/management', async (ctx) => {
    let url = ctx.url;
    let method = ctx.method;
    // 从上下文的request对象中获取
    let request = ctx.request
    let req_query = request.query
    let req_querystring = request.querystring

    // 从上下文中直接获取
    let ctx_query = ctx.query
    let ctx_querystring = ctx.querystring

    ctx.body = {
        method,
        url,
        req_query,
        req_querystring,
        ctx_query,
        ctx_querystring
    }
});


// 装载所有子路由
let router = new Router();
router.use('/', home.routes(), home.allowedMethods());
router.use('/api', apiModuleRouter.routes(), apiModuleRouter.allowedMethods());


// 加载路由中间件
app.use(router.routes());
app.use(router.allowedMethods());

// 使用ctx.body解析中间件
app.use(BodyParser());

//静态资源目录
app.use(Static(path.join(__dirname, './static')));

//Session存储方式Redis
app.keys = ['some secret hurr'];
app.use(Session({
        store: {
            host: process.env.SESSION_PORT_6379_TCP_ADDR || '127.0.0.1',
            port: process.env.SESSION_PORT_6379_TCP_PORT || 6379,
            ttl: 3600,
        },
    },
));

//JSONP
app.use(jsonp());

//Session
app.use(function *(){
    var n = this.session.views || 0;
    this.session.views = ++n;
    console.log('this.session.views:'+this.session.views);
});

app.listen(3000);
console.log('[demo] start-quick is starting at port 3000');