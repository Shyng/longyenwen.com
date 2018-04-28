import React from 'react'; 
// import { Tooltip } from 'antd';
import LywView from 'components/lyw-view/index.jsx';
import { klas } from 'components/_utils.js';

const viewCons = (value) => {
  let dataSource = `${value}d0`;
  if (value === 'er' || value === 'ng') {
    dataSource = `${value}0`;
  }
  return <LywView
    dataSource={dataSource}
    fontStyle={{ fontSize: 20 }}
  />
};

const basicPropsCons = (value) => ({
  pinyin: value,
  key: value,
  ly: viewCons(value),
  note: '',
});

const xUnit = (value, key) => (
  <span className="alphabet-example-unit" key={key}>
    <LywView dataSource={`${value}{ ${value}}`} fontStyle={{ fontSize: 16 }} />
  </span>
);

const xList = (list) => <div>{list.map((v, i) => xUnit(v, i))}</div>;

let data = {
  consonants_0: [
    { ...basicPropsCons('b'), example: xList(['ba3', 'bie2']), note: 'xxx' },
    { ...basicPropsCons('p'), example: xList(['pai1', 'piao4']), },
    { ...basicPropsCons('m'), example: xList(['', 'bie2']), },
    { ...basicPropsCons('f'), example: xList(['ba3', 'bie2']), },
    { ...basicPropsCons('d'), example: xList(['ba3', 'bie2']), },
    { ...basicPropsCons('t'), example: xList(['ba3', 'bie2']), },
    { ...basicPropsCons('n'), example: xList(['ba3', 'bie2']), },
    { ...basicPropsCons('l'), example: xList(['ba3', 'bie2']), },
    { ...basicPropsCons('z'), example: xList(['ba3', 'bie2']), },
    { ...basicPropsCons('c'), example: xList(['ba3', 'bie2']), },
    { ...basicPropsCons('s'), example: xList(['ba3', 'bie2']), },
  ],
  consonants_1: [
    { ...basicPropsCons('g'), example: xList(['ba3', 'bie2']), note: '' },
    { ...basicPropsCons('k'), example: xList(['ba3', 'bie2']), },
    { ...basicPropsCons('h'), example: xList(['ba3', 'bie2']), },
    { ...basicPropsCons('ng'), example: xList(['ba3', 'bie2']), },
    { ...basicPropsCons('j'), pinyin: 'j/zh', example: xList(['ba3', 'bie2']), note: '放在i/ü之前代表j',  },
    { ...basicPropsCons('q'), pinyin: 'q/ch', example: xList(['ba3', 'bie2']), note: '放在i/ü之前代表q', },
    { ...basicPropsCons('x'), pinyin: 'x/sh', example: xList(['ba3', 'bie2']), note: '放在i/ü之前代表x', },
    { ...basicPropsCons('r'), example: xList(['ba3', 'bie2']), },
    // { ...basicPropsCons('y'), example: '', note: '' },
    // { ...basicPropsCons('w'), example: '', note: '' },
    // { ...basicPropsCons('yu'), example: '', note: '' },
    { ...basicPropsCons('er'), example: xList(['ba3', 'bie2']), },
  ],
  vowels: [],
  tones: [],
};

// data.consonants = [

// ].map((cons) => ({
//   key: cons,
//   ly: cons,
//   pinyin: cons,
//   key: cons,
// }))


export default data;
