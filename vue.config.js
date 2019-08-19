// vue.config.js
const path = require('path');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

function resolve(dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/' : '/',
  pages: {
    index: 'src/views/index/app.js',
    testTwoPage: 'src/views/testTwoPage/app.js',
  },
  devServer: {
    open: false, // 是否自动打开浏览器页面
    host: 'localhost', // 指定使用一个 host，默认是 localhost
    port: 8888, // 端口地址
    https: false, // 使用https提供服务
    // 设置代理，此处应该配置为开发服务器的后台地址
    // proxy: 'http://api.zhuishushenqi.com'
  },
  chainWebpack: (config) => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('assets', resolve('src/assets'))
      .set('components', resolve('src/components'))
  },
  configureWebpack: config => {
    // 生产环境打包分析体积
    if (process.env.NODE_ENV === 'production') {
      return {
        plugins: [
          new BundleAnalyzerPlugin()
        ]
      }
    }
  },
  css: {
    loaderOptions: {
      sass: {
        data: `
                @import "@/style/mixin.scss";
                @import "@/style/_var.scss";
                `
      }
    }
  },
};
