const path = require('path')

const resolve = dir => path.join(__dirname, dir)

module.exports = {
  chainWebpack: config => {
    // 设置别名
    config.resolve.alias
      .set('@', resolve('src'))
      .set('@views', resolve('src/views'))
      .set('@api', resolve('src/api'))
      .set('@components', resolve('src/components'))
      .set('$', resolve('node_modules'))
    
     // 取消 默认对 .svg 的解析规则 
    config.module
      .rule('svg')
      .exclude.add(resolve('src/assets/icons'))
      .end()
    // 对 .svg 文件使用 svg-sprite-loader 解析
    config.module
      .rule('icons')
      .test(/\.svg$/)
      .include.add(resolve('src/assets/icons'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]'
      })
  },
  // 解析 css, 在每个添加了  <style lang="scss"> 的组件中引入 公共样式文件 
  css: {
    loaderOptions: {
      scss: {
        prependData: `@import "~@/assets/styles/main.scss";`
      }
    }
  },
  devServer: {
    port: 8899,
    proxy: {
      '/ley/': {
        target: 'http://localhost:8090/'
        // target: 'http://192.168.5.8:8090/'  // 家里电脑
      }
    }
  }
}