import global from './global';
import winAttachError from './winAttachError';
import giveStyle from './giveStyle';
import debug from './debug';

Date.prototype.debugformat = function(format) {
  var date = {
         "M+": this.getMonth() + 1,
         "d+": this.getDate(),
         "h+": this.getHours(),
         "m+": this.getMinutes(),
         "s+": this.getSeconds(),
         "q+": Math.floor((this.getMonth() + 3) / 3),
         "S+": this.getMilliseconds()
  };
  if (/(y+)/i.test(format)) {
         format = format.replace(RegExp.$1, (this.getFullYear() + '').substr(4 - RegExp.$1.length));
  }
  for (var k in date) {
         if (new RegExp("(" + k + ")").test(format)) {
                format = format.replace(RegExp.$1, RegExp.$1.length == 1
                       ? date[k] : ("00" + date[k]).substr(("" + date[k]).length));
         }
  }
  return format;
}

class eLog {
  constructor(){
    this.get = this.get.bind(this);
    this.copyError = this.copyError.bind(this);
    this.errorAttach();
    this.createTextarea();
    this.textarea.value = 'aaaa';
    this.debug = new debug(this.textarea);
  }
  errorAttach(){
    window.onerror = winAttachError;
  }
  get() {
    return global;
  }

  createTextarea(){
    this.textarea = document.createElement('textarea');
    giveStyle(this.textarea, {
      position: 'fixed',
      left: '0',
      bottom: '0',
      width: '400px',
      height: '200px'
    })
    document.body.appendChild(this.textarea);
  }

  copyError() {
    this.textarea.value = global.globalError.join('\r\n');
    this.textarea.select();
    const bol = document.execCommand('Copy');
    if(bol){
      console.log('复制成功');
    }
  }
}
window.log = new eLog();

export default log;