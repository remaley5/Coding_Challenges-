const mostRecurrent = (set) => {
  let lastMax = 0;
  nextArray = set;
  let max;
  let mostRec;
  let trackArray = [];
  set.forEach(current => {
    max = 0;
    set.forEach(second => {
      if(second === current) {
        max ++;
      } else {
        trackArray.push(second);
      }
    });
    if(max > lastMax) {
      mostRec = current;
    }
    nextArray = trackArray;
    trackArray = [];
  });
  return mostRec;
}

module.exports = mostRecurrent
