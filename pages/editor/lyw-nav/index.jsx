import React from 'react';
import { Icon, Modal, Popover, Input, Button, Radio, message, Tooltip } from 'antd';
import LywView, { LywHoverCn, LywBtn } from 'components/lyw-view/index.jsx';
import MiniLywEditor from 'components/mini-lyw-editor/index.jsx';
import Alphabet from 'components/alphabet/index.jsx';
import './index.less';

const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;

const { songtsyUrl } = window.PAGE_CONFIG || {};

class LywNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tutorialVisible: false,
    };
  }
  render() {
    // console.log(this.state);
    return (
      <div className="editor-nav">
        <div className="editor-nav-side">
          {/* <Icon type="home" /> */}
          <Icon type="question-circle" onClick={this.showTutorial} />
          <Tooltip placement="bottom" title="龙彦文 认读 训练">
            <span
              className="iconfont iconfont-reading"
              onClick={() => { window.open(songtsyUrl) }}
            />
          </Tooltip>
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
  showTutorial = () => {
    return (
      <div className={`tutorial-pane ${
        this.state.tutorialVisible ? 'visible' : 'hidden'
      }`}>
        <Alphabet />
      </div>
    );
    // Modal.info({
    //   title: '龙彦文 简单 教程',
    //   content: <Alphabet />,
    //   iconType: null,
    //   width: 1200,
    //   okText: '已 知晓',
    //   className: 'alphabet-dialog',
    // });
  }
  _settingMenu = () => {
    const { settingCb, settings } = this.props;
    return (
      <div className="setting-menu">
        <div className="setting-item">
          <label>
            <LywHoverCn
              dataSource={[{ ss: '字ti3 大小：', cn: '字体大小：' }]}
              fontStyle={{ fontSize: 14 }}
            />
          </label>
          <div>
            <Input
              type="number" max="48" min="12"
              value={settings.fontSize}
              onChange={(e) => { settingCb('fontSize', e.target.value); }}
            /> px
          </div>
        </div>
        <div className="setting-item">
          <label>
            <LywHoverCn
              dataSource={ [{ ss: '界面 主ti2：', cn: '界面主题：' }] }
              fontStyle={ { fontSize: 14 } }
            />
          </label>
          <div>
            <RadioGroup
              value={settings.theme}
              onChange={(e) => { settingCb('theme', e.target.value); }}
            >
              <RadioButton value="cold">
                <div className="theme-item cold"><div /><div /></div>
              </RadioButton>
              <RadioButton value="coldBack">
                <div className="theme-item coldBack"><div /><div /></div>
              </RadioButton>
            </RadioGroup>
          </div>
        </div>
      </div>
    );
  }
  _savingMenu = () => {
    return (
      <div className="saving-menu">
        <div className="saving-menu-desc">
          <Icon type="info-circle-o" />
          <LywHoverCn dataSource={[{
            ss: '可 在 此 本地 保存 当前 编ji2 内容，ye3 可以 读取 已有 文档',
            cn: '可在此本地保存当前编辑内容，也可以读取已有文档',
          }]} />
        </div>
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
  _tutorial = () => {

  }
  onRewrite = (index) => {
    // console.log(this.state);
    const { savingData = [] } = this.props;
    const { title } = savingData[index] || {};
    let content;
    if (!title) {
      // content = `${index+1}号存档为空，保存当前编辑内容到此存档吗？`;
      content = (
        <div className="modal-content">
          <div className="modal-content-notice">
            <LywView dataSource={`${index + 1}hao4 存档 wei2 空，保存 当前 编ji2区 内容 dao4 此 存档 ma0？请 qi3 新 标ti2 後 按 确认：`} fontStyle={{ fontSize: 12 }} />
          </div>
          <div className="modal-content-notice">
            {index + 1}号存档为空，保存当前编辑区内容到此存档吗？请起新标题后按确认：
          </div>
          <div>
            <MiniLywEditor
              ref={(r) => { this.titleEditor = r; }}
              inputProps={{ placeholder: '这里也是可以写龙彦文的' }}
            />
          </div>
        </div>
      );
    } else {
      const titleLyw = (
        <LywView
          dataSource={title}
          fontStyle={{ fontSize: 12, color: '#108ee9', fill: '#108ee9' }}
        />
      );
      content = (
        // lywMulti并行显示：
        <div className="modal-content">
          <div className="modal-content-notice">
            <LywView dataSource="确认 删除 标ti2 wei2 " fontStyle={{ fontSize: 12 }} />
            {titleLyw}
            <LywView dataSource={`d0 ${index + 1}hao4 原 文档，bing4 保存 当前 编ji2区 内容 dao4 此 存档 ma0？请 qi3 新 标ti2 後 按 确认：`} fontStyle={{ fontSize: 12 }} />
          </div>
          <div className="modal-content-notice">
            确认删除标题为{titleLyw}的{index + 1}号原文档，并保存当前编辑区内容到此存档吗？请起新标题后按确认：
          </div>
          <div>
            <MiniLywEditor
              ref={(r) => { this.titleEditor = r; }}
              inputProps={{ placeholder: title ? '不填即保留原标题' : '这里也是可以写龙彦文的' }}
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
        if (!title && !len) {
          // message.error(<div style={{width: 400}}>hello</div>, 222);
          message.error(<LywView dataSource="标ti2 hai2mei2 qi3 ne0" fontStyle={{ fontSize: 12 }} />);
          message.error('标题还没起呢');
        } else if (len > 22) {
          message.error(<LywView dataSource="字数 超guo4l0 neng2不neng2 duan3 一dian3" fontStyle={{ fontSize: 12 }} />);
          message.error('字数超过了，能不能短一点？');
        } else {
          message.success(<LywView dataSource="保存 成功" fontStyle={{ fontSize: 12 }} />);
          message.success('保存成功');
          closeCb();
          this.props.savingCb('rewrite', index, newTitle || title);
        }
      },
    });
  }
  onLoad = (index) => {
    // console.log(this.state);
    const { savingData = [] } = this.props;
    const { title } = savingData[index] || {};
    const titleLyw = (
      <LywView
        dataSource={title}
        fontStyle={{ fontSize: 12, color: '#108ee9', fill: '#108ee9' }}
      />
    );
    let content = (
      // lywMulti并行显示：
      <div className="modal-content">
        <div className="modal-content-notice">
          <LywView dataSource="确认 读取 标ti2 wei2 " fontStyle={{ fontSize: 12 }} />
          {titleLyw}
          <LywView dataSource={`d0 ${index + 1}hao4 文档？当前 编ji2区 内容 jiang1 bei4 清除。`} fontStyle={{ fontSize: 12 }} />
        </div>
        <div className="modal-content-notice">
          确认读取标题为{titleLyw}的{index + 1}号文档？当前编辑区内容将被清除。
        </div>
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
    const titleLyw = (
      <LywView
        dataSource={title}
        fontStyle={{ fontSize: 12, color: '#108ee9', fill: '#108ee9' }}
      />
    );
    let content = (
      // lywMulti并行显示：
      <div className="modal-content">
        <div className="modal-content-notice">
          <LywView dataSource="确认 删除 标ti2 wei2 " fontStyle={{ fontSize: 12 }} />
          {titleLyw}
          <LywView dataSource={`d0 ${index + 1}hao4 文档？此 操作 不可 恢复`} fontStyle={{ fontSize: 12 }} />
        </div>
        <div className="modal-content-notice">
          确认删除标题为{titleLyw}的{index + 1}号文档？此操作不可恢复。
        </div>
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