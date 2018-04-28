
// const fs = require('fs');
// const cheerio = require('cheerio');

// function HelloWorldPlugin(options) {
//   this.options = options;
//   // console.log('op', options);
// }

// HelloWorldPlugin.prototype.apply = function(compiler) {
//   var that = this;
//   compiler.plugin('done', function() {
//     // 这里的this应该是compiler
//     console.log(`===INFO=== 为apps中的html资源引用添加hash为${this.options.Hash}`);

//     fs.readFile('./index.html', (err, data) => {
//         const $ = cheerio.load(data.toString());
//         $('script[src*=dest]').attr('src', 'dest/bundle.'+stats.hash+'.js');
//         fs.write('./index.html', $.html(), err => {
//             !err && console.log('Set has success: '+stats.hash)
//         })
//     })
//   });
// };

// module.exports = HelloWorldPlugin;