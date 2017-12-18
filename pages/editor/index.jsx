import React from 'react';
import ReactDom from 'react-dom';
// import {Input, Button} from 'antd';

import './index.less';
import LywView from 'components/lyw-view/index.jsx';

class Editor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };
    this.handleEditorChange = this.handleEditorChange.bind(this);
  }
  handleEditorChange(e = {}) {
    const { value = '' } = e.target || {};
    this.setState({
      value
    });
  }
  render() {
    const { value } = this.state;
    const fontStyle = {
      fontSize: 16,
    }
    // console.log(value);
    return (
      <div className="lyw-editor-app">
        <LywView value={value} fontStyle={fontStyle} />
        <div className="lyw-editor lyw-col" style={fontStyle}>
          <textarea onChange={this.handleEditorChange} />
        </div>
      </div>
    );
  }
}

ReactDom.render(<Editor />, document.getElementById('root'));


/**
 *
 调试 效果 出来 不一样
 tiao2she4 xiao4guo3 chu1lai2 bu4一yang4
 */

/**
 * @todo
 * 边距问题
 * 剩余字符
 *
 */
