const webpack = require('webpack');
const fs = require('fs');
const path = require("path");
const cheerio = require('cheerio');

const tools = require('./node-tools/common-tools.js');
const { fileExistsSync } = tools;

// const HtmlHash = require("./webpack-plugins/html-hash");

const Extracter = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

const now = new Date();
const timeHash = `${now.getFullYear()}-${now.getMonth()+1}-${now.getDate()}-${now.getHours()}-${now.getMinutes()}-${now.getSeconds()}`;

/**
 *
 * @param {*} options webpack --env.aaa=2
 */
module.exports = (options = {}) => {
  const apps = fs.readdirSync(__dirname + '/_src');
  var entry = {}, output = {},
    plugins = [new webpack.HotModuleReplacementPlugin()];
  // console.log(hash);
  // return;

  apps.forEach((p) => {
    entry[p] = `${__dirname}/_src/${p}/index.jsx`;
    if (!fileExistsSync(`${__dirname}/_demos/${p}.html`)) {
      console.info('===INFO=== _demos/%s.html文件不存在，现在为您创建，根据tpl/_template.html模板。修改后可用于本地调试', p);
      plugins.push(
        new HtmlWebpackPlugin({
          template: 'tpl/_template.html',
          filename: `../_demos/${p}.html`,
          // hash: true,
          cache: true,
          chunks: [p],
        })
      );
    }
    // build的情况，准备apps/的html文件，复制自_demos
    if (options.build) {
      var src = `${__dirname}/_demos/${p}.html`,
        dst = `${__dirname}/apps/${p}.html`;
      if (!fileExistsSync(dst) && fileExistsSync(src)) {
        console.log('===INFO=== apps/%s.html文件不存在，现在为您创建。修改后可直接应用到线上', p);

        fs.readFile(src, (err, data) => {
            var $ = cheerio.load(data.toString());
            $(`script[src*=${p}]`).attr('src', `../public/${p}.${timeHash}.js`);
            $(`link[href*=${p}]`).attr('href', `../public/${p}.${timeHash}.css`);
            fs.writeFile(dst, $.html(), err => {
              !err && console.log(`Set ${p} successfully with timeHash ${timeHash}`)
            });
        });
      }
    }
  });

  if (options.build) {
    // console.log('building');
    output = {
      path: __dirname + "/public", // 打包后的文件存放的地方
      filename: `[name].${timeHash}.js`// 打包后输出文件的文件名
    };
    plugins.unshift(new Extracter(`[name].${timeHash}.css`));
    !options.quick && plugins.push(new UglifyJSPlugin());

    // 删除旧文件
    ((dir) => {
      if (fs.existsSync(dir)) {
        console.log(dir);
        fs.readdirSync(dir).forEach((file) => {
          console.log('===INFO=== 清空public文件夹后，生成带hash的新的js、css文件');
          fs.unlinkSync(`${dir}/${file}`);
        });
      };
    })(__dirname + '/public');

  } else {
    output = {
      path: __dirname + "/public-dev", // 打包后的文件存放的地方
      filename: "[name].bundle.js" // 打包后输出文件的文件名
    };
    plugins.unshift(new Extracter('[name].bundle.css'));
  }

  const ret = {
    entry,
    output,
    plugins,
    devServer: {
      // contentBase: "./demos",//本地服务器所加载的页面所在的目录
      historyApiFallback: !true, // NOTE 坑货一逼！！！ 自动跳index
      inline: true,
      hot: true,
      port: 3000,
    },
    // devtool: 'eval-source-map',
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
    resolve: {
      alias: {
        components: path.join(__dirname, "./_components"), // less中@import要前面加 ~
      }
    },
  };

  return ret;
}

