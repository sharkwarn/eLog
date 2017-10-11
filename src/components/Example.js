import React from 'react';
import eLog from './../lib';
const {debug} = eLog;
const Example = () => {

  debug.set('line2','第一步：11111111');
  debug.set('line2','第二步：22222222');
  debug.set('line2','第三步：33333333');
  debug.set('line2','第四步：44444444');
  return (
    <div>
      子组件
    </div>
  );
};

Example.propTypes = {
};

export default Example;
