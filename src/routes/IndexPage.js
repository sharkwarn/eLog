import React from 'react';
import { connect } from 'dva';
import Example from './../components/Example';
import styles from './IndexPage.css';
import throwError from './throwError';
import eLog from './../lib';
const {debug} = eLog;

function IndexPage() {
  debug.set('line1','第一步：11111111');
  debug.set('line1','第二步：22222222');
  debug.set('line1','第三步：33333333');
  debug.set('line1','第四步：44444444');
  return (
    <div className={styles.normal}>
      <button onClick={throwError}>click me will throw a error</button>
      <button onClick={eLog.copyError} >复制错误信息</button>
      <button onClick={debug.copyLog} >复制日志</button>
      <Example />
    </div>
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
