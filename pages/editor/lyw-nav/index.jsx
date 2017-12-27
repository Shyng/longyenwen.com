import React from 'react';
import { Icon, Dialog, Popover, Input, Button } from 'antd';
import LywView, { LywHoverCn, LywBtn } from 'components/lyw-view/index.jsx';
import './index.less';

const saveData = [
  { title: '标题1', lan: 'cn' },
  { title: '' },
  { title: '标题3', lan: 'cn' },
];

class LywNav extends React.Component {
  render() {
    return (
      <div className="editor-nav">
        <div className="editor-nav-side">
          <Icon type="home" />
        </div>
        <LywHoverCn
          className="editor-nav-title"
          align="c"
          dataSource={[{
            ss: 'long2yan4wen2 bian1ji2qi4',
            cn: '龙彦文 编辑器'
          }]}
          fontStyle={{ fontSize: 20 }}
        />
        <div className="editor-nav-side">
          {/* <Icon type="setting" /> */}
          <Popover
            className="setting-popover"
            content={this._settingMenu()}
            placement="bottomRight"
            trigger="click"
          ><Icon type="setting" /></Popover>
          <Popover
            className="setting-popover"
            content={this._savingMenu()}
            placement="bottomRight"
            trigger="click"
          ><Icon type="save" /></Popover>
        </div>
      </div>
    );
  }
  _settingMenu = () => {
    return (
      <div className="setting-menu">
        <div className="setting-item">
          <div>
            <LywHoverCn
              dataSource={[{
                ss: '字ti3 大小：',
                cn: '字体大小：'
              }]}
              fontStyle={{ fontSize: 14 }}
            />
          </div>
          <div>
            <Input type="number" max="48" min="12" defaultValue="18" /> px
          </div>
        </div>
      </div>
    );
  }
  _savingMenu = () => {
    // const lis = [];
    // for(let i=0;i<10;i++){
    //   lis
    // }
    return (
      <div className="saving-menu">
        <h3 style={{ marginBottom: 16 }}>Default Size</h3>
        <ol>{
          saveData.map((item, sKey) => this._savingItem(item, sKey))
        }</ol>
      </div>
    );
  }
  _savingItem = (item, sKey) => {
    const { title = '-----', lan } = item;
    return (
      <li className="saving-item" key={sKey}>
        <div className="saving-item-title">{title}</div>
        <div className="saving-item-operating">
          <LywBtn
            dataSource={[{ ss: 'du2qu3', cn: '读取' }]}
            fontStyle={{ fontSize: 14 }}
          />
          <LywBtn
            btnProps={{ type: 'primary' }}
            dataSource={[{ ss: 'bao3cun2', cn: '保存' }]}
            fontStyle={{ fontSize: 14 }}
          />
          <LywBtn
            btnProps={{ type: 'danger' }}
            dataSource={[{ ss: 'shan1chu2', cn: '删除' }]}
            fontStyle={{ fontSize: 14 }}
          />
        </div>
      </li>
    );
  }
}

export default LywNav;