const Koa = require('koa');
const app = new Koa();
const bodyParser = require('koa-bodyparser');
const session = require('koa-session');
const db = require('./db');
const router = require('./router');

app.keys = ['minesweeper:secret'];
const CONFIG = {
  key: 'minesweeper',
  maxAge: 1000 * 60 * 5, // 有效期
  overwrite: true,
  signed: true
};

/* 一些中间件 */
app.use(session(CONFIG, app));
app.use(bodyParser());

app.use(router.routes()).use(router.allowedMethods());

app.listen(8080, () => {
  console.log('listening to port 8080...');
});
