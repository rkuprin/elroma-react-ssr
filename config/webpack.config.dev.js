const path = require('path')
const webpack = require('webpack')
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin')
const { ReactLoadablePlugin } = require('react-loadable/webpack')
const ErrorOverlayPlugin = require('error-overlay-webpack-plugin')

const { getAppEnv } = require('./env')
const env = getAppEnv()
const { PUBLIC_URL = '' } = env.raw

const resolvePath = relativePath => path.resolve(__dirname, relativePath);

module.exports = {
  mode: 'development',
  devtool: 'cheap-module-source-map',
  entry: [
    'webpack-hot-middleware/client?path=/__webpack_hmr&reload=true',
    resolvePath('../src/index.js')
  ],
  output: {
    path: resolvePath('../build'),
    filename: '[name].bundle.js',
    chunkFilename: '[name].chunk.js',
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
  plugins: [
    new webpack.DefinePlugin(env.forWebpackDefinePlugin),
    new webpack.HotModuleReplacementPlugin(),
    new CaseSensitivePathsPlugin(),
    new ErrorOverlayPlugin(),
    new ReactLoadablePlugin({
      filename: 'build/react-loadable.json'
    })
  ],
}
