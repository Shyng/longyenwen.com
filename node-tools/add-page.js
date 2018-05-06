const fs = require('fs');
const readline = require('readline');

const tools = require('./common-tools.js');
const {
  dirExistsSync
} = tools;

const appName = process.argv[2];
const isMod = process.argv[3] === 'mod';
const dirName = isMod ? '_components' : '_src';
// console.log(process.argv);

// console.log(process.argv);

const nameValidation = (name, cb, rl) => {
  if (!name) {
    rl && rl.close();
    rlAsk('请输入应用名');
  } else if (dirExistsSync(`${dirName}/${name}`)) {
    rl && rl.close();
    rlAsk(`${name}已存在，换一个吧`);
  } else {
    rl && rl.close();
    cb(name);
  }
}

function rlAsk(ques) {
  //创建readline接口实例
  let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  rl.question(ques, (newAppName) => {
    nameValidation(newAppName, createNewApp, rl);
  });
}

function createNewApp(name) {
  // const replaceArg = [
  //   /(Xxx)|(xxx-page)/g,
  //   (str) => {

  //   }
  // ];
  const camel = name.replace(/(\-|^)\w/g, (str) => {
    // console.log(str);
    return str[1] ? str[1].toUpperCase() : str[0].toUpperCase();
  });

  fs.mkdir(`${dirName}/${name}/`, (err) => {
    fs.readdirSync(`${dirName}/_template`).forEach((file) => {
      fs.readFile(`${dirName}/_template/${file}`, (err, data) => {
        // console.log(data.toString());
        !err && fs.writeFile(
          `${dirName}/${name}/${file}`,
          data.toString()
            .replace(/Xxx/g, camel).replace(/xxx\-page/g, `${name}-page`),
          err => {
            !err && console.log(`成功创建文件${dirName}/${name}/${file}`);
          }
        );
      });
    });
  });
}

nameValidation(appName, createNewApp);