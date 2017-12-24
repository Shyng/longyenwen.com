import React from 'react';
import { lywFont } from 'components/lyw-svg/index.jsx';

import './index.less';

class LywView extends React.Component {
  constructor(props) {
    super(props);
    this.osIsWin = navigator.userAgent.indexOf('Windows') > -1;
    this.cls = 'lyw-view lyw-col';
    this.osIsWin && (cls += ' is-win');
  }
  /**
   * @return {[type]}   [description]
   */
  escXor = (str) => {
    // test:
    // str = "target";
    // str = 'bayandur5 gulyander5 nayzuri5 osymatan5 banlangen5';
    // str = 'cheistrusharing5 harPu5 mitsaRf5';
    // str = '`p5` 12km 可pa4。mei3天 dou1 有 javaskript5。mei2有 \\` l0 `转\\`义zhuan3` AND hai2有 `zai4转义`。学 d0 \\` fei1chang2 快！';
    // str = '12km 可pa4。mei3天 dou1 有 javaskript5。mei2有 {转zhuan3义} l0。AND hai2有 {{转zhuan3yi4转}} dou1 有！'
    // str = 'zhe2she4 te2shu1 魔法    地方 ta3，号。{zhuan3yi4 转yi4} 大幅度 mo4。';
    // end test
    const len = str.length;
    const patt = /\{[^\}]+?\}/;
    let i = 0;
    let n = 0; // 次数，现在只做安全用
    let result = [];
    let curr; // 当前匹配返回结果
    while (n++ < 99) {
      let range = str.slice(i, len);
      curr = range.match(patt);
      // console.log(curr);
      if (!curr) {
        result.push(this.lywXor(range));
        break;
      }
      result = result.concat([
        this.lywXor(range.slice(0, curr.index)),
        curr[0].slice(1, curr[0].length - 1)
      ]);
      i += curr.index + curr[0].length;
    }
    // console.log('escArr ', result);
    return result;
  }
  lywXor = (str) => {
    // console.log(str);
    // return str.toUpperCase();
    const len = str.length;
    // const patt = /[a-z]+[0-5]/;
    const patt = /([a-z]+[0-4])|([a-z'\-]{2,}5)/;
    let result = [];
    let i = 0;
    let n = 0;
    let curr;
    const pushInForm = (startI, index, code) => {
      // index && console.log('in Form', str.slice(startI, startI + index));
      index && result.push(str.slice(startI, startI + index));
      // if (code === ' ') {
      //   console.log(code);
      //   return;
      // }
      code && result.push(lywFont({
        code,
        key: startI,
        fontStyle: this.props.fontStyle,
      }));
    }
    // TODO: range
    while (n < 999) {
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
      if (n > 999) {
        alert('这段太TM长了，请注意换行！！！');
        break;
      }
    }
    // console.log(result);
    return result;
  }
  render() {
    const { dataSource, fontStyle } = this.props;
    // console.log(dataSource);

    return (
      <div className={this.cls} style={fontStyle}>
        {
          dataSource.map((p, key) => {
            return <pre className="lyw-paragraph" key={key}>{this.escXor(p)}</pre>;
          })
        }
      </div>
    );
  }
}

export default LywView;
