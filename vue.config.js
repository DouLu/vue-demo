const SentryWebpackPlugin = require('@sentry/webpack-plugin')
module.exports = {
  productionSourceMap: true,
  configureWebpack: {
    devtool: 'source-map',
    output: {
      filename: '[name].js',
      chunkFilename: '[name].js',
      sourceMapFilename: '[name].js.map'
    },
    optimization: {
      minimize: false
    },
    plugins: [new SentryWebpackPlugin({
      authToken: '6883efcba9c34e73b0cf7c77cc168d470e8b352de7fa4eb4ad9a171dbb9c7f31',
      org: 'personal-kxw',
      project: 'personal-kxw',
      release: 'dl-test5.0',
      include: './dist',
      ignore: ['node_modules', 'vue.config.js']
    })]
  }
}
