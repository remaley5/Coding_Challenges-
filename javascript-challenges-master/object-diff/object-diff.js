
const diff = (oldCode, newCode )  => {

  var differences = [];

  const pushRemaining = (value, lastKey) => {
    if(typeof value === "object" && value !== null) {
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
      pushRemaining(oldVal, lastKey + key + '.');
    } else if(typeof oldVal === "object" && oldVal !== null) {
      for(key in oldVal) {
        objectDiff(oldVal[key], newVal[key], lastKey ? lastKey + '.' + key : key);
      }
    } 
  }

  objectDiff(oldCode, newCode, null);
  console.log('differences: ', differences);
  //return differences;
}

const oldObj = {
  'apple': 'sauce',
  'stone': 'fruit',
  'orange': 'slice',
  'paddington': {
    'bear': 'yes'
  }
}


const newObj = {
  'apple': 'sauce',
  'stone': 'fruit',
}

console.log(diff(oldObj, newObj));

module.exports = diff
