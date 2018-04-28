import React from 'react';
import ReactDom from 'react-dom';
// import {Input, Button} from 'antd';
import LywView, { LywHover, LywBtn } from 'components/lyw-view/index.jsx';

import './index.less';

class LywDemo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    return (
      <div className="lyw-demo-page">
        <div className="demo-item">
          <label>完整</label>
          <LywView
            dataSource={[
              { ss: 'ni3hao3', cn: '你好' },
              { ss: 'xie4xie4', cn: '谢谢' }
            ]}
            fontStyle={{ fontSize: 16 }}
          />
        </div>
        <div className="demo-item">
          <label>single</label>
          <LywView dataSource="ni3hao3" />
        </div>
        <div className="demo-item">
          <label>颜色</label>
          <LywView
            dataSource="ni3hao3。再见！"
            fontStyle={{ color: 'red' }}
          />
        </div>
        <div className="demo-item">
          <label>hover</label>
          <LywHover
            dataSource={[
              { ss: 'ni3hao3', cn: '你好' },
              { ss: 'xie4xie4', cn: '谢谢' }
            ]}
          />
        </div>
        <div className="demo-item">
          <label>auto(待定)</label>
          <LywView dataSource="ni3hao3" />
        </div>
        <div className="api-explanation">
          <p>fontStyle有两个属性要用到的：fontSize和color</p>
        </div>
      </div>
    );
  }
}

ReactDom.render(<LywDemo />, document.getElementById('root'));
