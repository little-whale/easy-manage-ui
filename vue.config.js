const path = require('path')

const resolve = dir => {
  return path.join(__dirname, dir)
}

// 项目部署基础,默认"/",如果您的应用程序部署在子路径中，则需要在这指定子路径
const BASE_URL = process.env.NODE_ENV === 'production' ? '/' : '/'

module.exports = {
  baseUrl: BASE_URL,
  // 如果你不需要使用eslint，把lintOnSave设为false即可
  lintOnSave: true,
  // key,value自行定义，比如.set('@@', resolve('src/components'))
  chainWebpack: config => {
    config.resolve.alias.set('@', resolve('src')).set('_c', resolve('src/components'))
  },
  // 设为false打包时不生成.map文件
  productionSourceMap: false,
  // 这里写你调用接口的基础路径，来解决跨域，
  // 如果设置了代理，那你本地开发环境的axios的baseUrl要写为 '' ，即空字符串
  devServer: {
    port: 9000,
    proxy: 'http://localhost:1000'
  },
  css: {
    loaderOptions: { // 向 CSS 相关的 loader 传递选项
      less: {
        javascriptEnabled: true
      }
    }
  }
}
