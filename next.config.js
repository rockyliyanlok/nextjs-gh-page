const webpack = require('webpack')
const packageJson = require('./package.json');

const isProd = (process.env.NODE_ENV || 'production') === 'production'

const assetPrefix = isProd ? `/${packageJson.name}` : ''

module.exports = {
  assetPrefix,
  webpack: config => {
    config.plugins.push(
      new webpack.DefinePlugin({
        'process.env.ASSET_PREFIX': JSON.stringify(assetPrefix),
      }),
    )

    return config
  },
}
