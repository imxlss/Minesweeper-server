const Router = require('koa-router');
const router = new Router();
const ScoreController = require('./score.controller');

// cors 解决跨域
// ctx.set('Access-Control-Allow-Origin', origin);
router.all('/api/*', async (ctx, next) => {
  ctx.set('Access-Control-Allow-Origin', 'http://localhost:8000');
  ctx.set('Access-Control-Allow-Credentials', 'true');
  await next();
});

router
  .post('/api/append_score', ScoreController.appendScore)
  .get('/api/ranking_list', ScoreController.getRankingList)

module.exports = router;
