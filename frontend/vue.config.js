const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    allowedHosts: 'all',
    host: '0.0.0.0',
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
      'Access-Control-Allow-Headers': 'X-Requested-With, content-type, Authorization',
    },
  },
  lintOnSave: false,
})

// module.exports = {
//   devServer: {
//     disableHostCheck: true,
//     host: '0.0.0.0',
//     public: '0.0.0.0:80',
//     headers: {
//       'Access-Control-Allow-Origin': '*',
//       'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
//       'Access-Control-Allow-Headers': 'X-Requested-With, content-type, Authorization',
//     },
//   },
//   lintOnSave: false,
// }

// module.exports = {
//   devServer: {
//     disableHostCheck: true,
//   },
// }
