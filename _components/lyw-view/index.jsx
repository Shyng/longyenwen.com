import React from 'react';
import { Button } from 'antd';
import { lywFont } from 'components/lyw-svg/index.jsx';
import EmergePane from 'components/emerge-pane/index.jsx';
import { DEFAULT_FONT_SIZE, klas, osIsWin } from 'components/_utils.js';
import { sensianize } from './consts.js';

import './index.less';

class LywView extends React.Component {
  constructor(props) {
    super(props);
    this.cls = klas('lyw-view',
      String(props.className || ''),
      {
        'is-win': osIsWin,
        'align-center': props.align === 'c',
        'single': typeof props.dataSource === 'string',
      });
    const fontStyle = Object.assign({
      // fontSize: DEFAULT_FONT_SIZE,
    }, props.fontStyle);
    this.state = {
      fontStyle,
    };
  }
  static defaultProps = {
    viewType: 'vertical', // 竖着一起展示
    langs: ['ss', 'cn'],
    animType: 'fade',
    fontStyle: {
      fontSize: DEFAULT_FONT_SIZE,
      // lineHeight: , // 最好别设
      color: '#333', // NOTE: 这不是龙彦
      fill: '#333', // NOTE: 这才是龙彦
    },
  };
  componentWillReceiveProps(nextProps) {
    if (JSON.stringify(nextProps.fontStyle) !== JSON.stringify(this.props.fontStyle)) {
      this.setState({ fontStyle: nextProps.fontStyle });
    }
  }
  /**
   * @struct PropType
   * - viewType: oneOf(['vertical', 'horizontal', 'hover'(<=2), 'click'])
   */
  render() {
    // const { dataSource, fontStyle } = this.props;
    // console.log(viewType, langs);
    // if (typeof dataSource === 'string') {

    // }
    return (
      <div className={this.cls}>
        {/*
          typeof dataSource === 'string'
          ? <pre style={fontStyle}>{this.escXor(dataSource)}</pre>
          :
          this._renderMulti()
         */}
        {
          this._renderMulti()
        }
      </div>
    );
  }
  _renderMulti = () => {
    let { dataSource, viewType, langs, animType } = this.props;
    if (typeof dataSource === 'string') {
      dataSource = [{ ss: dataSource, cn: '' }];
    } else if (
      !(dataSource instanceof Array) && (dataSource instanceof Object)
    ) {
      dataSource = [dataSource];
    }
    const { fontStyle } = this.state;
    if (!fontStyle.lineHeight && fontStyle.fontSize) {
      fontStyle.lineHeight = fontStyle.fontSize * 1.5 + 'px';
    }
    // if (['vertical', 'horizontal'].includes(viewType)) {
    return (
      <div className="lyw-multi">
        {
          dataSource.map((p, key) => {
            return (
              <div
                className={`lyw-paragraph view-type-${viewType} anim-type-${animType}`}
                key={key}
              >{
                langs.map((lang, lKey) => {
                  let lanContent = p[lang];
                  if (lang === 'ss') {
                    lanContent = this.escXor(lanContent);
                  }
                  return (
                    <pre
                      key={lKey}
                      className={`lyw-lang-${lang} lyw-lang-index-${lKey}`}
                      style={fontStyle}
                    >{lanContent}</pre>
                  );
                })
              }</div>
            );
          })
        }
      </div>
    );
    // }
    // return this._renderMulti();
  }
  /**
   * @return {[type]}   [description]
   */
  escXor = (str) => {
    // test:
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
    // console.log(this.state.fontStyle)
    // console.log(str);
    // return str.toUpperCase();
    // let { fontStyle } = this.state;
    const fontStyle = { ...this.state.fontStyle };
    fontStyle.color && (fontStyle.fill = fontStyle.color);
    const len = str.length;
    // const patt = /[a-z]+[0-5]/;
    const patt = /([a-zü]+[0-4])|([a-zü'\-]{2,}5)/;
    let result = [];
    let i = 0;
    let n = 0;
    let curr;
    const pushInForm = (startI, index, code) => {
      // index && console.log('in Form', str.slice(startI, startI + index));
      index && result.push(sensianize(str.slice(startI, startI + index)));
      code && result.push(lywFont({
        code,
        key: startI,
        fontStyle: this.state.fontStyle,
      }));
    }
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
}

export default LywView;

const commonLywHover = {
  viewType: "hover",
  langs: ['ss', 'cn'],
  animType: "fade",
};


export const LywHover = props => <LywView {...commonLywHover} {...props} />;
export const LywHoverCn = LywHover; // 向下兼容

export const LywBtn = (props = {}) => {
  const { btnProps = {}, ...lywProps } = props;
  // const lywProps = {...props};
  // delete lywProps.btnProps;
  lywProps.fontStyle = Object.assign({}, (props.fontStyle || {}), {
    fill: ({
      primary: '#fff',
      danger: '#f5222d',
    })[btnProps.type] || 'rgba(0, 0, 0, 0.65)',
  });
  return (
    <Button {...btnProps}>
      <LywHoverCn {...lywProps} />
    </Button>
  );
}