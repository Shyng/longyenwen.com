import React from 'react';
import { Select } from 'antd';
import LywView from 'components/lyw-view/index.jsx';

import { tsyphaiList, koelvList, syllableList } from './origin-tsy-list.js';

const { Option } = Select;

export default class Tsy extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // ind
    };
  }

  handleChange = (value) => {
    this.setState({ value });
  }

  generateTsy = (koelv) => {
    // 符号：○平声 ●仄声 ⊙可平可仄 △平韵 ▲仄韵
    let tsy = [];
    for (let i = 0; i < koelv.length; i++) {
      // const element = array[i];
      const syll = syllableList[~~(Math.random() * 413)];
      switch (koelv[i]) {
        case '○':
        case '△':
          tsy.push(`${ syll }${ ~~(Math.random() * 2) + 1 }`);
          break;
        case '●':
        case '▲':
          tsy.push(`${syll }${ ~~(Math.random() * 2) + 3 }`);
          break;  
        case '⊙':
          tsy.push(`${syll}${~~(Math.random() * 4) + 1}`);
          break;  
        // case value:
        //   break;
        default:
          tsy.push(koelv[i]);
      }
    }
    tsy = tsy.join('');
    console.log(tsy);
    return (
      <LywView
        fontStyle={{ fontSize: this.props.fontSize }} 
        dataSource={tsy}
      />
    );
  }

  render() {
    const { value } = this.state;
    return (
      <div className="tsy">
        <Select className="tsy-select" onChange={this.handleChange}>
          {
            tsyphaiList.map((tsyphai, i) => {
              return <Option value={`${i}`} key={i}>{tsyphai}</Option>;
            })
          }
        </Select>
        <div className="tsy-body">
          {
            value &&
            <div>
              {/* <h4 className="tsy-title">
                { tsyphaiList[value].replace(/\d+[\.\．]/, '') }
              </h4> */}
              <div className="tsy-content">
                { this.generateTsy(koelvList[value]) }
              </div>
            </div>
          }
        </div>
      </div>
    );
  }
}


// const reg = /\d+[\.．]\s*[\u4e00-\u9fa5（）\(\)]+\s/g;

// const tsyphaiList = originTsy.match(reg);
// const contentList = originTsy.split(reg).slice(1);
// console.log(JSON.stringify(tsyphaiList), JSON.stringify(contentList));

/*
 * @replace
 *  （换） 不知何意
 *  167．莺啼序 可保留
 *  137、139、130 可保留
*/
