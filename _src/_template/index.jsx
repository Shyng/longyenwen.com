import React from 'react';
import ReactDom from 'react-dom';
// import {Input, Button} from 'antd';
// import { klas } from 'components/_utils.js';

import './index.less';

class Xxx extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    return (
      <div className="xxx-page">
        Xxx
      </div>
    );
  }
}

ReactDom.render(<Xxx />, document.getElementById('root'));
