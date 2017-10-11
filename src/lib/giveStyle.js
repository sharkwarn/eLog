const giveStyle = ( dom, obj = {} )=> {
  for (const [ key, value ] of Object.entries(obj)) {
    const str = key.replace(/(.+)([A-Z])(.+)/, ( a , b = '', c = '', d = '') => {
      const arr= [];
      if (c) {
        c='-'+c;
      }
      return b + c.toLowerCase() + d;
    });
    dom.style[str] = value;
  }
};

export default giveStyle;