const Router = require('koa-router');
const router = new Router();
const ScoreController = require('./score.controller');

// cors 解决跨域
// ctx.set('Access-Control-Allow-Origin', origin);
router.all('/api/*', async (ctx, next) => {
  ctx.set('Access-Control-Allow-Origin', 'http://101.132.119.223');
  ctx.set('Access-Control-Allow-Credentials', 'true');
  ctx.set('Access-Control-Allow-Headers', 'Content-Type');
  await next();
});

router
  .post('/api/append_score', ScoreController.appendScore)
  .get('/api/ranking_list', ScoreController.getRankingList);

module.exports = router;
