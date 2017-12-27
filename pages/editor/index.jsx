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
    };
  }
  componentDidMount() {
    
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
  render() {
    const { value, viewData } = this.state;
    const fontStyle = {
      fontSize: 18,
      // lineHeight: '24px',
    }
    // console.log(viewData);
    return (
      <div className="lyw-editor-app theme-cold">
        <LywNav />
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
