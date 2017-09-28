const router = require('koa-router')();
var userBehaviorController = require('../user-behavior/controller');

router.prefix('/userBehavior');
router.get('/getUserChangePasswordEventList', userBehaviorController.getUserChangePasswordEventList);

module.exports = router;