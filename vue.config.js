// const { defineConfig } = require('@vue/cli-service');
// module.exports = defineConfig({
//   transpileDependencies: true
// });
module.exports = {
  devServer: {
    //本地端口
    // host: '114.132.74.63',
    host: 'localhost',
    port: 8080,
    proxy: {
      '/api': {
        target: "http://120.24.230.203:8086/",//后端给的地址
        changeOrigin: true,//确定跨域
        // ws: true,  //这个不知道是啥
        // secure: false,//如果是https接口，需要配置这个参数
        pathRewrite: {
          '^/api': '' //这个就是以在写请求的时候加上这个api,然后这里重写去掉api
        }
      }
    }
  }
};
