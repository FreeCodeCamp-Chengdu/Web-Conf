'use strict';

const Express = require('express'),
      LeanCloud = require('leanengine');

const app = Express();


/* ---------- Express 中间件 ---------- */

//  HTTP 基础中间件

app.get('/server/*',  function () {

    arguments[1].status(404).end();
});

app.use( Express.static('./') );


//  LeanCloud 云引擎中间件

app.use( LeanCloud.express() );

app.enable('trust proxy');

app.use( LeanCloud.Cloud.HttpsRedirect() );



/* ---------- RESTful API 路由 ---------- */



/* ---------- 异常处理 ---------- */

app.use(function(request, response, next) {

    // 如果任何一个路由都没有返回响应，则抛出一个 404 异常给后续的异常处理器

    if ( response.headersSent )  return;

    var error = new Error('Not Found');

    error.code = 404;

    next( error );
});


module.exports = app;
