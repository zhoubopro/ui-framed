const path = require('path');
module.exports = {
  // 此方法在vueperss中报找不到scss-loader
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'scss',
      patterns: [
        path.resolve(__dirname, 'src/styles/_var.scss'),
      ]
    },
  },
  // css: {
  //   loaderOptions: {
  //     sass: {
  //       includePaths: [path.join(__dirname, 'src/styles')]
  //     },
  //   }
  // },
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
