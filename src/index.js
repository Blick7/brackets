module.exports = function check(str, bracketsConfig) {
  let joined = bracketsConfig.map(item => item.join(''));
  let buff;
  for (let i = 0; i < str.length + joined.length; i++) {
    joined.forEach(item => {
      while (str.includes(item)) {
        str = str.replace(item, '');
        //console.log(str);
      }
    });
  }
  console.log(joined);
  return str.length == 0;
}

console.log(module.exports('([{}])', [['(', ')'], ['[', ']'], ['{', '}']])); // true
