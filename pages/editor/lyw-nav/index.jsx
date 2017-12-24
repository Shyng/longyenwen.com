import React from 'react';
import LywView from 'components/lyw-view/index.jsx';

// console.log(LywView);

class LywNav extends React.Component {
  render() {
    return (
      <div className="lyw-nav">
        <LywView
          dataSource={[{
            ss: 'long2yan4wen2 bian1ji2qi4',
            cn: '龙彦文 编辑器'
          }]}
          viewType="hover"
          langs={['ss', 'cn']}
          animType="fade"
        />
      </div>
    );
  }
}

export default LywNav;