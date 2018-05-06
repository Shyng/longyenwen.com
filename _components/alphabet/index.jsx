import React from 'react';
import { Table, Switch } from 'antd';
import LywView from 'components/lyw-view/index.jsx';

import dataSource from './data.jsx';
import './index.less';

const columns = [{
  title: '龙彦',
  dataIndex: 'ly',
  key: 'ly',
  width: 60,
  className: 'ly',
}, {
  title: '拼音',
  dataIndex: 'pinyin',
  key: 'pinyin',
  width: 60,
}, {
  title: '示例',
  dataIndex: 'example',
  key: 'example',
}, {
  title: '说明',
  dataIndex: 'note',
  key: 'note',
  className: 'note',
}];

const columnsTone = [
  { title: '第一声', dataIndex: 'y1', key: 'y1' },
  { title: '第二声', dataIndex: 'y2', key: 'y2' },
  { title: '第三声', dataIndex: 'y3', key: 'y3' },
  { title: '第四声', dataIndex: 'y4', key: 'y4' },
];

const columnsHeng = [{
  title: '龙彦',
  dataIndex: 'ly',
  key: 'ly',
  width: 60,
  className: 'ly',
}, {
  title: '说明',
  dataIndex: 'note',
  key: 'note',
  className: 'note',
}];

/**
 * 分新浪版、国际版（加国际音标）
 */
export default class Alphabet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      detailed: false,
    };
  }
  toggleDetail = (detailed) => {
    this.setState({ detailed });
  }
  render() {
    const { detailed } = this.state;
    const exampleStyle = { fontStyle: { fontSize: 22 } };

    const sects = [
      <section key="0">
        <h3>辅音</h3>
        <aside className="aside-consonant">
          <Table
            dataSource={dataSource.consonants_0}
            columns={ detailed ? columns.slice(0, 3) : columns.slice(0, 2) }
            bordered
            // pagination={{ pageSize: 20 }}
          />
        </aside>
        <aside className="aside-consonant">
          <Table
            dataSource={dataSource.consonants_1}
            columns={ detailed ? columns : columns.slice(0, 2) }
            bordered
            // pagination={ { pageSize: 20 } }
          />
        </aside>
      </section>,
      <section key="1">
        <h3>元音</h3>
        <aside>
          <Table
            dataSource={dataSource.vowels}
            columns={ detailed ? columns : columns.slice(0, 2) }
            bordered
          />
        </aside>
      </section>,
      <section key="2" className="tone">
        <h3>声调符号</h3>
        <Table
          dataSource={dataSource.tones}
          columns={columnsTone}
          bordered
        />
        { detailed && <div className="note">说明：位置在每个方块字的最下面，轻声不用</div> }
      </section>,
      <section key="3" className="heng">
        <h3>横彦符号</h3>
        {
          detailed ? (
            <div className="heng-detailed">
              <div>横彦是用来拼写外来词的龙彦文，从左到右书写，其中有2个特殊符号：</div>
              <div className="heng-block">
                <LywView className="voiced" dataSource="v'v5" fontStyle={{ fontSize: 32 }} />
                浊音符号。用于表示外来词中的 b, d, g, v, z, j 等
                <a target="_blank" href="https://www.zhihu.com/question/19726418/answer/12772647">浊音</a>。用法示例：
                <div className="example">
                  <LywView dataSource="logik5" {...exampleStyle} />
                  &nbsp;logic 逻辑<br/>
                  <LywView dataSource="jaz5" {...exampleStyle} />
                  &nbsp;jazz 爵士乐<br/>
                  <LywView dataSource="viena5" {...exampleStyle} />
                  &nbsp;Vienna 维也纳
                </div>
                <div className="note">读音：最好是念成标准的浊音，当然也可以按自己的习惯念</div>
              </div>
              <div className="heng-block">
                <LywView className="gramma-r" dataSource="'r5" {...exampleStyle} />
                用于表示外来词中的R，用法示例：
                <div className="example">
                  <LywView dataSource="afrika5" {...exampleStyle} />
                    &nbsp;Africa 非洲<br/>
                  <LywView dataSource="ostralia5" {...exampleStyle} />
                  &nbsp;Australia 澳洲
                </div>
                <div className="note">读音：同L</div>
              </div>
            </div>
          ) : (
            <Table
              className="not-detailed"
              dataSource={[
                { key: 0, ly: <LywView className="voiced" dataSource="v'v5" />, note: '浊' },
                { key: 1, ly: <LywView className="gramma-r" dataSource="'r5"  />, note: 'R' },
              ]}
              columns={columnsHeng}
              bordered
            />
          )
        }
      </section>,
    ];

    if (detailed) {
      let temp = sects[1];
      sects[1] = sects[2];
      sects[2] = temp;
    }

    return (
      <div className="alphabet">
        <div className="head">
          <Switch
            checkedChildren="详细" unCheckedChildren="简明"
            onChange={this.toggleDetail}
          />
        </div>
        <div className="body">
          { sects }
          {/* <section>
            <h3>语法规则</h3>

          </section> */}
        </div>
      </div>
    );
  }
}