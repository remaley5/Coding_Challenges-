
const diff = (oldCode, newCode )  => {

  let differences = [];

  const pushRemaining = (value, lastKey) => {
    console.log('PR: lastKey: ', lastKey);
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
    console.log('oD: LastKey: ', lastKey);
    if(oldVal === newVal) {
      return;
    } else if((!newVal || !(typeof newVal === "object" && newVal !== null))) {
      console.log(' - calling pR')
      pushRemaining(oldVal, lastKey);
    } else if(typeof oldVal === "object" && oldVal !== null) {
      for(key in oldVal) {
        console.log('- calling again', lastKey, key);
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

console.log(diff(oldObj, newObj));

module.exports = diff
