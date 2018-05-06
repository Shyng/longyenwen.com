import React from 'react';
// import ReactDOM from 'react-dom';
import { Tabs } from 'antd';
import './index.less';
// import { klas } from 'components/_utils.js';
// import { klas } from 'components/_utils.js';
import LywView from 'components/lyw-view/index.jsx';
import Alphabet from 'components/alphabet/index.jsx';
import LySquare from './ly-square.jsx';
const { TabPane } = Tabs;

class LyTutorial extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {
    // };
  }
  render() {
    // const {  } = this.state;
    // const {  } = this.props;
    return (
      <div className="ly-tutorial-page">
        <Tabs defaultActiveKey="0">
          <TabPane tab="字形结构" key="0">
            <LySquare />
          </TabPane>
          <TabPane tab="字母表" key="1">
            <Alphabet />
          </TabPane>
          <TabPane tab="书写规则" key="2">
            <div className="ly-rules">
              <ol>
                <li>
                  书面语保留汉字，口语词、外来词用龙彦字母拼写。
                  <div className="sub">如“老子”一词，当表示先秦思想家李耳时，仍旧写成“老子”；当表示某种自称时，写作<LywView dataSource="lao3zi0" /></div>
                  <div className="sub">再比如“禅”一字，在“禅让”、“封禅”中，也就是念“shàn”音时，仍旧写成“禅”；当念成chán时，属于外来词，建议按照其印度音dhyana写作<LywView dataSource="diana5" /></div>
                </li>
                <li>外来词，指的是音译自汉字文化圈以外的语言的词汇，如人名、地名、化学元素等。
                  <div className="sub">须尽量按原语言读音进行音译，也可参考维吾尔语读音。除外来词部分，龙彦文读音和普通话完全一致。</div>
                </li>
                <li>单词之间必须加空格。否则容易引起歧义。</li>
              </ol>
              <div className="example-myth">
                <article className="myth">
                  <h3>以下是一篇龙彦文示例</h3>
                  <h4><LywView dataSource="paris5 d0 裁决" fontStyle={{ fontSize: 18 }} /></h4>
                  <LywView dataSource={[
                    { ss: '\t从前 有 一天，helas5 诸神 参加 一chang3 婚礼。复仇 女神 eris5 因为 mei2有 bei4 邀请 参加，fei1chang2 生气。她 想出l0 一tiao2 诡计，在 一g0 金 苹果 上 写 “献gei3 zui4 美丽d0 女神” zhe4 几g0 字，然后 ba3 ta1 fang4 在 婚宴 现场。女神men0 看到l0 zhe4g0 金 苹果，引发l0 争执。天后 hela5、智慧 女神 atina5 he2 美神 venas5 dou1 认为 苹果 应当 属于 她 自己。' },
                    { ss: '\tyu2shi4，三位 女神 下凡 来到 人间，zhao3dao4 正在 ida5山 牧羊 d0 troi5 王子 paris5 寻求 裁决。wei4l0 la1long3 paris5 三位 女神 dou1 ti2chu1l0 诱人d0 条件：' },
                    { ss: '\thela5 da1应，如guo3 支持 她，paris5 jiang1 统治 zheng3ge4 asia5。' },
                    { ss: '\tatina5 ti2供 gei3 paris5 d0，shi4 无上d0 智慧。' },
                    { ss: '\ter2 venas5 ze2 许诺，支持 她d0 hao3处，shi4 neng2 de2dao4 世界上 zui4 piao4liang4d0 女人——sparta5 王后 helena5。' },
                    { ss: '\tparis5 经不zhu4 诱惑，选择 jiang1 金 苹果 判gei3 venas5。zhe4 bian4 wei4 今后 旷日持久d0 troi5 战争 埋下l0 祸根。' },
                  ]} />
                </article>
                <article className="myth-chinese">
                  <h3>中文释义</h3>
                  <h4>帕里斯的裁决</h4>
                  <p>从前有一天，希腊诸神参加一场婚礼。复仇女神埃里斯因为没有被邀请参加，非常生气。她想出一条诡计，在一个金苹果上写“献给最美丽的女神”这几个字，然后把它放在婚宴现场。女神们看到了这个金苹果，引发了争执。天后赫拉、智慧女神神雅典娜和美神维纳斯都认为苹果应当属于她自己。</p>
                  <p>于是，三位女神下凡来到人间，找到正在伊达山上牧羊的特洛伊王子帕里斯寻求裁决。为了拉拢帕里斯，三位女神都提出了诱人的条件：</p>
                  <p>赫拉答应，如果支持她，帕里斯将统治整个亚洲。</p>
                  <p>雅典娜提供给帕里斯的，是无上的智慧。</p>
                  <p>而维纳斯则许诺，支持她的好处，是能得到世界上最漂亮的女人——斯巴达王后海伦。</p>
                  <p>帕里斯经不住诱惑，选择将金苹果判给维纳斯。这便为今后旷日持久的特洛伊战争埋下了祸根。</p>
                </article>
              </div>
            </div>
          </TabPane>
        </Tabs>
      </div>
    );
  }
}

export default LyTutorial;