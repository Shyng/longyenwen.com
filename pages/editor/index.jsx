import React from 'react';
import ReactDom from 'react-dom';
// import {Input, Button} from 'antd';

import './index.less';
import LywView from './lyw-view/index.jsx';

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
    this.setState({ value });
  }
  render() {
    const { value } = this.state;
    // console.log(value);
    return (
      <div className="lyw-editor-app">
        <LywView value={value} />
        <div className="lyw-editor lyw-col">
          <textarea onChange={this.handleEditorChange} />
        </div>
      </div>
    );
  }
}

ReactDom.render(<Editor />, document.getElementById('root'));
