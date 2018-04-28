import React from 'react';
import { Table } from 'antd';
// import LywView from 'components/lyw-view/index.jsx';

import dataSource from './data.jsx';
import './index.less';

console.log(dataSource);


// const dataSource = [{
//   key: '1',
//   name: 'Mike',
//   age: 32,
//   address: '10 Downing Street'
// }, {
//   key: '2',
//   name: 'John',
//   age: 42,
//   address: '10 Downing Street'
// }];

const columns = [{
  title: '龙彦',
  dataIndex: 'ly',
  key: 'ly',
  width: 50,
  // render: (ly) => {

  // },
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
}];

/**
 * 分新浪版、国际版（加国际音标）
 */
export default (props = {}) => {
  return (
    <div className="alphabet">
      <section>

        <h3>辅音</h3>
        <aside>
          <Table
            dataSource={dataSource.consonants_0}
            columns={columns}
            bordered
            pagination={{ pageSize: 20 }}
          />
        </aside>
        <aside>
          <Table
            dataSource={dataSource.consonants_1}
            columns={columns}
            bordered
            pagination={ { pageSize: 20 } }
          />
        </aside>
      </section>

    </div>
  );
}

// class Alphabet extends React.Component {

// }