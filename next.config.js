const webpack = require('webpack')
const packageJson = require('./package.json')

const isProd = (process.env.NODE_ENV || 'production') === 'production'

const appConfig = require('./config/app.config')
const assetPrefix = isProd ? `/${packageJson.name}` : ''

const publicRuntimeConfig = {
  // Will be available on both server and client
  ...appConfig
}

module.exports = {
  assetPrefix,
  publicRuntimeConfig,
  webpack: config => {
    config.plugins.push(
      new webpack.DefinePlugin({
        'process.env.ASSET_PREFIX': JSON.stringify(assetPrefix)
      })
    )

    return config
  }
}
