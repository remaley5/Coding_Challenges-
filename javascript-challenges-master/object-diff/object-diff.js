
const diff = (newCode, oldCode)  => {

  let differences = [];

  const pushRemaining = (value, lastKey) => {
    if(typeof value === "object" && value !== null) {
      console.log('- calling again');
      for(key in value) {
        pushRemaining(value[key], lastKey ? lastKey + '.' + key : key);
      }
    } else {
      differences.push(['-', lastKey, value]);
    }
  }

  const objectDiff = (oldVal, newVal, lastKey) => {
    if(oldVal === newVal) {
      return;
    } else if((!newVal || !(typeof newVal === "object" && newVal !== null))) {
      pushRemaining(oldVal, lastKey);
    } else if(typeof oldVal === "object" && oldVal !== null) {
      for(key in oldVal) {
        objectDiff(oldVal[key], newVal[key], lastKey ? lastKey + '.' + key : key);
      }
    } 
  }

  objectDiff(oldCode, newCode, null);
  // objectDiff(newCode, oldCode, null);
  
  return differences;
}


const oldObj = {
  'apple': 'sauce',
  'stone': 'fruit',
  'orange': 'slice',
  'star': {
    'fruit': 'yes',
    'shape': 'yes',
    'color': 'no',
    'thing': {
      'sky': 'yes'
    }
  }
}

const newObj = {
  'apple': 'sauce',
  'stone': 'fruit',
  'paddington': {
    'bear': 'yes',
  }
}

// console.log(diff(oldObj, newObj));

module.exports = diff
