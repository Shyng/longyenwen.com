import React from 'react';
import ReactDOM from 'react-dom';
// import { Input } from 'antd';
import { klas } from 'components/_utils.js';
import './index.less';

class EmergePane extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {
    // };
  }
  render() {
    // const {  } = this.state;
    const { visible, onClose, children } = this.props;
    return (
      <div className={klas('emerge-pane-page', { visible })}>
        <div className="close-btn" onClick={onClose}>
          <div className="iconfont-ly ly-closeround"  />
        </div>
        { children }
      </div>
    );
  }
}

export default EmergePane;