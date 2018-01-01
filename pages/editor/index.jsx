import React from 'react';
import ReactDom from 'react-dom';
// import {Input, Button} from 'antd';

import './index.less';
import LywView from 'components/lyw-view/index.jsx';
import LywNav from './lyw-nav/index.jsx';

import Theme from './theme/theme.js'; // 主题要配置2个地方，一个是less，一个是js

const defaultValue = `欢迎 使用 龙彦文 编辑器。
右边 shi4 编辑 区域，左边 neng2 根据 编辑区 内容， 实时 显示 对应d0 龙彦文。如 在 右边 输入 {ni3hao3}，jiu4neng2 在 左侧 看dao4 “你好” 一词 d0 龙彦文 写法。
---

我相信你一定看得懂上面那段话，但不一定知道什么是龙彦文。龙彦文字，是一种中文改进方案。本方案保留汉字在书面语中的地位，只是将口语词和外来词替换为更容易书写的龙彦文。龙彦文全部由27个字母和4个音调符号拼接而成，不但易学易用、整洁美观，还能更准确地转译读音，方便引用外语词汇：

- hai5 亲爱d0 keit5！gei3 wo3 lai2 一杯 kafi5。
- shi4 二gou3zi0 a0，hao3久不见。yao4 杯 late5 hai2shi4 kapucino5？

- 嗨，亲爱的Kate！给我来一杯咖啡。
- 是二狗子啊，好久不见！要杯拿铁还是卡布奇诺？

关于龙彦文的更多信息，不久后将会在本网站发布。
【备注】以5结尾的单词会被转译为外来词；{}内的内容不会被转译`;


class Editor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: defaultValue,
      viewData: this.produceViewData(defaultValue),
      savingData: JSON.parse(localStorage.getItem('editorStorage')) || new Array(10).fill({}),
      settings: JSON.parse(localStorage.getItem('editorSettings')) || {
        fontSize: 18,
        theme: 'coldBack',
      },
    };
  }

  handleEditorChange = (e = {}) => {
    let { value = '' } = e.target || {};
    // value = value.replace(/dd/g, 'D');
    this.setState({
      value,
      viewData: this.produceViewData(value),
    });
  }
  produceViewData = (value) => {
    let viewData = value.split('\n');
    return viewData.map((prg) => ({ ss: prg }));
  }
  updateLocalStorage = (type) => {
    if (type === 'saving') {
      localStorage.setItem('editorStorage', JSON.stringify(this.state.savingData));
    } else if (type === 'setting') {
      localStorage.setItem('editorSettings', JSON.stringify(this.state.settings));
    }
  }
  /* 文档存取功能的3合1 */
  rewriteSaving = (index, newTitle) => {
    // console.log(index, newTitle);
    let { savingData, value } = this.state;
    savingData[index] = {
      content: value,
      title: newTitle,
    };
    this.setState({
      savingData
    }, () => { this.updateLocalStorage('saving'); });
  }
  loadSaving = (index) => {
    // console.log(index);
    const { savingData = [] } = this.state;
    const { content } = savingData[index] || {};
    // console.log(content);
    this.setState({
      value: content,
      viewData: this.produceViewData(content), // 这一步比较憋屈
    });
  }
  deleteSaving = (index) => {
    // console.log(index);
    const { savingData = [] } = this.state;
    savingData[index] = {};
    // console.log(content);
    this.setState({
      savingData
    }, () => { this.updateLocalStorage('saving'); });
  }
  savingCb = (type, ...params) => {
    this[({
      rewrite: 'rewriteSaving',
      load: 'loadSaving',
      delete: 'deleteSaving',
    })[type]](...params);
  }
  /* 设置 */
  changeFontSize = (fontSize) => {
    const settings = Object.assign({}, this.state.settings, {
      fontSize: +fontSize,
    });
    // console.log(settings);
    this.setState({
      settings,
    }, () => { this.updateLocalStorage('setting'); });
  }
  changeTheme = (theme) => {
    const settings = Object.assign({}, this.state.settings, {
      theme,
    });
    // console.log(settings);
    this.setState({
      settings,
    }, () => { this.updateLocalStorage('setting'); });
  }
  settingCb = (type, ...params) => {
    this[({
      fontSize: 'changeFontSize',
      theme: 'changeTheme',
    })[type]](...params);
  }
  render() {
    const { value, viewData, savingData, settings = {} } = this.state;
    // console.log(settings);
    const fontStyle = {
      fontSize: settings.fontSize,
      // lineHeight: '24px',
    }
    const themeConfig = Theme[settings.theme] || {};
    // console.log(viewData);
    return (
      <div className={`lyw-editor-app ${themeConfig.cls}`}>
        <LywNav
          savingData={savingData}
          savingCb={this.savingCb}
          settings={settings}
          settingCb={this.settingCb}
        />
        <LywView
          className="lyw-col"
          dataSource={viewData}
          fontStyle={{
            ...fontStyle,
            color: themeConfig.viewColor,
            fill: themeConfig.viewColor,
          }}
          viewType1="single"
          langs={['ss']}
        />
        <div className="lyw-editor lyw-col" style={fontStyle}>
          <textarea onChange={this.handleEditorChange} value={value} spellCheck="false" />
        </div>
      </div>
    );
  }
}

ReactDom.render(<Editor />, document.getElementById('root'));
