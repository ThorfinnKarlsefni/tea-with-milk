
module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? './' : '/', // 部署应用包时的基本 URL
  // 生产环境的 source map
  productionSourceMap: false,
  css: {
    // sourceMap: true // 开启 CSS source maps
    sourceMap: process.env.NODE_ENV !== 'production' // 开启 CSS source maps
  }
}
