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
      viewData: [],
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
    return viewData;
  }
  render() {
    const { value, viewData } = this.state;
    const fontStyle = {
      fontSize: 18,
    }
    // console.log(value);
    return (
      <div className="lyw-editor-app">
        <LywView dataSource={viewData} fontStyle={fontStyle} />
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
