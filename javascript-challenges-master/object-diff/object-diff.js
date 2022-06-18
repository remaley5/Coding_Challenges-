// Values are only number types?

const diff = (newCode, oldCode) => {
  // declare differences array
  let differences = [];
  
  // Loop through newCode object
  let newCodeClone = {...newCode};
  
  for(key in oldCode) {
    // find matching key in oldCode Object and compare
    if(newCodeClone[key]) {
      // remove from clone
      delete newCodeClone[key];
      // If different create description array and push
        // greater than or less than
    } else {
      differences.push(['-', key, oldCode[key]]);
    }
  }

  for(key in newCodeClone) {
    differences.push(['+', key, newCodeClone[key]]);
  }

  return differences;
  // return 

}

module.exports = diff
