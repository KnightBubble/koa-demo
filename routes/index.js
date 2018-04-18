const router = require('koa-router')()

router.get('/', async (ctx, next) => {
  await ctx.render('index', {
    title: 'Hello Koa 2!'
  })
})


router.get('/user', async (ctx, next) => {
  console.log('---');
  console.log(ctx.request.query);
  let query = ctx.request.query;
  ctx.body = {
    title:'111',
    params:query
  }
});
router.get('/string', async (ctx, next) => {
  ctx.body = 'koa2 string'
})

router.get('/json', async (ctx, next) => {
  ctx.body = {
    title: 'koa2 json'
  }
})

module.exports = router
