import React from 'react';
import { lywFont } from 'components/lyw-svg/index.jsx';
// console.log(lywSvg, lywFont);

class LywView extends React.Component {
  constructor(props) {
    super(props);
  }
  paragraphParser = (value) => {
    let pList = value.split('\n');
    // console.log(pList);
    return (
      <div>
        {
          pList.map((p, index) => {
            return <div key={index}>{this.escXor(p)}</div>;
          })
        }
      </div>
    );
  }
  /**
   * @struct
   p => [
     ' ',
     ``,
     ' ',
     ``,
     ' '
   ]
   * @param  {[type]} p [description]
   * @return {[type]}   [description]
   */
  escXor = (str) => {
    // test:
    str = 'mei3天 dou1 有 javaskript。mei2有 \\` l0 `转\\`义zhuan3` AND hai2有 `zai4转义`。学 d0 \\` fei1chang2 快！';
    // mei3|--|dou1|--|javaskript|--|mei2|--|l0|--|hai2|--|d0|--|fei1chang2|
    // end test
    const len = str.length;
    // let patt = /(?<!`)`(?!`)/; // unescape `` // behindlook死不瞑目
    const patt = /`/; // unescape V`
    let i = 0;
    let n = 0; // 次数，用于区别奇偶数的`
    let result = [];
    let curr; // 当前exec返回结果
    const pushInForm = (startI, endI) => {
      let part = n % 2 ? this.lywXor(str.slice(startI, endI)) : str.slice(startI, endI);
      result.push(part);
    }
    while (n < 99) {
      let startI = i; // 先存初始值i
      n++;
      curr = patt.exec(str.slice(i, len));
      if (!curr) {
        pushInForm(startI, len);
        break;
      }
      let isConterEsc = str[i + curr.index - 1] === '\\'; // 伪转义
      if (isConterEsc) {
        // 捕捉伪转义。为了behindlook忙到2点
        // console.log('get ' + str[i + curr.index - 1]);
        curr = patt.exec(str.slice(i = i + curr.index + 1, len));
        if (!curr) {
          pushInForm(startI, len);
          break;
        }
      }
      curr.index && pushInForm(startI, i = i + curr.index);
      i++;
    }
    console.log('escArr ', result);
    return result;
  }
  lywXor = (str) => {
    const len = str.length;
    const patt = /[a-z]+[0-4]?/;
    let result = [];
    let i = 0;
    let n = 0;
    let curr;
    const pushInForm = (startI, index, lyw) => {
      index && console.log('in Form', str.slice(startI, startI + index));
      index && result.push(str.slice(startI, startI + index));
      lyw && result.push(lywFont(lyw, startI));
    }
    while (n < 22) {
      let startI = i; // 先存初始值i
      n++;
      curr = patt.exec(str.slice(i, len));
      // console.log(curr);
      if (!curr) {
        pushInForm(startI, len - startI);
        break;
      }
      pushInForm(startI, curr.index, curr[0]);
      i += curr.index + curr[0].length;
    }
    return result;
  }
  render() {
    const { value } = this.props;
    return (
      <div className="lyw-view lyw-col">
        {this.paragraphParser(value)}
      </div>
    );
  }
}

export default LywView;
