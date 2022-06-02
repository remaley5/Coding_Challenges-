//----------------------
// Recursion
//----------------------

function recurse(set, lastMax, num) {
  if(set.length === 0) {
    return num;
  } 

  let current = set[0];
  let max = 0;
  let arr = [];

  set.forEach(second => {
    if(current === second) {
      max ++;
    } else {
      arr.push(second);
    }
  });
  
  if(lastMax >= max) {
    // reset to last
    current = num;
    max = lastMax;
  }

  return recurse(arr, max, current);
}

const mostRecurrent = (set) => {
  return recurse(set, 0, null);
}


//----------------------------
// With Nested Loop
//----------------------------

// const mostRecurrent = (set) => {
//   let lastMax = 0;
//   nextArray = set;
//   let max;
//   let mostRec;
//   let trackArray = [];
//   set.forEach(current => {
//     max = 0;
//     set.forEach(second => {
//       if(second === current) {
//         max ++;
//       } else {
//         trackArray.push(second);
//       }
//     });
//     if(max > lastMax) {
//       mostRec = current;
//     }
//     nextArray = trackArray;
//     trackArray = [];
//   });
//   return mostRec;
// }

module.exports = mostRecurrent
