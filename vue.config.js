module.exports = {
  devServer: {
    proxy: 'https://conduit.productionready.io'
  },
  configureWebpack: {
    devtool: 'source-map'
  }
}
