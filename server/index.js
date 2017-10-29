'use strict';

const  LeanCloud = require('leanengine'),  app = require('./app');


LeanCloud.init({
    appId:        process.env.LEANCLOUD_APP_ID,
    appKey:       process.env.LEANCLOUD_APP_KEY,
    masterKey:    process.env.LEANCLOUD_APP_MASTER_KEY
});


app.use(function(error, request, response) {

    // 忽略 websocket 的超时
    if (request.timedout  &&  (request.headers.upgrade === 'websocket'))
        return;

    error.code = error.code || error.status || 500;

    if (error.code === 500)  console.error(error.stack || error);

    if ( request.timedout )
        console.error(
            `请求超时: url=${request.originalUrl}, timeout=${error.timeout}, 请确认方法执行耗时很长，或没有正确的 response 回调。`
        );

    response.status( error.code );

    //  若非开发环境，须隐藏 异常堆栈信息
    error = Object.assign({ }, error);

    if (app.get('env') !== 'development')  delete error.stack;

    response.json( error );
});

// 端口一定要从环境变量 `LEANCLOUD_APP_PORT` 中获取。
// LeanEngine 运行时会分配端口并赋值到该变量。
const PORT = parseInt(process.env.LEANCLOUD_APP_PORT || process.env.PORT || 3000);

app.listen(PORT,  function () {

    console.log(`Node app is running on port: ${PORT}`);
});


// 注册全局未捕获异常处理器
process.on('uncaughtException', function(error) {

    console.error(`Caught exception: ${error.stack}`);

}).on('unhandledRejection', function(reason, promise) {

    console.error(
        `Unhandled Rejection at: Promise ${promise}, reason: ${reason.stack}`
    );
});
