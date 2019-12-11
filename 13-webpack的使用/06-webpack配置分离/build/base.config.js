const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyjsWebpackPlugin = require('uglifyjs-webpack-plugin');

// output 的path动态获取

module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'bundle.js',
    // publicPath: 'dist/'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        // css-loader 只负责将css文件加载
        // style-loader 负责将样式添加到DOM中
        // 使用多个loader时，是从右向左
        use: [ 'style-loader', 'css-loader' ]
      },
      {
        test: /\.less$/,
        use: [{
          loader: "style-loader" // creates style nodes from JS strings
        }, {
          loader: "css-loader" // translates CSS into CommonJS
        }, {
          loader: "less-loader" // compiles Less to CSS
        }]
      },
      {
        test: /\.(png|jpg|gif|jpeg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              // 当加载的图片，小于 limit 时，会将图片编译成 base64 字符串形式
              // 当加载的图片，大于 limit 时，需要使用 file-loader 模块进行加载
              limit: 20480,
              name: 'img/[name].[hash:8].[ext]'  //img 的 name 处理： img位置， 名字，hash 截取8位，格式
            }
          }
        ]
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015']
          }
        }
      },
      {
        //
        test: /\.vue$/,
        use: [ 'vue-loader' ]
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.css', '.vue'],  // 导入路径省略的文件类型扩展名
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
  },
  plugins: [
    new webpack.BannerPlugin('最终版权归me所有'),
    new HtmlWebpackPlugin({
      template: 'index.html'
    }),
    // new UglifyjsWebpackPlugin()
  ],
  // devServer: {
  //   contentBase: './dist',
  //   inline: true
  // }
}