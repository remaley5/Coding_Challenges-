const parensAreBalanced = (input) => {
  var trackOpenParams = [];

  let openParams = '{[(';
  let closeParams = '}])';
  let current;


  // Loop through string
  for(let i = 0; i < input.length; i++) {
    current = input[i];
    
    if(!(closeParams.includes(current) || openParams.includes(current))) {
      // ignore if it's not a param
      continue;
    } else if (openParams.includes(current)) {
      // track open params
      trackOpenParams.unshift(current);
    } else if ( openParams.indexOf(trackOpenParams[0])  === closeParams.indexOf(current)) {
      // removed matched params from tracking
      trackOpenParams.shift();
    } else {
      // return false if unmatched is found
      return false;
    }
  }
  
  if(trackOpenParams.length === 0) {
    // return true if all params were matched
    return true;
  } else {
    // return false if unmatched params remain
    return false;
  }
}

module.exports = parensAreBalanced
