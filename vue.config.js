// const http = require('http');
// const request = require('request');

// const hostname = '127.0.0.1';
// const port = 8010;
// const imgPort = 8011;

// // 创建一个 API 代理服务
// const apiServer = http.createServer((req, res) => {
//     const url = 'http://news-at.zhihu.com/api/4' + req.url;
//     const options = {
//         url: url
//     };

//     function callback (error, response, body) {
//         if (!error && response.statusCode === 200) {
//             // 设置编码类型，否则中文会显示为乱码
//             res.setHeader('Content-Type', 'text/plain;charset=UTF-8');
//             // 设置所有域允许跨域
//             res.setHeader('Access-Control-Allow-Origin', '*');
//             // 返回代理后的内容
//             res.end(body);
//         }
//     }
//     request.get(options, callback);
// });
// // 监听 8010 端口
// apiServer.listen(port, hostname, () => {
//     console.log(`接口代理运行在 http://${hostname}:${port}/`);
// });
// // 创建一个图片代理服务
// const imgServer = http.createServer((req, res) => {
//     const url = req.url.split('/img/')[1];
//     const options = {
//         url: url,
//         encoding: null
//     };

//     function callback (error, response, body) {
//         if (!error && response.statusCode === 200) {
//             const contentType = response.headers['content-type'];
//             res.setHeader('Content-Type', contentType);
//             res.setHeader('Access-Control-Allow-Origin', '*');
//             res.end(body);
//         }
//     }
//     request.get(options, callback);
// });
// // 监听 8011 端口
// imgServer.listen(imgPort, hostname, () => {
//     console.log(`图片代理运行在 http://${hostname}:${imgPort}/`);
// });

// see http://vuejs-templates.github.io/webpack for documentation.

module.exports = {
    publicPath: process.env.NODE_ENV === "production" ? "/production-sub-path/" : "/",
    outputDir: "my-zhihu",
    assetsDir: "assets",
    filenameHashing: false,
    lintOnSave: process.env.NODE_ENV !== "production",

    //是否使用包含运行时编译器的 Vue 构建版本。设置为 true 后你就可以在 Vue 组件中使用 template 选项了，但是这会让你的应用额外增加 10kb 左右。
    runtimeCompiler: false,
    // 如果你不需要生产环境的 source map，可以将其设置为 false 以加速生产环境构建。
    productionSourceMap: false,

    // 所有 webpack-dev-server 的选项都支持。
    devServer: {
        host: "localhost",
        port: 8080, // 端口号
        https: false,
        open: true, //配置自动启动浏览器

        // 配置多个代理
        proxy: {
            '/api': {
                target: 'http://news-at.zhihu.com',
                changeOrigin: true,
                pathRewrite: {
                '^/api': '/api/4'
                }
            },
            '/api7': {
                target: 'http://news-at.zhihu.com',
                changeOrigin: true,
                pathRewrite: {
                '^/api7': '/api/7',
                }
            }
        }
    }
}
