const webpack = require('webpack');
const fs = require('fs');
const path = require("path");
const pages = fs.readdirSync(__dirname + '/pages');
const entry = {};
pages.forEach((p) => {
  entry[p] = `${__dirname}/pages/${p}/index.jsx`;
});

const Extracter = require('extract-text-webpack-plugin');

module.exports = {
  entry,
  output: {
    path: __dirname + "/public", // 打包后的文件存放的地方
    filename: "[name].bundle.js" // 打包后输出文件的文件名
  },
  devServer: {
    // contentBase: "./pages",//本地服务器所加载的页面所在的目录
    historyApiFallback: true, //不跳转
    inline: true,
    hot: true,
    port: 3000,
  },
  module: {
    loaders: [{
        test: /(\.jsx|\.js)$/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "es2015", "react", "stage-0"
            ]
          }
        },
        exclude: /node_modules/
      },
      {
        test: /\.less$/,
        exclude: /node_modules/,
        loader: Extracter.extract({
          // fallback: 'style-loader',
          use: ['css-loader', 'less-loader'],
        }),
      },
    ]
  },
  plugins: [
    new Extracter('[name].bundle.css'), // NOTE 一定要在js里import样式文件，不然不理
    // new webpack.HotModuleReplacementPlugin(),//热加载插件
  ],
  resolve: {
    alias: {
      components: path.join(__dirname, "./components"), // less中@import要前面加 ~
    }
  }
};

// console.log('listening on 3000');
