import global from './../global';

class debug {
  constructor(target){
    this.copyLog = this.copyLog.bind(this);
    this.parentNode =target;
  }
  set(key, data, type){
    const { thread } = global;
    if(!thread.has(key)){
      thread.set(key, []);
    }
    const arr = thread.get(key);
    const date = new Date().debugformat('yyyy-MM-dd h:m:s');
    arr.push(`${date} ===> ${data}`);
    thread.set(key,arr);
  }
  get(key) {
    const { thread } = global;
    return thread.get(key);
  }
  info() {

  }
  copyLog() {
    const { thread } = global;
    const arr = [];
    for( const [key, value] of thread.entries()) {
      arr.push(`流程: ${key}======>`);
      arr.push(value.join('\r\n'));
    }
    console.log(this.parentNode);
    this.parentNode.value = arr.join('\r\n');
    this.parentNode.select();
    const bol = document.execCommand('Copy');
    if(bol){
      console.log('复制成功');
    }
  }
}

export default debug;
