import React from 'react';
import ReactDOM from 'react-dom';
import { Input } from 'antd';
import LywView from 'components/lyw-view/index.jsx';
import './index.less';

class MiniLywEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };
  }
  onChange = (e) => {
    const { value = '' } = e.target || {};
    this.setState({ value });
  }
  render() {
    const { value } = this.state;
    const { inputProps = {} } = this.props;
    return (
      <div className="mini-lyw-editor" ref={(r) => { this.bar = r; }}>
        <LywView
          className="mini-lyw-view"
          ref={(r) => { this.view = r; }}
          dataSource={value}
        />
        <Input onChange={this.onChange} {...inputProps} />
      </div>
    );
  }
  getValue = () => this.state.value;
  getLength = () => {
    const viewNode = ReactDOM.findDOMNode(this.view);
    if (!viewNode || !viewNode.childNodes) return 0;
    const pre = viewNode.childNodes[0];
    if (!pre || !pre.childNodes || !pre.childNodes.length) return 0;
    let len = 0;
    pre.childNodes.forEach((child) => {
      if (child.nodeType === 3) {
        len += child.length;
      } else {
        len++;
      }
    });
    return len;
  }
}

export default MiniLywEditor