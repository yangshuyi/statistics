const router = require('koa-router')();

router.prefix('/userBehavior');

router.get('/', async function (ctx, next) {
    ctx.body = 'this is a users response!'
});

router.get('/estimating/vehicle_define/vin', async (ctx, next) => {

    var log = ctx.db.model('T_USER_BEHAVIOR_LOG');
    log.query({}, function(error, doc){
        console.log('aaa');
    });
    ctx.body = 'this is a users/bar response'
});

module.exports = router;
