const router = require('koa-router')();

router.get('/', async (ctx, next) => {
    // ctx.body = 'this is root page';
    var log = ctx.db.model('T_USER_BEHAVIOR_LOG');
    log.query({}, function(error, doc){
        console.log('aaa');
    });
    ctx.body = 'this is a users/bar response'
});

router.get('/test', async (ctx, next) => {
    ctx.body = 'this is a test response';
});

module.exports = router;
