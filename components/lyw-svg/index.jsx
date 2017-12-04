import React from 'react';
import fontHei from './font-hei.jsx';

// const ffff = 'ffff';
export default {
  lywFont,
};

const svgProps = {
  // key,
  width: 450,
  height: 600,
  version: '1.1',
  xmlns: 'http://www.w3.org/2000/svg',
};

const strokeStyle = {
  stroke: '#000000',
  strokeLinecap: null,
  strokeLinejoin: null,
  strokeDasharray: null,
  strokeWidth: 0,
  fill: '#3f3f3f',
};

export const lywFont = ({
  code,
  key,
  fontStyle = {},
}) => {
  // 可进一步检查是不是龙彦code
  let phthList = [];
  const HENG = code[code.length - 1] === '5';
  // code.
  if (HENG) {
    phthList = parsePhthHeng(code);
  } else {
    phthList = parsePhth(code);
    console.log(phthList);
    // forEach & return svg
    return (
      <svg {...svgProps} key={key}>
        {
          phthList.map((phth, pKey) => {
            return (
              <g key={pKey}>
                {
                  fontHei(phth).map((d, dKey) => {
                    return <path d={d} key={dKey} {...strokeStyle} />;
                  })
                }
              </g>
            );
          })
        }
      </svg>
    );
  }
  return `phthList.join('#').toUpperCase()`;



//   let font =
//     <svg key={key} width="20" height="10" version="1.1" xmlns="http://www.w3.org/2000/svg">
//   <circle cx="10" cy="5" r="4" stroke="black" fill="red"/>
// </svg>
//   // let font = code.toUpperCase();
//   return font;
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
  //转结尾的un为uen
  code = code.replace(/un$/, "uen");
  //转结尾的ie, ve为iE, vE
  code = code.replace(/([ivy])e$/, "$1E");
  //转ei为Ei
  code = code.replace(/e(?=i)/, "E");
  //转结尾的ui, iu为uei, iou
  code = code.replace(/ui$/, "uEi");
  code = code.replace(/iu$/, "iou");
  //转zh, ch, sh, 全部！！！
  code = code.replace(/zh/, "j");
  code = code.replace(/ch/, "q");
  code = code.replace(/sh/, "x");
  //转ian, yan
  code = code.replace(/([iy])an$/, "$1En");

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
  if (code.match(reg = /^Ei|^ao|^ai|^ng/)) {
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
      if (/^[iuv]$/.test(phthList[1]) && phthList[2][0] != "n" && phthList[1] + phthList[2] !== "uo") {
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
        phthList[0] += "5";
        phthList[1] += "6";
      }
      break;
    case 1:
      phthList[0] += "14";
      break;
  }
  // console.log('after', phthList);
  return phthList;
}

/**
 * 横彦音素解析
 * @return {[type]} [description]
 */
const parsePhthHeng = (code) => {
  // 也许需要另备svg框
}
