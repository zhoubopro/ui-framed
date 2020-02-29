const path = require('path');
module.exports = {
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'scss',
      patterns: [
        path.resolve(__dirname, 'src/styles/_var.scss'),
      ]
    },
  },
  configureWebpack: config => {
    if (process.env.NODE_ENV === 'production') {
      // 为生产环境修改配置...
      config.externals = {
        vue: "Vue"
      }
    } else {
      // 为开发环境修改配置...
    }
  }
}
