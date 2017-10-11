import global from './global';

function WindowAttachError(err, origin, x, y) {
  const date = new Date().debugformat('yyyy-MM-dd h:m:s');
  global.globalError.push(`${date} ===> ${err} 。 from => ${origin}。 position:${x}  ${y}`);
}

export default WindowAttachError;
