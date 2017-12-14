import React from 'react';
import { lywFont } from 'components/lyw-svg/index.jsx';

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
   * @return {[type]}   [description]
   */
  escXor = (str) => {
    // test:
    // str = '`p5` 12km 可pa4。mei3天 dou1 有 javaskript5。mei2有 \\` l0 `转\\`义zhuan3` AND hai2有 `zai4转义`。学 d0 \\` fei1chang2 快！';
    // str = '12km 可pa4。mei3天 dou1 有 javaskript5。mei2有 {转zhuan3义} l0。AND hai2有 {{转zhuan3yi4转}} dou1 有！'
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
    // return str.toUpperCase();
    const len = str.length;
    const patt = /[a-z]+[0-5]/;
    let result = [];
    let i = 0;
    let n = 0;
    let curr;
    const pushInForm = (startI, index, lyw) => {
      // index && console.log('in Form', str.slice(startI, startI + index));
      index && result.push(str.slice(startI, startI + index));
      lyw && result.push(lywFont({
        code: lyw,
        key: startI,
        fontStyle: this.props.fontStyle,
      }));
    }
    // TODO range
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
    const { value, fontStyle } = this.props;
    return (
      <div className="lyw-view lyw-col" style={fontStyle}>
        {this.paragraphParser(value)}
      </div>
    );
  }
}

export default LywView;
