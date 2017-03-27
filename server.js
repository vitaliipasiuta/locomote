const koa = require('koa');
const bodyParser = require('koa-body');
const app = new koa();
const serve = require('koa-static');
const path = require('path');

// app.use(bodyParser({
//   formidable: {uploadDir: './uploads'},
//   multipart: true,
//   urlencoded: true
// }));

//Require the Router we defined in movies.js
var routes = require('./routes/routes');

app.use(routes.routes());

app.use(serve(path.join(__dirname, 'public')));

app.listen(3000);
