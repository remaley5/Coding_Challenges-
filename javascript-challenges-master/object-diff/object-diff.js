
const diff = (newCode, oldCode)  => {

  let differences = [];

  const pushRemaining = (value, lastKey, op) => {
    if(typeof value === "object" && value !== null) {
      for(key in value) {
        pushRemaining(value[key], lastKey ? lastKey + '.' + key : key, op);
      }
    } else {
      differences.push([op, lastKey, value]);
    }
  }

  const objectDiff = (oldVal, newVal, lastKey, op) => {
    if(oldVal === newVal) {
      return
    } else if((typeof oldVal === "object" && oldVal !== null) && (typeof newVal === "object" && newVal !== null)) {
      for(key in oldVal) {
        objectDiff(oldVal[key], newVal[key], lastKey ? lastKey + '.' + key : key, op);
      } 
    } else {
      pushRemaining(oldVal, lastKey, op);
    }
  }

  objectDiff(oldCode, newCode, null, '-');
  objectDiff(newCode, oldCode, null, '+');
  
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
