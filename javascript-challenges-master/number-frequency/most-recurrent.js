const mostRecurrent = (set) => {
  let lastMax = 0;
  let max;
  let mostRec;
  set.forEach(current => {
    max = 0;
    set.forEach(second => {
      if(second === current) {
        max ++;
      }
    });
    if(max > lastMax) {
      mostRec = current;
    }
  });
  return mostRec;
}

module.exports = mostRecurrent
