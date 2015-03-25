module.exports = function(str, spaceValue) {
  if (typeof str !== 'string') {
    throw new Error('input must be a string');
  }
  var spaceValue = typeof spaceValue === 'undefined' ? ' ' : spaceValue;
  return str.replace(/(\w)([.!?]+)(\w)/g, '$1$2'+spaceValue+'$3');
};
