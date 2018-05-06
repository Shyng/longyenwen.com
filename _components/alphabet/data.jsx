import React from 'react';
// import { Tooltip } from 'antd';
import LywView from 'components/lyw-view/index.jsx';
import { klas } from 'components/_utils.js';

const viewTone = (value) => <LywView
  dataSource={value}
  fontStyle={{ fontSize: 24 }}
/>;

const viewCons = (value) => {
  let dataSource = `${value}d0`;
  if (value === 'er' || value === 'ng') {
    dataSource = `${value}0`;
  }
  return <LywView
    dataSource={dataSource}
    fontStyle={{ fontSize: 16 }}
  />
};

const viewVowel = (value) => {
  let dataSource;
  switch (value) {
    case 'E':
      dataSource = '\'e5';
      break;
    case 'i':
      dataSource = 'yd0';
      break;
    case 'u':
      dataSource = 'wd0';
      break;
    case 'e':
      dataSource = 'e0';
      break;
    case 'ü':
      dataSource = 'yud0';
      break;
    default:
      dataSource = `\'${value}5`;
  }
  return <LywView
    dataSource={dataSource}
    fontStyle={{ fontSize: 16 }}
  />
}

const basicPropsCons = (value) => ({
  pinyin: value,
  key: value,
  ly: viewCons(value),
  note: '',
});

const basicPropsVowel = (value) => ({
  pinyin: value,
  key: value,
  ly: viewVowel(value),
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
    { ...basicPropsCons('b'), example: xList(['ba3', 'bie2']), },
    { ...basicPropsCons('p'), example: xList(['pai1', 'piao4']), },
    { ...basicPropsCons('m'), example: xList(['mei2', 'miao1']), },
    { ...basicPropsCons('f'), example: xList(['fang4', 'fo2']), },
    { ...basicPropsCons('d'), example: xList(['dei3', 'duang1']), },
    { ...basicPropsCons('t'), example: xList(['ti2', 'tuo1']),  },
    { ...basicPropsCons('n'), example: xList(['ni3', 'niu2']), },
    { ...basicPropsCons('l'), example: xList(['la1', 'lia3']), },
    { ...basicPropsCons('z'), example: xList(['zen3', 'zui4']), },
    { ...basicPropsCons('c'), example: xList(['cao4', 'cuo2']), },
  ],
  consonants_1: [
    { ...basicPropsCons('s'), example: xList(['sao1', 'suan4']), },
    { ...basicPropsCons('g'), example: xList(['geng4', 'gua1']), note: '' },
    { ...basicPropsCons('k'), example: xList(['ku4', 'kua3']), },
    { ...basicPropsCons('h'), example: xList(['hen3', 'hun4']), },
    { ...basicPropsCons('ng'), example: xList(['zhuang1', 'ying1']), },
    { ...basicPropsCons('j'), pinyin: 'j/zh', example: xList(['zhi1', 'zha1', 'jia1']), note: '放在i/ü之前代表j',  },
    { ...basicPropsCons('q'), pinyin: 'q/ch', example: xList(['que4', 'che3']), note: '放在i/ü之前代表q', },
    { ...basicPropsCons('x'), pinyin: 'x/sh', example: xList(['xie1', 'she4']), note: '放在i/ü之前代表x', },
    { ...basicPropsCons('r'), example: xList(['reng1', 'ruan3']), },
    // { ...basicPropsCons('y'), example: '', note: '' },
    // { ...basicPropsCons('w'), example: '', note: '' },
    // { ...basicPropsCons('yu'), example: '', note: '' },
    { ...basicPropsCons('er'), example: xList(['er2qie3', 'na4er0']), },
  ],
  vowels: [
    { ...basicPropsVowel('a'), example: xList(['ma1', 'ruan3']), },
    { ...basicPropsVowel('o'), example: xList(['nong4', 'shuo1']), note: '韵母“-uo”可以省去中间的u，如 huo -> ho' },
    { ...basicPropsVowel('e'), example: xList(['re4', 'leng3']), },
    { ...basicPropsVowel('E'), example: xList(['ye3', 'jue2', 'mian4']), note: 'i/ü后面的那个e，以及“-ian”中的a' },
    { ...basicPropsVowel('i'), example: xList(['ya3', 'di3', 'dia3', 'ding3', 'gei3']), note: '可以是声母或韵母，有横、竖两种状态' },
    { ...basicPropsVowel('u'), example: xList(['wo3', 'hu3', 'gun3']), note: '可以是声母或韵母' },
    { ...basicPropsVowel('ü'), example: xList(['nü3', 'yuan2', 'xue1']), note: '可以是声母或韵母' },
  ],
  tones: [{
    key: 0,
    y1: viewTone('y1'),
    y2: viewTone('y2'),
    y3: viewTone('y3'),
    y4: viewTone('y4'),
  }],
};

// data.consonants = [

// ].map((cons) => ({
//   key: cons,
//   ly: cons,
//   pinyin: cons,
//   key: cons,
// }))


export default data;
