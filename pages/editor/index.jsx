import React from 'react';
import ReactDom from 'react-dom';
// import {Input, Button} from 'antd';

import './index.less';
import LywView from 'components/lyw-view/index.jsx';
import LywNav from './lyw-nav/index.jsx';



class Editor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      viewData: [],
      savingData: JSON.parse(localStorage.getItem('editorStorage')) || new Array(10).fill({}),
      savingIndex: null, // 当前操作的saving存档
    };
  }
  componentDidMount() {
    // console.log('dd');
    
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
  updateEditorStorage = () => {
    localStorage.setItem('editorStorage', JSON.stringify(this.state.savingData));
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
    }, this.updateEditorStorage);
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
    }, this.updateEditorStorage);
  }
  savingCb = (type, ...params) => {
    this[({
      rewrite: 'rewriteSaving',
      load: 'loadSaving',
      delete: 'deleteSaving',
    })[type]](...params);
  }
  render() {
    const { value, viewData, savingData } = this.state;
    const fontStyle = {
      fontSize: 18,
      // lineHeight: '24px',
    }
    // console.log(viewData);
    return (
      <div className="lyw-editor-app theme-cold">
        <LywNav
          savingData={savingData}
          savingCb={this.savingCb}
          _onRewrite={this.rewriteSaving}
        />
        <LywView
          className="lyw-col"
          dataSource={viewData}
          fontStyle={{ ...fontStyle, color: '#174458', fill: '#174458' }}
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

/**
 * @todo
 *
 */
