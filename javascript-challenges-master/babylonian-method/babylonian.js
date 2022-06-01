const squareRoot = (radicand) => {

  if(!(typeof radicand === 'number' && radicand >= 0)) {
    return NaN;
  }

  let interval = 0;
  let root = radicand / 2;
  
  while(interval < 100) {
    let result = radicand/root;
    if(result == root) {
      return root;
    } else if (result > root) {
      root = result / 2;
    } else {
      root = (root + result) / 2;
    }
    interval ++;
  }
  return root
}

module.exports = squareRoot
