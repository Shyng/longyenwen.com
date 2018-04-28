
export const sensianize = (cn) => (
  cn.replace(
    new RegExp(`[${Object.keys(sensianHantzyMap).join('')}]`, 'g'),
    c => sensianHantzyMap[c]
  )
);

const sensianHantzyMap = {
  汉: '漢',
  时: '時',
  邓: '鄧',
  对: '對',
  观: '觀',
  欢: '歡',
  鸡: '雞',
  艰: '艱',
  阶: '階',
  节: '節',
  杰: '傑',
  仅: '僅',
  进: '進',
  礼: '禮',
  怜: '憐',
  邻: '鄰',
  刘: '劉',
  浏: '瀏',
  权: '權',
  劝: '勸',
  杀: '殺',
  胜: '勝',
  圣: '聖',
  叹: '嘆',
  习: '習',
  叶: '葉',
  远: '遠',  
  园: '園',
  赵: '趙',
  郑: '鄭',
};

