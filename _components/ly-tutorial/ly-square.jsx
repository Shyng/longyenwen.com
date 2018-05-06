import React from 'react';
import LywView from 'components/lyw-view/index.jsx';

const fontStyle = { fontSize: 120 };

const squareItem = (props) => {
  // const {
  //   title, desc, value, pinyin,
  //   t, b, l, r, tl, bl, tr, br,
  // } = props;
  const { value, key } = props;
  const squarePart = (partName, isOptional) => {
    if (!isOptional || props[partName]) {
      return <div className={partName} key={partName}>{props[partName]}</div>;
    }
  };
  /* tr, br代替上下 */
  return (
    <div className="square-item" key={key || value}>
      {
        [
          /* 'title', 'desc', 'value', 'pinyin', */
          'b', 'l', 'r', 'tl', 'bl', 'tr', 'br',
        ].map(name => squarePart(name, true))
      }
      { squarePart('title') }
      { squarePart('desc') }
      <LywView dataSource={value} fontStyle={fontStyle} />
      { squarePart('pinyin') }
    </div>
  );

};

export default (props) => {
  const squareList = [
    squareItem({
      title: '单个字母',
      // desc: 'xxxxx',
      value: 'shi1',
      pinyin: 'shī',
      // t: '??',
      // tl: 'x',
      // l: '??',
      // bl: 'i',
      // tr: 'a',
      l: 'sh/x',
      // br: 'ng',
      b: '第1声',
    }),
    squareItem({
      title: '1左1右',
      // desc: 'xxxxx',
      value: 'sha1',
      pinyin: 'shā',
      // t: '??',
      // tl: 'x',
      l: 'sh/x',
      // bl: 'i',
      // tr: 'a',
      r: 'a',
      // br: 'ng',
      b: '第1声',
    }),
    squareItem({
      title: '1左1右',
      desc: 'sh遇到i/ü时，读音变为x',
      value: 'xi1',
      pinyin: 'xī',
      // t: '??',
      // tl: 'x',
      l: 'sh/x',
      // bl: 'i',
      // tr: 'a',
      r: 'i',
      // br: 'ng',
      b: '第1声',
    }),
    squareItem({
      title: '2左1右',
      desc: <div>左下角放 i/u/ü 这样的<a traget="_blank" href="https://baike.baidu.com/item/%E9%9F%B5%E5%A4%B4">韵头</a></div>,
      value: 'xia1',
      pinyin: 'xiā',
      // t: '??',
      tl: 'sh/x',
      // l: '??',
      bl: 'i',
      // tr: 'a',
      r: 'a',
      // br: 'ng',
      b: '第1声',
    }),
    squareItem({
      title: '1左2右',
      // desc: '',
      value: 'shang1',
      pinyin: 'shāng',
      // t: '??',
      // tl: 'x',
      l: 'sh/x',
      // bl: 'i',
      tr: 'a',
      // r: 'a',
      br: 'ng',
      b: '第1声',
    }),
    squareItem({
      title: '2左2右',
      // desc: '',
      value: 'xiang1',
      pinyin: 'xiāng',
      // t: '??',
      tl: 'sh/x',
      // l: 'sh/x',
      bl: 'i',
      tr: 'a',
      // r: 'a',
      br: 'ng',
      b: '第1声',
    }),
    squareItem({
      title: '1上1下',
      desc: '只有韵母',
      value: 'ang1',
      pinyin: 'āng',
      // t: '??',
      tr: 'a',
      // l: 'sh/x',
      // bl: 'i',
      // tr: 'a',
      // r: 'a',
      bl: 'ng',
      b: '第1声',
    }),
    squareItem({
      title: '轻声',
      desc: '去掉底部的音调符号，如“衣裳”的“裳”：',
      value: 'shang0',
      pinyin: 'shang',
      // t: '??',
      tr: 'a',
      l: 'sh/x',
      // bl: 'i',
      // tr: 'a',
      // r: 'a',
      br: 'ng',
      // b: '第1声',
    }),
  ];

  return (
    <div className="ly-square">
      { squareList }
      <div className="hengyen">
        <h3>横彦</h3>
        <div className="desc">外来词没有音调，不需要拼接成方块形，只需从左到右拼写即可，即横彦，如“莎士比亚”就是：</div>
        <div>
          <LywView dataSource="shakspir5" fontStyle={{ fontSize: 54 }} />
        </div>
        <div className="pinyin">x-a-k-s-p-i-er</div>
        <div className="note">注：横彦中的 zh/ch/sh 一律念成 j/q/x </div>
      </div>
    </div>
  );
};

