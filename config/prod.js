const { merge } = require('webpack-merge');
const base = require('./base');

module.exports = merge(base, {
  mode: 'production',
  output: {
    path: `${__dirname}/../dist`,
    filename: './js/[name].[chunkhash].js',
    assetModuleFilename: './images/[hash][ext][query]',
  },
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        vendor: {
          chunks: 'all',
          name: 'vendor',
          test: /[\\/]node_modules[\\/]/,
          enforce: true,
        },
      },
    },
  }
});