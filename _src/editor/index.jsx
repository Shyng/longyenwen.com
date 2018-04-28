import React from 'react';
import ReactDom from 'react-dom';
// import {Input, Button} from 'antd';

import './index.less';
import LywView from 'components/lyw-view/index.jsx';
import LywNav from './lyw-nav/index.jsx';

import { defaultEditorValue } from './consts.js';
import Theme from './theme/theme.js'; // 主题要配置2个地方，一个是less，一个是js

class Editor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: defaultEditorValue,
      viewData: this.produceViewData(defaultEditorValue),
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
