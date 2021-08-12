module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  devServer:{
    proxy:{
      '/api':{
        target:'21.0119.225.18:3030/api',
        changeOrigin: true,
        pathRewirte:{
          '^/api':''
        }
      }
    }
  },
outputDir:'../exp-vue/public',
}
