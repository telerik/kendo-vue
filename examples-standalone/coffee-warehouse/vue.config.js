module.exports = {
    publicPath: process.env.NODE_ENV === 'production' ? '/kendo-vue/coffee-warehouse/' : '',
    chainWebpack: config => {
      config.performance
        .maxEntrypointSize(400000)
        .maxAssetSize(400000)
    }
  }