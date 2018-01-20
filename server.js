const Koa = require('koa');
const views = require('koa-views');
const serve = require('koa-static');

const port = 8000;

let app = new Koa();
app.use(views('dist', { extension: 'html' }));
app.use(serve('dist'));

app.use(async ctx => {
	await ctx.render('index');
});

app.listen(port, () => console.log(`Server started on port ${port}`));
