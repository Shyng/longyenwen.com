import React from 'react';
import fontHei from './font-hei.jsx';
import { DEFAULT_FONT_SIZE } from 'components/_utils.js';

export default {
  lywFont,
};

const defaultStrokeStyle = {
  stroke: '#000000',
  strokeLinecap: null,
  strokeLinejoin: null,
  strokeDasharray: null,
  strokeWidth: 0,
  // fill: '#333',
};

export const lywFont = ({
  code,
  key,
  fontStyle = {},
}) => {
  const {
    fontSize = DEFAULT_FONT_SIZE,
    lineHeight = fontSize * 1.5,
  } = fontStyle;
  const svgProps = {
    width: fontSize,
    height: parseInt(lineHeight),
    version: '1.1',
    xmlns: 'http://www.w3.org/2000/svg',
    // viewBox: '0 -25 100 150',
    viewBox: '0 12 100 100',
  };
  
  let newFontStyle = { ...fontStyle };
  delete newFontStyle.lineHeight;

  const strokeStyle = Object.assign(defaultStrokeStyle, newFontStyle, {
    fill: fontStyle.fill || '#333',
    stroke: fontStyle.fill || '#333', // 往后可用于bold
  });

  // 可进一步检查是不是龙彦code
  // let phthList = [];
  const tone = code[code.length - 1];
  const HENG = tone === '5';
  // code.
  if (HENG) {
    const HENG_W = 55;
    // 还要断音节，防止过长
    let syllList = parsePhthHeng(code.slice(0, code.length - 1));
    // return syllList.join('|');
    return (
      <span key={key}>
        {
          syllList.map((syll, svgKey) => {
            svgProps.viewBox = `10 -0 ${HENG_W * syll.length} 100`;
            svgProps.width = fontSize / 2 * syll.length;
            return (
              <svg {...svgProps} key={svgKey}>
                {
                  syll.map((phth, gKey) => (
                    <g key={gKey} transform={`translate(${HENG_W * gKey} 0)`}>
                      {
                        fontHei(phth).map(
                          (d, dKey) => <path d={d} key={dKey} {...strokeStyle} />
                        )
                      }
                    </g>
                  ))
                }
              </svg>
            );
          })
        }
      </span>
    );
  } else {
    if (tone === '0') {
      svgProps.viewBox = '0 -0 100 100';
    }
    let phthList = parsePhth(code);
    // console.log(phthList);
    return (
      <svg {...svgProps} key={key}>
        {
          phthList.map((phth, gKey) => {
            return (
              <g key={gKey}>
                {
                  fontHei(phth).map(
                    (d, dKey) => <path d={d} key={dKey} {...strokeStyle} />
                  )
                }
              </g>
            );
          })
        }
      </svg>
    );
  }
  // return `phthList.join('#').toUpperCase()`;
};

/**
 * 方彦音素解析
 * @return {[type]} [description]
 */
const parsePhth = (code) => {
  let phthList = [];
  const tone = code[code.length - 1];
  code = code.slice(0, code.length - 1);

  //转zhi, chi, shi, ri, zi, ci, si
  code = code.replace(/^([zcsr]h?)i$/, "$1");
  //合并wu, yi为无声母的u,i
  code = code.replace(/wu/, "u");
  code = code.replace(/yi/, "i");
  //转u为v
  code = code.replace(/(yu)|ü/, "v");
  code = code.replace(/([jqx])u/, "$1v");


  //转结尾的ie, ve为iE, vE
  code = code.replace(/([ivy])e$/, "$1E");
  //转lue, nue
  code = code.replace(/^([nl])ue$/, "$1vE");
  //转ian, yan
  code = code.replace(/([iy])an$/, "$1En");
  //转ei为Ei
  code = code.replace(/e(?=i)/, "E");

  //转结尾的uo为o，新增171215
  code = code.replace(/uo$/, "o");
  //转结尾的un为uen
  code = code.replace(/un$/, "uen");
  //转结尾的ui, iu为uei, iou
  code = code.replace(/ui$/, "uEi");
  code = code.replace(/iu$/, "iou");

  //转zh, ch, sh, 全部！！！
  code = code.replace(/zh/, "j");
  code = code.replace(/ch/, "q");
  code = code.replace(/sh/, "x");

  /*拆分部件*/
  let reg;
  if (code.match(reg = /^[bpmfdtlgkhjqxrzcsyw]|^n(?!g)/)) { //parse 声母
    phthList[0] = code.match(reg);
    code = code.slice(1);
  }
  if (code.match(reg = /^[iuv](?=[aoeiuE])/)) { //parse y,w,yu
    phthList.push(code.match(reg));
    code = code.slice(1);
  }
  // if (code.match(reg = /^Ei|^ao|^ai|^ng/)) {
  if (code.match(reg = /^ng/)) {
    phthList.push(code.match(reg));
    code = code.slice(2);
  } else if (code.match(reg = /^a|^o|^e(?!r)|^E|^i|^u|^v/)) {
    phthList.push(code.match(reg));
    code = code.slice(1);
  }
  code.length > 0 && phthList.push(code); //parse 剩下的部件
  // 不好意思，又要遍历一次了
  /*根据部件数量分配位置*/

  // console.log('before: ', phthList);
  switch (phthList.length) {
    case 4:
      for (var i = 0; i < 4; phthList[i] += i + 1, i++);
      break;
    case 3:
      if (
        /^[iuv]$/.test(phthList[1]) && phthList[2][0] != "n" &&
        phthList[1] + phthList[2] !== "uo"
      ) {
        phthList[0] += "1"; //排除uo
        phthList[1] += "2";
        phthList[2] += "34";
      } else {
        phthList[0] += "12";
        phthList[1] += "3";
        phthList[2] += "4";
      }
      break;
    case 2:
      if (
        /^[bpmfdtnlgkhjqxrzcsyw]$/.test(phthList[0]) ||
        (phthList[0] == "v" && phthList[1] != "n")
      ) {
        phthList[0] += "12";
        phthList[1] += "34";
      } else {
        phthList[0] += "13";
        phthList[1] += "24";
      }
      break;
    case 1:
      phthList[0] += "14";
      break;
  }
  // console.log('after', phthList);
  if (+tone) {
    phthList.push('$' + tone);
  // } else {
  //   console.log('heng')
  }

  return phthList;
}

/**
 * 横彦音素解析
 * @return {[type]} [description]
 */
const parsePhthHeng = (code) => {
  let rafi = [
    []
  ]; // 里面先装一个篮子先
  const vowelPatt = /[aieou\u00eb\u00fc]/; // ë, ü
  const dcPatt = /ng|sh|ch|gh|zh|ts|dz|tz|kk|pp|tt|bh|dh|kh|rr/;
  // const dcEnds = ['g', 'h', 's', 'z'];
  let right = '';
  // NOTE 这里可以加 -
  // 从后面开始：
  const LEN = code.length;
  let i = LEN - 1;
  let n = 0;
  // let j = 0;
  for (; i >= 0;) {
    let curr = code[i];
    let basket = rafi[0]; // 篮子
    /**
    * @struct 条件判断的层次
    * - 是元音
    * - 是特殊元音，有'的
    * - 是辅音
    *   - 是dc辅音
    *   - 是r
    *   - 是其他辅音
    */
    if (vowelPatt.test(curr)) {
      basket.unshift(curr);
      right = curr;
      i--;
    } else if (curr === '\'') {
      if (code[i - 1] && /[ue]/.test(code[i - 1])) {
        curr = {
          e: '\u00eb',
          u: '\u00fc', 
        }[code[i - 1]];
        basket.unshift(curr);
        right = curr;
        i -= 2;
      } else {
        i--; // 直接跳过
      }
    } else {
      vowelPatt.test(right) && rafi.unshift([]);
      if (code[i - 1] && dcPatt.test(code[i - 1] + curr)) {
        // let withLeft = code[i - 1] + curr;
        curr = (code[i - 1] + curr);
        basket.unshift(curr);
        right = curr; // 1个还是2个？
        i -= 2;
      } else if (
        curr === 'r' &&
        code[i - 1] && vowelPatt.test(code[i - 1]) &&
        (!right || !vowelPatt.test(right))
      ) {
        basket.unshift('er');
        right = 'er';
        i--;
      } else {
        basket.unshift(curr);
        right = curr;
        i--;
      }
    }
    if (++n > 999) {
      break;
    }
  }
  if (rafi.length > 1 && !vowelPatt.test(rafi[0].join(''))) {
    rafi.splice(0, 2, [...rafi[0], ...rafi[1]]);
  }
  return rafi;
}
