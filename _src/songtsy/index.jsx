import React from 'react';
import ReactDom from 'react-dom';
import { Input } from 'antd';
import { LywHoverCn } from 'components/lyw-view/index.jsx';
// import { LywHoverCn } from 'components/lyw-view/index.jsx';

import './index.less';

import Tsy from './tsy.jsx';

class SongTsy extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fontSize: 24,
    };
  }

  handleFontSize = (e) => {
    // throw new Error('ddd');
    this.setState({
      fontSize: e.target.value,
    });
  }

  render() {
    const { fontSize } = this.state;
    return (
      <div className="songtsy-page">
        <header className="songtsy-header">
          <h2 className="songtsy-title">国民 教育</h2>
          <h3 className="songtsy-subtitle">龙彦文 认读 训练</h3>
          <LywHoverCn className="songtsy-desc" dataSource={ [{
            cn: '龙彦文虽说写起来很容易，但没汉字那么有辨识度，需要一段时间的认读训练。可是龙彦文又没那么多的文本资料，无法提升阅读量，怎么办？那就用电脑自动生成呗。本页面利用宋词格律，自动生成朗朗上口的龙彦文。开启你的训练吧！',
            ss: '龙彦文 sui1shuo1 写 qi3lai2 容易，dan4 mei2 漢字 na4me0 有 辨识度，需要 一段 時间 d0 认读 训练。ke3shi4 龙彦文 又 mei2 na4me0 多 d0 文本 资料，无法 提升 阅读量，z0m0ban4？na4 jiu4 用 电脑 自动 生成 bei0。本 页面 利用 宋词 格律，自动 生成 lang2lang2上口d0 龙彦文。开启 ni3d0 训练 ba0！',
          }] } />
          <aside className="songtsy-setting">
            <div className="songtsy-setting-item">
              字体 大小：
              <Input
                  className="font-size-setting"
                  type="number" max="48" min="12"
                  value={ fontSize }
                  onChange={ this.handleFontSize }
                /> px
            </div>
          </aside>
        </header>
        <section className="songtsy-body">
          <Tsy fontSize={fontSize} />
          <Tsy fontSize={fontSize} />
        </section>
      </div>
    );
  }
}

ReactDom.render(<SongTsy />, document.getElementById('root'));
