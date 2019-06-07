const path = require('path')
const webpack = require('webpack')
const ManifestPlugin = require('webpack-manifest-plugin')
const { ReactLoadablePlugin } = require('react-loadable/webpack')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

const { getAppEnv } = require('./env')

const env = getAppEnv()
const { PUBLIC_URL = '' } = env.raw
const resolvePath = relativePath => path.resolve(__dirname, relativePath)

if (env.raw.NODE_ENV !== 'production') {
  throw new Error('Production builds must have NODE_ENV=production.')
}

module.exports = {
  mode: 'production',
  devtool: 'source-map',
  entry: {
    polyfills: resolvePath('../src/polyfills.js'),
    main: resolvePath('../src/index.js')
  },
  output: {
    path: resolvePath('../build'),
    filename: 'static/js/[name].[chunkhash:8].js',
    chunkFilename: 'static/js/[name].[chunkhash:8].chunk.js',
    publicPath: PUBLIC_URL + '/'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        include: resolvePath('../src'),
        resolve: {
          extensions: ['.js', '.jsx']
        },
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.(js|jsx)$/,
        use: [
          {
            loader: 'eslint-loader'
          }
        ],
        include: resolvePath('../src')
      }
    ]
  },
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        parallel: true,
        sourceMap: true,
        uglifyOptions: {
          output: {
            comments: false
          }
        }
      })
    ]
  },
  plugins: [
    new webpack.DefinePlugin(env.forWebpackDefinePlugin),
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
    new ManifestPlugin({
      fileName: 'asset-manifest.json'
    }),
    new ReactLoadablePlugin({
      filename: 'build/react-loadable.json'
    })
  ],
  node: {
    dgram: 'empty',
    fs: 'empty',
    net: 'empty',
    tls: 'empty'
  }
};
