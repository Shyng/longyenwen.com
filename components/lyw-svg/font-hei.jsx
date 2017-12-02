import React from 'react';

/**
 * [黑体字形大全]
 * $起头的是音调
 * _起头的是横彦
 * 浊音符号是_$
 */
export default (phth) => {
  // const VoicedSign = ''; // 浊音符号
  // 复用的在这里
  //
  const characterMap = {
    a1: '',
    _a: '',
    _t: '',
    _$: '',
  };
  return characterMap[phth];
};
