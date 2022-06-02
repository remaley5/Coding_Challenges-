const parensAreBalanced = (input) => {
  var tracking = [];

  let openParams = '{[(';
  let closeParams = '}])';
  let current;
  let lastParam;


  // Loop through string
  for(let i = 0; i < input.length; i++) {
    current = input[i];
    
    if(openParams.includes(current)) {
      // If forward param add to tracking
      tracking.unshift(current);
    
      // else reverse param is found, check the last param in tracking
    } else if(closeParams.includes(current)) {
        lastParam = tracking[0];
        if(
          (current === '}' && lastParam === '{') ||
          (current === ')' && lastParam === '(') ||
          (current === ']' && lastParam === '[') 
          ) {
            // if they are a match remove match from tracking
            tracking.shift();
          } else {
            // If not a match return false
          return false;
        }
    }
    // Otherwise it's not a param and can be ignored
  }
  
  // if it makes it through check for remaining params
  if(tracking.length === 0) {
    return true;
  } else {
    return false;
  }
}

module.exports = parensAreBalanced
