const webpack = require('webpack')
const path = require('path')

module.exports = {
  entry: './server/public/index.js',
  output: {
    filename: './server/public/bundle.js'
  },
  node: {
    console: false,
    process: 'mock',
    Buffer: true,
    fs: 'empty'
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      mangle: false,
      compress: { warnings: false }
    })
  ],
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules|vendor/,
      loader: 'babel',
      query: {
        presets: require.resolve('babel-preset-es2015'),
        plugins: require.resolve('babel-plugin-transform-runtime')
      }
    }, {
      test: /\.js$/,
      include: /node_modules\/(hoek|qs|wreck|boom|ipfs-.+)/,
      loader: 'babel',
      query: {
        presets: require.resolve('babel-preset-es2015'),
        plugins: require.resolve('babel-plugin-transform-runtime')
      }
    }, {
      test: /\.json$/,
      loader: 'json'
    }]
  },
  externals: {
    net: '{}',
    fs: '{}',
    tls: '{}',
    console: '{}',
    'require-dir': '{}',
    mkdirp: '{}'
  }
}
