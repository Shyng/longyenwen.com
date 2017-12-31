import React from 'react';
import { Icon, Modal, Popover, Input, Button, message } from 'antd';
import LywView, { LywHoverCn, LywBtn } from 'components/lyw-view/index.jsx';
import MiniLywEditor from 'components/mini-lyw-editor/index.jsx';
import './index.less';

class LywNav extends React.Component {
  // constructor(props) {
  //   super(props);
  //   // this.state = {
  //   //   newTitle: '',
  //   // };
  // }
  render() {
    // console.log(this.state);
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
    // console.log(this.props.savingData);
    
    // const lis = [];
    // for(let i=0;i<10;i++){
    //   lis
    // }
    return (
      <div className="saving-menu">
        <h3 style={{ marginBottom: 16 }}>Default Size</h3>
        <ol>{
          this.props.savingData.map((item, sKey) => this._savingItem(item, sKey))
        }</ol>
      </div>
    );
  }
  _savingItem = (item, sKey) => {
    // console.log(item);
    const { title } = item || {};
    return (
      <li className="saving-item" key={sKey}>
        <div className="saving-item-index">{ sKey + 1 }.</div>
        <div className="saving-item-title">
          <LywView dataSource={title || '----'} />
        </div>
        <div className="saving-item-operating">
          { title && <LywBtn
            btnProps={{
              onClick: () => { this.onLoad(sKey); },
            }}
            dataSource={[{ ss: 'du2qu3', cn: '读取' }]}
            fontStyle={{ fontSize: 14 }}
          /> }
          <LywBtn
            btnProps={{
              type: 'primary',
              onClick: () => { this.onRewrite(sKey); },
            }}
            dataSource={[{ ss: 'fu4gai4', cn: '覆盖' }]}
            fontStyle={{ fontSize: 14 }}
          />
          { title && <LywBtn
            btnProps={{
              type: 'danger',
              onClick: () => { this.onDelete(sKey); },
            }}
            dataSource={[{ ss: 'shan1chu2', cn: '删除' }]}
            fontStyle={{ fontSize: 14 }}
          /> }
        </div>
      </li>
    );
  }
  onRewrite = (index) => {
    // console.log(this.state);
    const { savingData = [] } = this.props;
    const { title } = savingData[index] || {};
    // console.log(newTitle);
    let content;
    if (!title) {
      // content = `${index+1}号存档为空，保存当前编辑内容到此存档吗？`;
      content = (
        <div className="modal-content">
          {index + 1}号存档为空，保存当前编辑内容到此存档吗？请起新标题后按确认：
          <div>
            <MiniLywEditor
              ref={(r) => { this.titleEditor = r; }}
              inputProps={{ placeholder: '这里也是可以写龙彦文的' }}
            />
          </div>
        </div>
      );
    } else {
      content = (
        // lywMulti并行显示：
        <div className="modal-content">
          确认删除标题为<LywView dataSource={ title } />
          的{index+1}号原文档，并保存当前编辑内容到此存档吗？请起新标题后按确认：
          <div>
            <MiniLywEditor
              ref={(r) => { this.titleEditor = r; }}
              inputProps={{ placeholder: '这里也是可以写龙彦文的' }}
            />
          </div>
        </div>
      );
    }
    Modal.confirm({
      content,
      onOk: (closeCb) => {
        const len = this.titleEditor.getLength();
        const newTitle = this.titleEditor.getValue();
        if (!len) {
          // message.error(<div style={{width: 400}}>hello</div>, 222);
          message.error('标题还没起呢');
        } else if (len > 22) {
          message.error('字数超过了，能不能短一点？');
        } else {
          message.success('保存成功');
          closeCb();
          this.props.savingCb('rewrite', index, newTitle);
        }
      },
    });
  }
  onLoad = (index) => {
    // console.log(this.state);
    const { savingData = [] } = this.props;
    const { title } = savingData[index] || {};
    // console.log(newTitle);
    let content = (
      // lywMulti并行显示：
      <div className="modal-content">
        确认读取标题为<LywView dataSource={ title } />
        的{ index + 1 }号文档？当前编辑区内容将被清除。
      </div>
    );
    Modal.confirm({
      content,
      onOk: (closeCb) => {
        this.props.savingCb('load', index);
        closeCb();
      },
    });
  }
  onDelete = (index) => {
    // console.log(this.state);
    const { savingData = [] } = this.props;
    const { title } = savingData[index] || {};
    // console.log(newTitle);
    let content = (
      // lywMulti并行显示：
      <div className="modal-content">
        确认删除标题为<LywView dataSource={ title } />
        的{ index + 1 }号文档？此操作不可恢复。
      </div>
    );
    Modal.confirm({
      content,
      onOk: (closeCb) => {
        this.props.savingCb('delete', index);
        closeCb();
      },
    });
  }
}

export default LywNav;